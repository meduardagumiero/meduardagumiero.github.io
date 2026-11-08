/* Complete operations case — fictional demonstration; does not reproduce company records. */
(() => {
'use strict';
const invoiceData = [
 {period:'P01',account:'51000',supplier:'Aurora Creative',cnpj:'XX.XXX.XXX/0001-01',nf:'NF-1041',amount:9000,criteria:'ALL',prov:'PAID IN PERIOD',pay:'LEDGER',po:'PO-1101',flow:'FL-301'},
 {period:'P01',account:'62000',supplier:'Bloom Studio',cnpj:'XX.XXX.XXX/0001-02',nf:'NF-1042',amount:6000,criteria:'NORTH',prov:'ACCRUAL',pay:'PO CREATED',po:'PO-1102',flow:'FL-302'},
 {period:'P01',account:'62000',supplier:'Paper Moon Media',cnpj:'XX.XXX.XXX/0001-03',nf:'NF-1043',amount:4500,criteria:'SOUTH',prov:'ACCRUAL',pay:'INVOICE RECEIVED',po:'PO-1103',flow:'FL-303'},
 {period:'P01',account:'73000',supplier:'Cloud Nine Design',cnpj:'XX.XXX.XXX/0001-04',nf:'NF-1044',amount:2400,criteria:'METRO',prov:'POSTED',pay:'WORKFLOW CREATED',po:'PO-1104',flow:'FL-304'},
 {period:'P02',account:'73000',supplier:'Little Star Studio',cnpj:'XX.XXX.XXX/0001-05',nf:'NF-1045',amount:1800,criteria:'ALL',prov:'REVERSAL',pay:'AWAITING INVOICE',po:'PO-1105',flow:'FL-305'}
];
const stores = [
 {id:'S-101',region:'NORTH',city:'Maple Town'}, {id:'S-102',region:'NORTH',city:'Rosewood'},
 {id:'S-103',region:'SOUTH',city:'Cedar Bay'}, {id:'S-104',region:'SOUTH',city:'Pine Grove'},
 {id:'S-105',region:'METRO',city:'Moon City'}
];
const provList=['ACCRUAL','REVERSAL','POSTED','REJECTED','PAID IN PERIOD'];
const payList=['AWAITING INVOICE','INVOICE RECEIVED','PO CREATED','PO APPROVED','WORKFLOW CREATED','LEDGER'];
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const money=n=>'R$ '+n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const th=t=>`<th scope="col">${esc(t)}</th>`;
const trInput=r=>`<tr><td>${r.period}</td><td>${r.account}</td><td>${esc(r.supplier)}</td><td>${esc(r.cnpj)}</td><td>${r.nf}</td><td class="num">${money(r.amount)}</td><td>${r.criteria}</td></tr>`;
const trStores=r=>`<tr><td>${r.id}</td><td>${r.region}</td><td>${esc(r.city)}</td></tr>`;
const navBtn=(phase,label)=>`<button type="button" class="ops-stage" data-ops-stage="${phase}" aria-pressed="false">${label}</button>`;
const divTitle=(n,title,sub)=>`<div class="ops-section-label"><span>${n}</span><div><strong>${title}</strong>${sub?`<small>${sub}</small>`:''}</div></div>`;
function markup(){return `
<div class="ops-case">
 <div class="ops-metrics"><div><strong>9h → &lt;1h</strong><small>est. time per monthly accrual close · ~90% less</small></div><div><strong>30+ → 1</strong><small>invoices allocated in a single refresh</small></div><div><strong>167</strong><small>stores in the allocation base</small></div></div>
 <p class="ops-mini-note">Time saved: measured over about 4 monthly closes, timed by me. It is my own measurement, not a system metric.</p>
 <div class="ops-opening"><p>When a recurring monthly process becomes too manual, the impact goes beyond time spent on spreadsheets. I noticed it was slowing the team down, so I took the initiative to rethink how marketing invoices were tracked, how accruals (expenses recorded before they’re paid) were allocated across stores, and how the team could monitor expenses against budget — using only the tools already available.</p><div class="ops-chips"><span>Focus · Marketing Operations</span><span>Tools · Excel + Power Query</span><span>Scope · 167 stores · 10+ recurring suppliers</span></div></div>
 <div class="ops-thesis"><p><b>the idea in one line:</b> process improvement doesn’t always require a new platform — it starts with understanding how the information moves.</p><p>An FP&amp;A (finance planning &amp; analysis) analyst’s early insight — that accrual status and payment status needed to be tracked separately — shaped the first version of the tracker. I built everything else from there.</p></div>
 ${divTitle('01','nine hours of filling columns by hand','the challenge')}
 <p>Every month, closing the marketing accruals meant identifying invoices, filling the tracker column by column, following payment progress and calculating each invoice’s store-level split by hand. Some invoices applied to all stores, others only to a region, so each one had to be distributed across its <em>eligible</em> stores — not simply divided by the whole network.</p>
 <details class="ops-gloss"><summary>mini glossary · accounting terms in plain English</summary><dl><dt>accrual</dt><dd>recording an expense you’ve incurred but haven’t paid yet (provisão)</dd><dt>ledger</dt><dd>the accounting record of expenses already paid and posted</dd><dt>PO</dt><dd>purchase order</dd><dt>NF</dt><dd>nota fiscal, the Brazilian invoice</dd><dt>P01, P02…</dt><dd>monthly accounting periods</dd></dl></details>
 ${divTitle('02','from manual columns to one refresh','before → after')}
 <div class="ops-ba"><div><b>before</b><ol><li>identify each invoice</li><li>fill every column by hand</li><li>calculate the store split by hand</li><li>paste the output</li></ol></div><div><b>after</b><ol><li>drop in the invoice sheet</li><li>every field is identified automatically</li><li>one refresh calculates the split</li><li>consolidated report goes to Accounting</li></ol></div></div>
 <div class="ops-flow" aria-label="Overview: invoice tracker, invoice input plus store base, Power Query allocation, monthly financial follow-up">
 <div class="ops-flow-item"><b>Invoice tracker</b><small>Accounting + payment statuses</small></div><span class="ops-flow-arrow">→</span><div class="ops-flow-item"><b>Invoice + store data</b><small>Period, account & allocation rule</small></div><span class="ops-flow-arrow">→</span><div class="ops-flow-item"><b>Power Query</b><small>Merge, filter & divide</small></div><span class="ops-flow-arrow">→</span><div class="ops-flow-item"><b>Monthly closing</b><small>By-store output + budget monitoring</small></div>
 </div>
 
 ${divTitle('03','two statuses per invoice, one refresh for the split','how it works')}
 <p>The tracker gives each record two independent controls: an <b>accrual status</b> (accounting treatment) and a <b>payment flow</b> (operational follow-up). For allocation, Power Query merges the invoice table with the store base, filters the eligible stores by each invoice’s rule and divides the amount by the <b>actual number of included stores</b> — not automatically all 167. Now imagine doing that by hand for over 30 invoices every month; with Power Query it’s a single refresh that generates one consolidated report for the Accounting team.</p>
 <details class="ops-explore"><summary>explore the workbook <small>click-to-run allocation demo + the invoice tracker · fictional suppliers, invoices and amounts: they show the logic, not company data</small></summary>
 <div class="ops-demo"><div class="ops-demo-head"><div><b>monthly_accrual.xlsx</b><small>click-to-run demo</small></div><span class="ops-demo-tag">POWER QUERY</span></div><div class="ops-input-grid"><section><h4>Input A / invoice data</h4><div class="ops-scroll"><table class="ops-table"><thead><tr>${['Period','Accounting Account','Supplier','Tax ID','Invoice No.','Amount','Allocation Rule'].map(th).join('')}</tr></thead><tbody>${invoiceData.slice(0,3).map(trInput).join('')}</tbody></table></div></section><section><h4>Input B / store reference</h4><div class="ops-scroll"><table class="ops-table"><thead><tr>${['Store','Region','City'].map(th).join('')}</tr></thead><tbody>${stores.map(trStores).join('')}</tbody></table></div></section></div>
 <div class="ops-runbar"><label for="ops-invoice-select">Explore an invoice</label><select id="ops-invoice-select">${invoiceData.slice(0,3).map(r=>`<option value="${r.nf}">${r.nf} · ${esc(r.criteria)} · ${money(r.amount)}</option>`).join('')}</select><button type="button" class="ops-run" id="ops-run">▶ Run allocation</button></div>
 <div class="ops-stages" role="group" aria-label="Allocation stages">${navBtn('1','01 · Merge')}${navBtn('2','02 · Filter')}${navBtn('3','03 · Allocate')}</div><p class="ops-stage-note" id="ops-stage-note" aria-live="polite">Select an invoice and click Run allocation to see the matching logic.</p>
 <div class="ops-scroll ops-output-wrap"><table class="ops-table ops-output"><thead><tr>${['Period','Accounting Account','Supplier','Invoice No.','Store','Region','Allocated Amount'].map(th).join('')}</tr></thead><tbody id="ops-output-body"><tr><td colspan="7" class="ops-empty">Output will appear here after allocation runs.</td></tr></tbody></table></div><div class="ops-output-total" id="ops-output-total">Awaiting allocation…</div><p class="ops-mini-note">Demo rule: ALL = every example store; a region = only that region.</p></div>
 <details class="ops-more"><summary>also: the invoice tracker <small>two independent statuses per invoice</small></summary>
<div class="ops-demo"><div class="ops-demo-head"><div><b>invoice_control.xlsx</b><small>interactive demo</small></div><button type="button" class="ops-reset" data-ops-reset>↺ reset</button></div><p class="ops-mini-note">Try changing either status dropdown — they work independently.</p><div class="ops-scroll"><table class="ops-table ops-tracker"><thead><tr>${['Period','Accounting Account','Supplier','Invoice No.','Amount','Allocation Rule','Accrual Status','Payment Flow'].map(th).join('')}</tr></thead><tbody id="ops-tracker-body"></tbody></table></div><div class="ops-legend"><span><b>Accrual Status</b> · accounting / accrual classification</span><span><b>Payment Flow</b> · operational follow-up</span></div></div>
<div class="ops-accounting"><h4>How the period closing worked</h4><p>For a given period (such as P01), invoices already paid and posted within that same period went to the <b>ledger</b>. Invoices assigned to P01 that had not yet been paid needed to be included in the <b>accrual</b>. For operational follow-up, the final period figure combined both sides:</p><div class="ops-formula"><span>Ledger</span><b>+</b><span>Accruals</span><b>=</b><strong>Period total</strong></div></div>
 </details>
 </details>
 ${divTitle('04','from hours saved to the budget conversation','the impact')}
 <div class="ops-thesis"><p>The same organized data fed my day-to-day <b>actual vs. budgeted</b> monitoring. When leadership met to define next fiscal year’s marketing budget, I was in the room and showed the directors what share of the budget each front was using, along with estimated return.</p></div>
 <p>Along the way, the monthly routine changed in three ways:</p>
 <div class="ops-results"><div><strong>Fewer errors</strong><p>Store splits follow each invoice’s allocation rule — no hand calculations.</p></div><div><strong>Less rework</strong><p>Fewer corrections and fewer supplier follow-ups about payment status.</p></div><div><strong>More control</strong><p>Faster accrual closes and a clearer monthly view of the process.</p></div></div>
 <p>It still runs every month: I operate it, my manager uses it to follow the budget, and Accounting receives the consolidated report.</p>
 ${divTitle('05','you don’t always need a new platform','what I took away')}
 <p>Understanding how the information moves — and where the repetitive work happens — can create room for better decisions.</p>
 <p class="ops-signoff">a little more clarity, a lot less copy-and-paste. ✿</p>
 </div>`;}
const trackerRows=()=>invoiceData.map((r,i)=>`<tr><td>${r.period}</td><td>${r.account}</td><td>${esc(r.supplier)}</td><td>${r.nf}</td><td class="num">${money(r.amount)}</td><td>${r.criteria}</td><td><select aria-label="Accrual status for ${r.nf}" data-ops-control="prov" data-row="${i}">${provList.map(x=>`<option ${x===r.prov?'selected':''}>${x}</option>`).join('')}</select></td><td><select aria-label="Payment flow for ${r.nf}" data-ops-control="pay" data-row="${i}">${payList.map(x=>`<option ${x===r.pay?'selected':''}>${x}</option>`).join('')}</select></td></tr>`).join('');
let generation=0;
function renderTracker(){const b=document.getElementById('ops-tracker-body');if(b)b.innerHTML=trackerRows();}
function showAllocation(phase){const selected=document.getElementById('ops-invoice-select');const output=document.getElementById('ops-output-body'),total=document.getElementById('ops-output-total'),note=document.getElementById('ops-stage-note');if(!selected||!output)return;
const inv=invoiceData.find(x=>x.nf===selected.value)||invoiceData[0];const matched=stores.filter(s=>inv.criteria==='ALL'||s.region===inv.criteria);
const per=inv.amount/matched.length;
const stages=document.querySelectorAll('[data-ops-stage]');stages.forEach(s=>s.setAttribute('aria-pressed',String(+s.dataset.opsStage===phase)));
const descriptions={1:`Merged ${inv.nf} with the store reference using an auxiliary join key. The example contains ${stores.length} candidate stores.`,2:`Applied allocation criterion “${inv.criteria}”. ${matched.length} of ${stores.length} stores remain eligible.`,3:`Calculated ${money(inv.amount)} ÷ ${matched.length} eligible stores = ${money(per)} per store, then expanded the rows.`};note.textContent=descriptions[phase];
const display=phase===1?stores:matched;
output.innerHTML=display.map(s=>`<tr class="${phase===1&&inv.criteria!=='ALL'&&s.region!==inv.criteria?'ops-muted':''}"><td>${inv.period}</td><td>${inv.account}</td><td>${esc(inv.supplier)}</td><td>${inv.nf}</td><td>${s.id}</td><td>${s.region}</td><td class="num">${phase===3?money(per):'—'}</td></tr>`).join('');
total.textContent=phase===3?`${matched.length} stores · ${money(per)} each · ${money(inv.amount)} allocated in total`:`${display.length} store rows · ${phase===1?'candidate matches':'eligible matches'}`;
}
document.addEventListener('change',event=>{if(event.target.matches('[data-ops-control]')){const {row,opsControl}=event.target.dataset;invoiceData[+row][opsControl]=event.target.value;}if(event.target.id==='ops-invoice-select'){generation++;const t=document.getElementById('ops-stage-note');if(t)t.textContent='Invoice selected. Click Run allocation to show the steps.';const b=document.getElementById('ops-output-body');if(b)b.innerHTML='<tr><td colspan="7" class="ops-empty">Ready to run.</td></tr>';}});
document.addEventListener('click',event=>{if(event.target.closest('[data-ops-reset]')){invoiceData.forEach((r,i)=>{r.prov=['PAID IN PERIOD','ACCRUAL','ACCRUAL','POSTED','REVERSAL'][i];r.pay=['LEDGER','PO CREATED','INVOICE RECEIVED','WORKFLOW CREATED','AWAITING INVOICE'][i];});renderTracker();}const s=event.target.closest('[data-ops-stage]');if(s){generation++;showAllocation(+s.dataset.opsStage);}if(event.target.closest('#ops-run')){const token=++generation;showAllocation(1);setTimeout(()=>{if(token===generation&&document.getElementById('ops-output-body'))showAllocation(2);},850);setTimeout(()=>{if(token===generation&&document.getElementById('ops-output-body'))showAllocation(3);},1700);}});
window.operationsCaseContent=markup;
window.operationsCaseInit=renderTracker;
})();
