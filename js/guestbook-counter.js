/* saved as duda. — public Supabase integration, no secret keys. */
(() => {
  'use strict';
  const cfg = window.DUDA_SUPABASE || {};
  const vc = document.getElementById('vc');
  const vn = document.getElementById('visit-note');
  const list = document.getElementById('gb-list');
  const form = document.getElementById('gbf');
  const note = document.getElementById('gb-status');
  const btn = document.getElementById('gs');
  const valid = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test((cfg.url || '').trim()) && !!(cfg.anonKey || '').trim();
  if (!valid) {
    vc.textContent = '······';
    vn.textContent = 'global visits ✦';
    note.textContent = 'Notes appear here after approval ♡';
    btn.disabled = true;
    return;
  }
  const url = cfg.url.replace(/\/$/, '');
  const headers = {'apikey': cfg.anonKey, 'Content-Type': 'application/json'};
  async function request(path, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(url + path, {headers, ...options, signal:controller.signal});
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const body = await response.text();
      return body ? JSON.parse(body) : null;
    } finally {clearTimeout(timer);}
  }
  function getVisitorId() {
    try {
      const name = 'duda-visitor-id';
      const old = localStorage.getItem(name);
      if (old && /^[0-9a-f-]{36}$/i.test(old)) return old;
      const fresh = crypto.randomUUID();
      localStorage.setItem(name, fresh);
      return fresh;
    } catch {return crypto.randomUUID();}
  }
  function showMessage(name, message, when) {
    const entry = document.createElement('div');
    entry.className = 'gb-entry gb-visitor-entry';
    const p = document.createElement('p');
    p.textContent = '“' + message + '”';
    const footer = document.createElement('footer');
    const b = document.createElement('b');
    b.textContent = name;
    footer.append('— ', b);
    if (when) {
      const span = document.createElement('span');
      span.textContent = ' · ' + new Date(when).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
      footer.append(span);
    }
    entry.append(p,footer);
    list.append(entry);
  }
  async function refreshMessages() {
    try {
      const data = await request('/rest/v1/duda_guestbook?select=name,message,created_at&status=eq.approved&order=created_at.desc&limit=15');
      list.replaceChildren();
      (data || []).forEach(item => showMessage(item.name, item.message, item.created_at));
    } catch {
      note.textContent = 'Messages temporarily unavailable. Please try again later.';
    }
  }
  async function refreshCounter() {
    try {
      const data = await request('/rest/v1/rpc/duda_record_visit', {method:'POST',body:JSON.stringify({p_visitor_id:getVisitorId()})});
      const n = Number(data);
      if (!Number.isFinite(n)) throw Error('Invalid count');
      vc.textContent = String(n).padStart(6,'0');
      vn.textContent = 'global daily visits ✦';
    } catch {
      vc.textContent = '------';
      vn.textContent = 'counter temporarily unavailable';
    }
  }
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (document.getElementById('gb-website').value.trim()) return;
    const name = document.getElementById('gn').value.trim();
    const message = document.getElementById('gm').value.trim();
    if (name.length < 1 || name.length > 40 || message.length < 1 || message.length > 300) {
      note.textContent = 'Please enter your name and a short message.';
      return;
    }
    btn.disabled = true;
    note.textContent = 'sending...';
    try {
      await request('/rest/v1/rpc/duda_submit_guestbook', {method:'POST',body:JSON.stringify({p_name:name,p_message:message,p_visitor_id:getVisitorId()})});
      form.reset();
      note.textContent = 'Thank you! Your note will appear here after approval ♡';
    } catch {
      note.textContent = 'Could not send your note. Please try again later.';
    } finally {btn.disabled = false;}
  });
  refreshCounter();
  refreshMessages();
})();
