/* saved as duda — theme switch (day / night)
   - guarda a escolha em localStorage ("duda-theme")
   - o <script> inline no <head> do index.html aplica o tema antes de pintar a página (sem "piscar")
   - vaga-lumes: criados só uma vez, e só aparecem no tema escuro (CSS cuida disso) */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var note = document.getElementById('theme-note');
  if (!btn) return;

  function isDark() { return root.getAttribute('data-theme') === 'dark'; }

  function paint() {
    var dark = isDark();
    btn.setAttribute('aria-checked', String(dark));
    if (note) note.textContent = dark ? 'sky: after dark ✦' : 'sky: daytime';
    /* se você usar o <meta name="theme-color">, dá pra atualizar aqui */
  }

  function set(dark) {
    if (dark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('duda-theme', dark ? 'dark' : 'light'); } catch (e) {}
    paint();
    window.dispatchEvent(new Event('desktop:layout')); /* avisa o código dos ícones soltos */
  }

  btn.addEventListener('click', function () { set(!isDark()); });
  paint();

  /* vaga-lumes (estilo luzinhas do jardim) */
  var ff = document.createElement('div');
  ff.className = 'fireflies';
  ff.setAttribute('aria-hidden', 'true');
  function r(a, b) { return a + Math.random() * (b - a); }
  for (var i = 0; i < 16; i++) {
    var f = document.createElement('i');
    f.style.cssText =
      'left:' + r(2, 98).toFixed(1) + '%;top:' + r(25, 96).toFixed(1) + '%;' +
      '--s:' + r(3, 5.5).toFixed(1) + 'px;--t:' + r(12, 22).toFixed(1) + 's;--b:' + r(2.6, 5).toFixed(1) + 's;' +
      '--d:-' + r(0, 14).toFixed(1) + 's;' +
      '--x1:' + r(-40, 40).toFixed(0) + 'px;--y1:' + r(-40, 0).toFixed(0) + 'px;' +
      '--x2:' + r(-40, 40).toFixed(0) + 'px;--y2:' + r(-70, -10).toFixed(0) + 'px;' +
      '--x3:' + r(-40, 40).toFixed(0) + 'px;--y3:' + r(-50, 0).toFixed(0) + 'px;';
    ff.appendChild(f);
  }
  document.body.insertBefore(ff, document.body.firstChild); /* 1º filho = fica atrás do resto */
})();
