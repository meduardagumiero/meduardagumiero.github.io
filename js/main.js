const A={me:'assets/me.jpg'};
const $=s=>document.querySelector(s);
/* content */
const lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const cases=[
{k:'AutoZone Brasil',cat:'Marketing Operations & Process Optimization',d:'2025',t:'making room for smarter work',s:'Redesigning a manual marketing budget-control process to improve efficiency, reporting visibility and day-to-day operations.',
 st:[['~90%','reduction in routine processing time'],['9h → <1h','before and after optimization'],['167','stores covered by the allocation']],
 ch:'Invoice tracking and monthly accrual reporting relied on <b>disconnected</b>, manual Excel spreadsheets. Identifying outstanding expenses, cross-checking payment statuses and allocating costs across 167 stores made month-end closing time-consuming and difficult to monitor.',
 ap:'I redesigned the invoice tracker with clearer payment and accrual statuses, then rebuilt the reporting workbook with linked reference data, formulas and pivot tables. With feedback from an FP&A analyst, I streamlined monthly reporting and improved budget visibility for management.'},
{k:'Smurfit Westrock',cat:'Product Marketing & Cross-functional Projects',d:'2024',t:'good briefing, better digital experience',s:'Coordinating the development of a unified B2B landing page to bring strategic products together, simplify product discovery and support lead qualification.',
 flow:['sales','my role · product marketing','agency'],
 ch:'Strategic B2B products needed a more unified digital presentation. Bringing them into a single landing page would simplify product discovery and create a clearer path for prospective high-volume customers to connect with Sales.',
 ap:'As a Product Marketing intern, I gathered specifications from Sales, translated commercial needs into the agency briefing and coordinated feedback throughout development.',
 list:['Product knowledge and commercial requirements','Briefing, alignment and stakeholders coordination','Landing page development and revisions']},
{k:'TechLegal',cat:'Product Marketing, User Experience & Customer Journey',d:'2023',t:"it's all about the journey",s:"Developing the product messaging, UX/UI and subscription journey for IRBot's Anti-Leão service, from initial concept to implementation.",
 st:[['Product messaging','value proposition, copy & benefits'],['End-to-end journey','from landing page to subscription'],['Cross-functional','PO and development team']],
 ch:"Introducing a tax-related subscription service required making a complex offering understandable and giving potential customers a clear path to purchase. The goal was to connect the product's value proposition with an intuitive digital subscription experience.",
 ap:'Project scope, step by step:',list:['01 · Product discovery','02 · Positioning & copy','03 · UX/UI design','04 · Subscription flow','05 · Development coordination']},
{k:'AutoZone Brasil',cat:'Content Marketing & Digital',d:'2026',t:"dear blog, it's working",s:"Writing and publishing informative automotive content to support AutoZone Brasil's digital visibility and reinforce its positioning as a trusted source of information.",
 st:[['+60%','increase in traffic to blog pages within one month after taking ownership of content creation']],
 ch:"The challenge was to drive traffic to AutoZone Brasil's website through relevant, SEO-oriented blog content, while reinforcing the brand's positioning as a trusted source of automotive information.",
 ap:'I took ownership of writing and publishing blog articles, developing content from both self-proposed topics and briefs from my coordinator, with a focus on clear, informative and accessible writing.'},
{k:'AutoZone Brasil',cat:'extra file · Brand Experience & Events',d:'extra',t:'beyond the screen',s:"Supporting automotive events and connecting on-site brand experiences with digital content, lead generation and customer insights.",
 list:['<b>Event support</b> — supplier coordination, event operations and on-site customer engagement.','<b>Real-time content</b> — briefs for our creator to produce alongside automotive parts suppliers.','<b>Digital & customer</b> — event-related lead generation campaigns and conversations with customers.'],
 ch:'My favorite part of being at events is connecting with customers, listening to their questions and understanding their needs — conversations that can inspire new ideas and make digital communication more relevant.',ap:'',chT:'✿ a little something i value'}];
const recentCaseOrder=[5,0,3,1]; // 2026, 2025, 2024, 2023; existing case URLs retained
Object.assign(cases[0],{d:'2026',role:'marketing analyst',when:'late 2025 – early 2026',res:'the monthly accrual close went from ~9 hours to under 1 — and it still runs every month.'});
cases.push({k:'Smurfit Westrock',cat:'CRM & Lifecycle Marketing',d:'2024',t:'how to keep leads interested',s:'Lifecycle email flows in Eloqua for a B2B base of 5–6 thousand leads, mostly lead nurturing.',role:'product marketing intern',when:'2024',rich:"<div class=\"ops-case\"><div class=\"ops-metrics two\"><div><strong>~30%</strong><small>average open rate across the flows</small></div><div><strong>50.8%</strong><small>open rate of the best-performing email</small></div></div><div class=\"ops-opening\"><p>At Smurfit Westrock I handled the email marketing flows in Eloqua for a B2B base of roughly 5–6 thousand leads. Together with my direct leader, a senior analyst, I planned each flow. Then I wrote it, built it, tested it, sent it and followed the results.</p><div class=\"ops-chips\"><span>Eloqua</span><span>~5–6k B2B leads</span><span>monday.com</span></div></div><div class=\"ops-section-label\"><span>01</span><div><strong>mostly nurturing flows</strong></div></div><p>Most of the flows were lead nurturing. The rest covered conversion, retention and loyalty, and win back.</p><div class=\"ops-section-label\"><span>02</span><div><strong>step by step</strong></div></div><div class=\"sm-flow\"><div><b>Plan</b>With my leader: objective, audience, theme and product, CTA, visual identity and tone of voice</div><div><b>Creative</b>The agency produced banners and other pieces</div><div><b>Copy &amp; layout</b>I wrote the texts, CTAs and buttons and laid out each email</div><div><b>Test</b>I tested the flow to make sure it was working</div><div><b>Send</b>I sent the campaigns in Eloqua</div><div><b>Results</b>I collected and analyzed opens and clicks</div></div><p>Requests and deadlines were tracked in monday.com.</p></div>"});
Object.assign(cases[5],{hl:'~30% avg open rate across the flows · 5–6k B2B leads',res:'~30% average open rate across the flows, and 50.8% on the best-performing email.',short:"Lifecycle email flows in Eloqua: lead nurturing, conversion, retention and win back.",chips:["Eloqua", "monday.com", "email marketing"]});
Object.assign(cases[5],{rich:`<div class="ops-case"><div class="ops-metrics"><div><strong>5–6k</strong><small>B2B leads in the base</small></div><div><strong>~30%</strong><small>average open rate across the flows</small></div><div><strong>50.8%</strong><small>open rate of the best-performing email</small></div></div><div class="ops-opening"><p>At Smurfit Westrock I ran the lifecycle email flows in Eloqua for a B2B base of roughly 5–6 thousand leads. With my direct leader, a senior analyst, I planned each flow. Then I wrote it, built it, tested it, sent it and followed the results. My part was everything between the plan and the inbox.</p><div class="ops-chips"><span>Role · Product Marketing Intern</span><span>Platform · Oracle Eloqua</span><span>Requests &amp; deadlines · monday.com</span></div></div><div class="ops-section-label"><span>01</span><div><strong>mostly nurturing, across the whole lifecycle</strong><small>the flows</small></div></div><p>Most of the flows were lead nurturing. The rest covered the other stages of the lifecycle:</p><div class="sm-flow"><div><b>Nurturing</b>most of the flows</div><div><b>Conversion</b>moving interested leads forward</div><div><b>Retention &amp; loyalty</b>keeping customers engaged</div><div><b>Win back</b>re-engaging inactive contacts</div></div><div class="ops-section-label"><span>02</span><div><strong>from request to inbox, with an owner at every step</strong><small>how a campaign moved</small></div></div><div class="sm-flow six"><div><b>1 · Plan</b>With my leader: objective, audience, theme and product, CTA, visual identity and tone of voice</div><div><b>2 · Creative</b>The agency produced banners and other pieces</div><div><b>3 · Copy &amp; layout</b>I wrote the texts, CTAs and buttons and laid out each email</div><div><b>4 · Test</b>I tested the flow to make sure it was working</div><div><b>5 · Send</b>I sent the campaigns in Eloqua</div><div><b>6 · Results</b>I collected and analyzed opens and clicks</div></div><p>Requests and deadlines were tracked in monday.com, so every flow had a status and a date.</p><div class="ops-section-label"><span>03</span><div><strong>nothing went out untested</strong><small>quality check</small></div></div><p>Every flow went through the same four steps before it reached a lead:</p><div class="sm-flow"><div><b>1 · Internal test</b>I sent a test to a list of CRM and marketing colleagues and the people who approved the campaign</div><div><b>2 · Content &amp; experience</b>I checked product images, technical information, mobile adaptation and whether every CTA worked</div><div><b>3 · Audience &amp; tracking</b>I checked that the segmentation included the eligible B2B contacts and that links had the right UTMs</div><div><b>4 · Approve &amp; release</b>After fixes and final approval, I scheduled or sent it</div></div><p>And the checklist behind them, every time:</p><ul class="qa-list"><li>the email works as intended</li><li>responsive layout</li><li>display on mobile and web</li><li>links go to the right place</li><li>forms work</li><li>recipient list is correct</li><li>segmentation criteria</li><li>flow logic, end to end</li><li>UTMs and campaign ID</li><li>click and conversion events</li><li>goals defined before the send</li></ul><div class="ops-section-label"><span>04</span><div><strong>what the numbers say</strong><small>results</small></div></div><p>The flows averaged around a 30% open rate, and the best-performing email reached 50.8%. That email was an invitation to an event where Westrock would be present. I followed opens and clicks for every send; the open rates are the figures I kept, so those are the ones I am showing.</p><p class="sm-note">the same habit, one tracker and one checklist so no step lives only in someone’s head, is what I rebuilt in <a href="#work-0">making room for smarter work »</a></p></div>`});
Object.assign(cases[0],{hl:'9h → <1h on the monthly close',short:"A manual monthly budget routine rebuilt with Excel and Power Query.",chips:["Excel", "Power Query", "process"]});
Object.assign(cases[3],{hl:'+60% blog traffic in one month',short:"Giving the blog a routine and a reader for every article: +60% traffic in a month.",chips:["content", "editorial calendar", "personas"]});
Object.assign(cases[1],{hl:'one landing page for the strategic B2B products',short:"Briefing and coordinating a B2B landing page for strategic products.",chips:["product marketing", "B2B", "agency"]});
Object.assign(cases[4],{short:"Supporting automotive events and connecting on-site experiences with digital content.",chips:["events", "content", "leads"]});
Object.assign(cases[1],{role:'product marketing intern',when:'2024',res:'a unified B2B landing page, built from a briefing I structured and coordinated with the agency: visual identity, copy, layout and buttons, plus the thank-you page.',rich:'<div class="ops-case"><div class="ops-opening"><p>Smurfit Westrock sells packaging solutions, including products for B2B customers with larger-volume needs. I was a product marketing intern when we set out to bring the strategic products together in a single landing page. My part: turning the sales team’s product knowledge into a structured briefing, coordinating it with the agency that built the page, and briefing the thank-you page that follows the form.</p><div class="ops-chips"><span>Role · Product Marketing Intern</span><span>Partners · Sales team + external agency</span><span>Scope · briefing, coordination &amp; review</span></div></div><div class="ops-section-label"><span>01</span><div><strong>strategic products without one place to be found</strong><small>the challenge</small></div></div><p>These products had no unified digital presentation, so discovery was fragmented. The idea was never an e-commerce or buying on the page: the goal was to present the solutions and make it easier to reach the sales team. In higher-volume B2B buying, the page should help a potential customer understand the solutions before moving further in the commercial journey.</p><div class="ops-results"><div><strong>Centralization</strong><p>Bring the strategic products together in one landing page instead of sending visitors to different pages.</p></div><div><strong>User journey</strong><p>Make it easier to navigate and discover the solutions.</p></div><div><strong>Lead qualification</strong><p>A form that tells Sales who is asking, how much they need and whether they want a ready solution or a custom one.</p></div></div><div class="ops-section-label"><span>02</span><div><strong>from product knowledge to a structured briefing</strong><small>my role</small></div></div><p>I was an intern on this project, so the final call wasn’t mine. What I owned was the path to it:</p><dl class="sm-role"><dt>gathering</dt><dd>Talked with the sales team to learn about the products, technical characteristics and presentation needs.</dd><dt>briefing</dt><dd>Organized the requirements and wrote the briefing: the visual identity, the texts, where each element would sit and which buttons the page would have. I briefed the thank-you page as well.</dd><dt>coordination</dt><dd>Acted as the interface between the stakeholders and the agency responsible for development.</dd><dt>revisions</dt><dd>Followed the deliveries, gathered feedback and took part in validating the materials.</dd><dt>approval</dt><dd>Reviewed and approved intermediate steps; final approval belonged to the senior analyst.</dd></dl><div class="ops-section-label"><span>03</span><div><strong>one loop between sales, product marketing and the agency</strong><small>the process</small></div></div><div class="sm-flow"><div><b>Business objective</b>Unify the presentation of strategic B2B products</div><div><b>Sales team</b>Product knowledge and commercial requirements</div><div class="sm-me"><b>My role</b>Briefing, alignment and coordination</div><div><b>Agency</b>Development, feedback and review cycles</div><div><b>Unified landing page</b>A clear path from first look to a conversation with Sales</div></div><p class="sm-note">a conceptual reconstruction of the process, not a technical sequence.</p><div class="ops-section-label"><span>04</span><div><strong>what the briefing decided, block by block</strong><small>the digital experience</small></div></div><p>I’m not showing the page itself. This is a simplified map of the same journey a visitor took, with fictional content, showing the decisions the briefing had to make at each step. Click a block to open it.</p><div class="sm-page"><div class="sm-bar">fictional-packaging.com/landing</div><details class="sm-z" name="sm" open><summary>1 · the first block: message and main button</summary><div class="sm-bars"><i></i><i></i><i></i></div><span class="sm-cta">main button →</span><p>What the page says first, in which words, where the text and the image sit, and which button leads the way. The briefing set the copy, the placement and the button.</p></details><details class="sm-z" name="sm"><summary>2 · a block on sustainability</summary><div class="sm-uc"><span>program mark</span><span>short statement</span></div><p>A short section on the sustainability of the products, with the program’s mark next to the text. The briefing defined its copy and its position on the page.</p></details><details class="sm-z" name="sm"><summary>3 · the company presentation video</summary><div class="sm-bars"><i></i><i></i></div><p>An institutional video to present the company before the contact step.</p></details><details class="sm-z" name="sm"><summary>4 · the form: who is asking, and how ready they are</summary><div class="sm-uc"><span>company name</span><span>company segment</span><span>contact person</span><span>contact details</span></div><div class="sm-uc"><span>how many boxes they need</span><span>a specific solution, or a custom one</span></div><p>The first four fields tell Sales who is asking. The last two are what qualified a lead: the volume of boxes needed, and whether the company already had a specific solution in mind or wanted a custom one.</p></details><details class="sm-z" name="sm"><summary>5 · the thank-you page</summary><div class="sm-bars"><i></i><i></i></div><span class="sm-cta">back →</span><p>The confirmation after the form, which I briefed too: the message, the layout and the button. It is also where I would test next: telling the lead when Sales will reply, and offering a next step.</p></details></div><div class="ops-section-label"><span>05</span><div><strong>no numbers, a clear map of the decisions</strong><small>the outcome</small></div></div><p>The goal was to improve product discovery and support lead qualification, but I don’t have conversion or lead numbers, so I’m not claiming any. What I can show is the process and the decisions inside the briefing. If I were running this page today, I would test three things: a headline that says who the page is for and what it offers, a filled primary button in the first block, and a thank-you page that sets expectations for what happens next.</p></div>'});
Object.assign(cases[2],{role:'marketing assistant',when:'2023'});
Object.assign(cases[3],{role:'marketing analyst',when:'2026',rich:'<div class="ops-case"><div class="ops-metrics ops-metrics-one"><div><strong>+60%</strong><small>traffic to blog pages in the first month with the new structure</small></div></div><div class="ops-opening"><p>When the blog’s demand landed with me, I didn’t just start publishing. I paused to reorganize the whole flow: who each article is for, how it is written and when it goes live.</p><div class="ops-chips"><span>Focus · Content Marketing</span><span>Scope · strategy, writing &amp; publishing</span><span>Audience · 3 personas</span></div></div><div class="ops-section-label"><span>01</span><div><strong>a blog published to check a box</strong><small>the challenge</small></div></div><p>AutoZone Brasil needed its blog to drive traffic to the website and reinforce the brand as a trusted source of automotive information. Until then, it was maintained mostly to tick a box, with no fixed publishing frequency.</p><div class="ops-section-label"><span>02</span><div><strong>one article model for each kind of reader</strong><small>how I organized it</small></div></div><div class="ops-results"><div><strong>BMI</strong><p>Buys the part and takes it to the mechanic.</p></div><div><strong>DIY</strong><p>Buys the part or product and does the job at home.</p></div><div><strong>COMM</strong><p>Mechanics.</p></div></div><p>Each persona got its own article model, so every piece is written for one clear reader. On top of that I defined the tone of voice, the structure and a publishing calendar to give the blog a regular rhythm. Topics come from my own proposals and from briefs by my coordinator, always with a focus on clear, informative and accessible writing.</p></div>'});
Object.assign(cases[4],{role:'marketing analyst',when:'extra file',res:'Real conversations with customers on the floor, which turn into insights for the digital experience and for how we engage leads.',rich:'<div class="ops-case"><div class="ops-opening"><p>Not everything I do at AutoZone Brasil happens on a screen. Events are where the brand meets customers, suppliers and sponsors in person, and I take part in two ways: behind the scenes, handling payments and suppliers, and on the floor, at the booth, talking to people and watching what happens.</p><div class="ops-chips"><span>Role · Marketing Analyst, Branding &amp; Digital</span><span>Focus · events &amp; brand experience</span><span>Scope · payments, suppliers, booth, real-time content</span></div></div><div class="ops-section-label"><span>01</span><div><strong>the desk and the floor</strong><small>how I work at events</small></div></div><dl class="sm-role"><dt>payments</dt><dd>Events mean a high volume of payments, and they are with me.</dd><dt>real-time content</dt><dd>I brief the person who creates our content, live, on what to capture. I do it at the larger events and at smaller sponsored ones.</dd><dt>at the booth</dt><dd>I try to be there at least one day, and often many more.</dd><dt>customers</dt><dd>I like to talk to them to understand their pains and what actually works for them.</dd><dt>activations</dt><dd>I hand out giveaways and follow the activations to see how they work, and to pick up insights along the way.</dd></dl><div class="ops-section-label"><span>02</span><div><strong>Copa AutoZone, up close</strong><small>the one with the most moving parts</small></div></div><p>An event for mechanics, with booths from our parts suppliers: a free place to watch Brazil’s World Cup group-stage games.</p><dl class="sm-role"><dt>goal</dt><dd>Strengthen the brand and acquire leads, for AutoZone and for the suppliers that sponsored the event and had booths there.</dd><dt>audience</dt><dd>Mechanics who were already AutoZone customers, and new leads.</dd><dt>behind the scenes</dt><dd>I managed the sponsorship receipts and paid the suppliers, a very high volume of payments.</dd><dt>on site</dt><dd>I was there every day: welcoming suppliers and customers, checking that everything was running well, talking with customers and supporting suppliers with whatever they needed.</dd></dl><div class="ops-section-label"><span>03</span><div><strong>two more events</strong><small>different scale, same approach</small></div></div><dl class="sm-role"><dt>Salão do Automóvel</dt><dd>One of the biggest automotive events in the world, with crowds to match. Our booth was full all the time, and I stayed through both weekends, talking with visitors and telling them about AutoZone. The booth was one of the most recommended by the show’s organization.</dd><dt>Suhai Festival Interlagos</dt><dd>Again I handled payments and contact with some suppliers. I spent one day on site, guiding the real-time content creation and talking with suppliers.</dd></dl><div class="ops-section-label"><span>04</span><div><strong>why I like being there</strong><small>what I take back to the screen</small></div></div><p>Conversations at the booth are where I learn what works for the customer, and they can inspire new ideas and make our digital communication more relevant. I’m not claiming numbers for these events: this post is a record of the work and of what I take from it.</p></div>'});
const jobs=[['OCT 2025 — PRESENT','AutoZone Brasil','Marketing Analyst | Branding & Digital','Global automotive parts retailer','Marketing analyst across branding and digital: budget control and process improvement, blog content, events, and keeping all the website content up to date.',[0,3,4]],
['AUG — OCT 2025','UTMify','Junior Marketing Analyst','Marketing technology startup','Content scripts, shoot support and kits; operational and strategic support on product launch campaigns; and an institutional communication project focused on engagement and brand strength.'],
['JAN 2024 — MAR 2025','Smurfit Westrock','Product Marketing Intern','Global packaging & B2B solutions company','Lifecycle email flows in Eloqua for a B2B base, and support on a landing page for strategic products.',[5,1]],
['MAR 2022 — JAN 2024','TechLegal','<span class="career-role"><strong>Marketing Assistant</strong><small>Mar 2023 — Jan 2024</small></span><span class="career-role"><strong>Marketing Intern</strong><small>Mar 2022 — Feb 2023</small></span>','Technology & legal services startup','Landing pages in Figma and support on branding and visual identity; performance tracking and support on lead generation and retention; customer relationship initiatives and organization of digital marketing requests.']];
const gl=t=>t.replace(/^([^\w\s]+)\s/,'<i class="g">$1</i> ');
const W=(t,b,c='')=>`<section class="w ${c}"><div class="t">${gl(t)}</div><div class="b">${b}</div></section>`;
const ul=a=>`<ul class="bul">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const stamp=c=>`<div class="stamp">${c.d=='extra'?'<b>✦</b>extra':`<b>${c.d.split('–')[0]}</b>${c.d.includes('–')?'→ '+c.d.split('–')[1]:'post'}`}</div>`;
// Compact, shared editorial header for the five individual posts.
const postHeader=c=>`<header class="post-header-clean"><div class="meta">${c.cat}</div><h1>${c.t}</h1><p class="post-subtitle">${c.s}</p>${c.res?`<p class="post-result"><b>result</b> · ${c.res}</p>`:''}<p class="post-byline"><small>posted by Maria Eduarda · ${c.role?c.role+', ':''}${c.k.toLowerCase()} · ${c.when||c.d}</small></p></header>`;
const post=i=>{if(i===0)return operationsPost();const c=cases[i],order=[...recentCaseOrder,4],pos=order.indexOf(i),prev=order[pos-1],next=order[pos+1],p=cases[prev],n=cases[next];
 return `<article class="w post"><div class="t"><i class="g">✿</i> post ${pos+1} of ${order.length} · ${c.k}</div><div class="b">
 ${postHeader(c)}
 ${c.rich||` ${c.st?`<div class="stats">${c.st.map(s=>`<div class="stat dash"><b>${s[0]}</b><small>${s[1]}</small></div>`).join('')}</div>`:''}
 ${c.flow?`<h3><i class="g">✿</i> connecting teams &amp; expertise</h3><div class="stats">${c.flow.map(f=>`<div class="stat dash"><b style="font-size:13px;letter-spacing:0">${f}</b></div>`).join('')}</div>`:''}
 <div class="vis dash">[ project visual · lorem ipsum ]</div>
 <h3>${gl(c.chT||'⚑ the challenge')}</h3><p>${c.ch}</p>
 ${c.ap?`<h3><i class="g">♥</i> my approach</h3><p>${c.ap}</p>`:''}${c.list?`<div style="margin-top:8px">${ul(c.list)}</div>`:''}
 <p class="div">✿ ✿ ✿</p><h3>the full story</h3><p>${lorem}</p><p>${lorem}</p>`}</div></article>
 <div class="pn"><a href="#work-${prev}" ${p?'':'hidden'}><small>« previous post</small>${p?p.t:''}</a><a href="#work-${next}" ${n?'':'hidden'}><small>next post »</small>${n?n.t:''}</a></div>
 <a href="#work" style="font-size:11px">← back to all posts</a>`};
const operationsPost=()=>{const c=cases[0];return `<article class="w post ops-post"><div class="t"><i class="g">✿</i> post 2 of ${recentCaseOrder.length+1} · ${c.k}</div><div class="b">${postHeader(c)}${window.operationsCaseContent()}</div></article><div class="pn"><a href="#work-5"><small>« previous post</small>${cases[5].t}</a><a href="#work-3"><small>next post »</small>${cases[3].t}</a></div><a href="#work" style="font-size:11px">← back to all posts</a>`;};
const entry=(c,i,n)=>`<a class="entry dash" href="#work-${i}"><div><div class="meta">0${n+1} / ${c.cat}</div><h2>${c.t}</h2><p>${c.short||c.s}</p><div class="entry-foot"><span class="entry-chips">${(c.chips||[]).map(x=>`<span>${x}</span>`).join('')}</span><small>${c.k} · ${c.d==='extra'?'extra file':c.d} · <span style="color:var(--acc)">read post »</span></small></div></div></a>`;
const views={
home:()=>`<div class="home-top">`
 +W('☾ the girl behind the desk',`<div class="pcard">
  <figure class="home-profile-photo"><img src="${A.me}" alt="Maria Eduarda Gumiero"><span class="mini-online">● online</span></figure>
  <div class="pcard-id"><h2>Maria Eduarda Gumiero</h2><p class="home-based">São Paulo, Brazil</p></div>
  <p class="pcard-now"><span>Marketing Analyst,<br>Branding &amp; Digital<br>AutoZone Brasil</span></p>
 </div>`,'home-profile-w')
 +W('♡ oh, hi! good to see you',`<div class="intro2">
  <h1 class="hero-h1">welcome to my portfolio!</h1>
  <p class="hero-sub">I'm Duda, and this is my little space on the internet. My work lives between <mark class="mk">CRM &amp; product marketing, digital experience, and marketing operations</mark>, across technology, packaging and automotive retail. Each project here shows a different side of it, always with curiosity, organization and a little creative problem-solving.</p>
  <div class="res-band" role="list" aria-label="Selected results"><a role="listitem" href="#work-5"><b>~30%</b><span>average open rate in Eloqua flows to a 5–6k B2B base</span></a><a role="listitem" href="#work-3"><b>+60%</b><span>blog traffic in the first month</span></a><a role="listitem" href="#work-0"><b>9h → &lt;1h</b><span>monthly accrual close (est.)</span></a></div>
  <p class="hero-cta"><a class="btn pri" href="#work">see my work →</a><a class="btn" href="#contact">✉︎ say hello</a></p>
 </div>`,'home-intro-w')+`</div>`
 +`<div class="home-split"><div>`
 +W('★ featured posts',`<ul class="posts">${recentCaseOrder.map(i=>`<li><b>${cases[i].d}</b> » <a href="#work-${i}">${cases[i].t}</a><br><small>${cases[i].k} · ${cases[i].cat}</small></li>`).join('')}</ul>`)
 +`</div><div>`
 +W('♡ tools i like working with',`<dl class="toolgroups">${[['CRM &amp; email',['Oracle Eloqua','Adobe Analytics']],['workflow &amp; trackers',['Monday.com','Excel','Power Query']],['design &amp; content',['Figma','Adobe Creative Suite']],['systems',['SAP','TOTVS']]].map(([g,a])=>`<dt>${g}</dt><dd class="tags">${a.map(t=>`<span class="tag">${t}</span>`).join('')}</dd>`).join('')}</dl>`)
 +W('← creative thinking ✿ analytical doing →',`<small>drag the slider ✦</small><div class="mt" id="mt"><i id="mk" style="left:50%"></i></div><div class="ml"><span>creative</span><span id="mc">a little bit of both.</span><span>analytical</span></div>`)
 +`</div></div>`,
about:()=>W("☾ a little editor's letter",`<div class="editors-letter"><h1 class="hero-h1">who i actually am — on a deeper level</h1><p>If you've made it this far into my website, you already know I'm a marketing professional with 4+ years of experience and a BA in International Relations from UNESP. You probably also know that I've found my way through quite a few areas of marketing, from CRM and product marketing to digital experience. Great! But obviously, there's a little more to a 24-year-old girl's life than her résumé.</p><p>So, I guess it's time to get to know the person you might be working with!</p><p>First things first: I was born in a small town in the countryside of São Paulo. When I grew up, I moved to a slightly bigger town (still in the countryside) to go to college and figure out this whole adulthood thing. That's also when I started working and paying my own bills, at 18.</p><p>Those five years of college have a very special place in my heart, and I miss them constantly. To be honest, I'm starting to think growing up is just collecting moments you miss while making room for new ones. And now, here I am, living in São Paulo, the largest city in Latin America. Quite a change, right? A gigantic one, actually. But I'm really enjoying this new chapter. There's so much to see, do and discover here, and I love it!</p><p>In 24 years, I've collected a whole lot of love for people, places, things and little moments. I guess I'm a bit of a cliché, because I love listening to music, reading books and rewatching my favorite TV shows. But these days, I also love hopping on the subway with my wired earphones and spending an afternoon exploring coffee shops, museums and bookstores.</p><p>There's so much art and culture to experience in São Paulo, and that's a big part of what keeps me inspired. Of course, on a rainy day, you'll probably find me watching Gilmore Girls in my cozy little home. Some things never change.</p><p>Now, a little about my career (I promise I'll make this part interesting).</p><p>It's been one of my biggest priorities since high school, and I take it pretty seriously. And I promise I'm not just saying that because you might be interested in hiring me. You can ask my mom!</p><p>I'm naturally curious, driven and very, very organized. I'm the kind of person who will put her entire life into a Notion page, create a spreadsheet for something that probably doesn't need one, and genuinely enjoy finding ways to make things simpler. I like having a plan (preferably a long-term one), but I've also learned that life doesn't always follow the timeline you carefully put together. Still, I find a lot of joy in organizing the chaos, both at work and outside of it.</p><p>When it comes to where I want to work, I look for places where I can contribute to something beyond my own tasks: making a positive impact on society and helping the people around me grow, not just contributing to the business itself. I believe the best work happens when you care about what you're building, feel comfortable sharing your ideas and have people around you who want to build something great together.</p><p>Maybe I'm romanticizing my career a little, but if I don't, who will?</p><p>Oh, and I also have plans to pursue a master's degree in the near future, somewhere at the intersection of International Relations and Marketing. It's on the list (and yes, there's probably a Notion page for that too).</p><p>As you might have guessed from my degree, I care a lot about the world we live in and what we can do to make it a little better. And I don't necessarily mean changing the entire world overnight. Sometimes, it's about the smaller things we can actually do, because those matter too.</p><p>I love seeing businesses make things more accessible, whether that's culture, entertainment, education or essential services. And when a company genuinely cares about sustainability and its environmental impact, that makes me a little happier too. I guess that's the kind of impact I'd love to be part of.</p><p>So, if I had to sum up what I want from life, it would probably be this: never stop learning, always look at the bigger picture, do work that means something, and keep asking myself how I can make the world around me a little better.</p><p>And, of course, still have enough free weekends to visit my very loving family back in the countryside. &lt;3</p></div>`)
 +W('✿ the survey (forward to 10 friends or else ♡)',[['favorite part of my job','Connecting with customers (in person and online).'],['my little superpower','Finding smarter ways to keep everything moving.'],['currently obsessed with','Making cute little websites.'],['dream project','One that brings great ideas to life with creative people by my side.']].map(([q,a])=>`<div class="qa"><b>${q}:</b> ${a}</div>`).join(''))
 +W('✦ my buttons',`<div class="btns"><span class="b88">made with ♡ &amp; tabs</span><span class="b88 k">best viewed in tahoma</span><span class="b88 p">open to remote</span><span class="b88 s">est. 2022</span><span class="b88">y2k forever</span><span class="b88 k">marketing girl</span><span class="b88 p">✿ curious ✿</span></div>`),
work:()=>W('♥ come check some of my work!',`<h2>a few things I’ve worked on</h2><p>Selected projects across CRM and lifecycle marketing, marketing operations, content and product marketing.</p>`)+[...recentCaseOrder,4].map((i,n)=>entry(cases[i],i,n)).join(''),
experience:()=>W('★ experience',jobs.map(j=>`<div class="tl"><div class="meta"><i class="g">✦</i> ${j[0]}</div><div><b>${j[1]}</b><div class="career-position">${j[2]}</div><small>${j[3]}</small><p style="font-size:12px;color:var(--soft)">${j[4]||lorem}</p>${j[5]?`<div class="tl-cases">→ ${j[5].map(i=>`<a href="#work-${i}">${cases[i].t}</a>`).join(" · ")}</div>`:""}</div></div>`).join(''))+W('✿ education',`<div class="tl"><div class="meta"><i class="g">✦</i> 2020 — 2025</div><div><b>Bachelor's degree in International Relations</b><div class="career-position">UNESP — São Paulo State University</div><small>2020–2025</small><ul class="bul"><li>International Marketing Extension Program</li><li>Communications Coordinator at the Student Association</li></ul></div></div>`),
contact:()=>`<section class="mail" id="mail-window"><div class="mt2"><span><i class="g">✉︎</i> new message</span><span class="mail-controls"><button type="button" data-mail-action="min" aria-label="Minimize window" title="minimize">─</button><button type="button" data-mail-action="max" aria-label="Maximize window" title="maximize">□</button><button type="button" data-mail-action="close" aria-label="Close window" title="close">×</button></span></div><div class="mail-inner"><div class="row"><span>to:</span><span>you, the person reading this ♡</span></div><div class="row"><span>subject:</span><b>you’ve got mail! (almost)</b></div><div class="mb"><p>Thanks for visiting my portfolio. Got a project, an opportunity, or just something interesting to share? I’d love to hear from you!</p><p class="acts"><a class="btn pri" href="mailto:meduardagumiero@gmail.com">✉︎ send a message</a><a class="btn" href="https://www.linkedin.com/in/mariaeduardagumiero/" target="_blank" rel="noopener">↗ LinkedIn</a><a class="btn" href="https://drive.google.com/file/d/1tltMiRbt17QQXnm90f8rhkXsCk63UyXa/view?usp=sharing" target="_blank" rel="noopener">↗ Resume.pdf</a></p></div></div></section>`};
/* nav + taskbar */
const names={home:'home',work:'my work',experience:'experience',about:'about me',contact:'say hello'},open=['home'];
const ic={home:'★',about:'♡',work:'✿',experience:'✦',contact:'✉︎'};
$('#menu').innerHTML=Object.keys(names).map(k=>`<a href="#${k}" data-k="${k}"><i>${ic[k]}</i> ${names[k]}</a>`).join('');
$('#dock').innerHTML=[['home','globe','internet'],['work','folder','my_work'],['experience','doc','my_resume'],['about','monitor','about_me'],['contact','chat','messenger']].map(([k,i,l])=>`<a class="ico" href="#${k}" data-k="${k}"><svg viewBox="0 0 48 48"><use href="#i-${i}"/></svg><span>${l}</span></a>`).join('');
/* Start button: Windows-inspired list of the five actual case/blog posts. */
const startButton=$('#st'),startMenu=$('#start-menu');
$('#start-posts').innerHTML=[...recentCaseOrder,4].map(i=>`<a href="#work-${i}" role="menuitem" class="start-post">${cases[i].t}</a>`).join('');
function toggleStart(force){const show=typeof force==='boolean'?force:startMenu.hidden;startMenu.hidden=!show;startButton.setAttribute('aria-expanded',String(show));startButton.classList.toggle('start-active',show);}
startButton.addEventListener('click',e=>{e.stopPropagation();toggleStart();});
startMenu.addEventListener('click',e=>{if(e.target.closest('a'))toggleStart(false);});
document.addEventListener('pointerdown',e=>{if(!startMenu.hidden&&!startMenu.contains(e.target)&&!startButton.contains(e.target))toggleStart(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!startMenu.hidden){toggleStart(false);startButton.focus();}});

function route(){const h=location.hash.slice(1)||'home',[k,n]=h.split('-');if(!views[k]||(k==='work'&&n==='2'))return location.hash=(k==='work'?'work':'home'); /* #work-2 (TechLegal) is intentionally unpublished */
 if(!open.includes(k))open.push(k);
 const cr=`<p class="crumb">duda’s corner › ${names[k]}${k=='work'&&cases[n]?' › '+cases[n].t:''}</p>`;
 $('#mn').innerHTML=((k=='work'&&cases[n])?post(+n):views[k]());
 if(k==='work'&&n==='0')window.operationsCaseInit();
 document.querySelectorAll('[data-k]').forEach(a=>a.classList.toggle('on',a.dataset.k==k));
 $('#tabs').innerHTML=open.map(o=>{const apps={home:['globe','internet'],about:['monitor','about_me'],work:['folder','my_work'],experience:['doc','my_resume'],contact:['chat','messenger']};const [symbol,label]=apps[o];return `<a href="#${o}" class="${o==k?'on':''}" aria-label="${label}"><span class="tb-mini"><svg viewBox="0 0 48 48"><use href="#i-${symbol}"/></svg></span>${label}</a>`}).join('');
 document.body.dataset.view=k;document.title='Maria Eduarda Gumiero | CRM, Product Marketing & Digital Experience | saved as duda.';if(!n||k!='work')scrollTo(0,0);else scrollTo(0,0);if(k=='home')meter();window.dispatchEvent(new Event('desktop:layout'));}
addEventListener('hashchange',route);
// Controls for the contact window only. The navigation tab restores a closed window.
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-mail-action]'); if(!b) return;
 const win=document.getElementById('mail-window'); if(!win) return;
 const act=b.dataset.mailAction;
 if(act==='min'){
  const min=win.classList.toggle('mail-minimized');
  b.setAttribute('aria-label',min?'Restore window':'Minimize window');
  b.title=min?'restore':'minimize';
 } else if(act==='max'){
  const max=win.classList.toggle('mail-maximized');
  b.setAttribute('aria-label',max?'Restore window size':'Maximize window');
  b.title=max?'restore size':'maximize';
 } else if(act==='close'){
  win.outerHTML='<div class="mail-closed"><span>✉ message window closed</span> <button type="button" data-mail-reopen>↗ reopen message</button></div>';
 }
});
document.addEventListener('click',e=>{
 if(e.target.closest('[data-mail-reopen]')){const el=document.querySelector('.mail-closed'); if(el)el.outerHTML=views.contact();}
});

function meter(){const t=$('#mt'),k=$('#mk'),m=$('#mc');
 const set=e=>{const R=t.getBoundingClientRect(),v=Math.max(0,Math.min(1,(e.clientX-R.left)/R.width));k.style.left=v*100+'%';m.textContent=v<.35?'mostly creative today.':v>.65?'mostly analytical today.':'a little bit of both.'};
 t.onpointerdown=e=>{t.setPointerCapture(e.pointerId);set(e);t.onpointermove=set;t.onpointerup=()=>t.onpointermove=null}}
$('#pl').onclick=function(){const on=$('#lp').classList.toggle('spin');this.textContent=on?'❚❚ pause':'▶ play'};
// Global visitor counter and moderated guestbook are initialized in guestbook-counter.js
(f=>{f();setInterval(f,30000)})(()=>$('#ck').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}));
route();
$('#trk').innerHTML=[1,2,3,4,5,6,1].map(i=>`<img src="assets/cam${i}.webp" alt="">`).join('');
let ci=0;const trk=$('#trk'),cc=$('#cc');
function nxt(){ci++;trk.style.transition='transform .55s cubic-bezier(.65,0,.25,1)';trk.style.transform=`translateX(-${ci*100}%)`;cc.textContent='IMG_'+String(ci%6+1).padStart(4,'0');if(ci==6)setTimeout(()=>{trk.style.transition='none';trk.style.transform='translateX(0)';ci=0},600)}
let iv=setInterval(nxt,3200);$('#cam').onclick=()=>{clearInterval(iv);nxt();iv=setInterval(nxt,3200)};


/* V5: real document-wide drag, constrained only at drop to free wallpaper-grid cells.
   Existing decorative assets are intentionally non-linking. */
const desktopFiles = [
  {name:'kitty.exe',image:'assets/desk-04.png'},
  {name:'rhiannon.mp3',image:'assets/desk-06.png'},
  {name:'loveland.mp3',image:'assets/desk-07.png'},
  {name:'more_files',image:'assets/desk-09.png'},
  {name:'dear_diary.pdf',image:'assets/desk-10.png'}
];
const toyDesk=document.getElementById('desktop-toys');
if(toyDesk){
  const cellW=94,cellH=110,iconW=88,iconH=102,outerPad=10;
  const icons=[],spots=new Map(),manuallyMoved=new Set();
  let cells=[],relayoutTimer;
  const getDocumentHeight=()=>Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,window.innerHeight);
  const rectDoc=el=>{const r=el.getBoundingClientRect();return {left:r.left+scrollX,top:r.top+scrollY,right:r.right+scrollX,bottom:r.bottom+scrollY};};
  const intersects=(a,b,gap=0)=>a.left<b.right+gap&&a.right>b.left-gap&&a.top<b.bottom+gap&&a.bottom>b.top-gap;
  const boundsAt=(x,y)=>({left:x,top:y,right:x+iconW,bottom:y+iconH});
  const clamp=(x,lo,hi)=>Math.max(lo,Math.min(hi,x));
  // The taskbar is fixed to the viewport; treating it as a document obstacle creates
  // a false missing row halfway down the desktop icon grid.
  const obstacles=()=>['.sheet','.dock','.topline','.hd .menu','.hd .strip-identity'].flatMap(sel=>[...document.querySelectorAll(sel)].map(rectDoc));
  function wallpaperOrigin(){
    const panel=document.querySelector('.sheet');
    const blog=panel?rectDoc(panel):{left:120,top:180,right:window.innerWidth-160,bottom:700};
    // Actual icon tile edge, not the wider dock's container edge.
    const dockIcons=[...document.querySelectorAll('.dock .ico')];
    const dockRight=dockIcons.length?Math.max(...dockIcons.map(el=>rectDoc(el).right)):blog.left-34;
    const leftGap=Math.max(12,Math.round(blog.left-dockRight));
    const rightX=Math.round(blog.right+leftGap);
    return {blog,rightX,top:Math.round(blog.top),gap:leftGap};
  }
  function availableCells(){
    const width=document.documentElement.clientWidth;
    const height=getDocumentHeight();
    const blocked=obstacles();
    const {rightX,top}=wallpaperOrigin();
    const result=[];
    // One shared grid anchored to the blog TOP and to the mirrored right gutter.
    // It extends both leftward and rightward, not only two lateral columns.
    const x0=rightX-Math.ceil((rightX-outerPad)/cellW)*cellW;
    for(let y=top;y+iconH<height-28;y+=cellH){
      for(let x=x0;x+iconW<width-outerPad;x+=cellW){
        if(x<outerPad)continue;
        const r=boundsAt(x,y);
        if(!blocked.some(b=>intersects(r,b,5)))result.push({x,y,key:`${x},${y}`});
      }
    }
    // Extra rows above the blog also remain usable during drag.
    for(let y=top-cellH;y>=outerPad;y-=cellH){
      for(let x=x0;x+iconW<width-outerPad;x+=cellW){
        if(x<outerPad)continue;
        const r=boundsAt(x,y);
        if(!blocked.some(b=>intersects(r,b,5)))result.push({x,y,key:`${x},${y}`});
      }
    }
    // Extra parking cells in the header's empty wallpaper (not on logo/menu).
    const head=document.querySelector('.hd');
    if(head && width>=1160){
      const r=rectDoc(head),xStart=Math.round(r.right-5*cellW);
      for(let row=0;row<2;row++){
        for(let col=0;col<5;col++){
          const x=xStart+col*cellW,y=Math.round(r.top+10+row*cellH);
          if(x>=outerPad && x+iconW<width-outerPad &&
             !blocked.some(b=>intersects(boundsAt(x,y),b,5))){
            const key=`${x},${y}`;
            if(!result.some(c=>c.key===key))result.push({x,y,key});
          }
        }
      }
    }
    return result;
  }
  function closest(candidates,x,y){return candidates.reduce((best,c)=>{
    const dist=(c.x-x)**2+(c.y-y)**2;
    return dist<best.dist?{cell:c,dist}:best;
  },{cell:null,dist:Infinity}).cell;}
  function snapped(i,preferredX,preferredY){
    const used=new Set([...spots.entries()].filter(([j])=>j!==i).map(([,p])=>p.key));
    return closest(cells.filter(c=>!used.has(c.key)),preferredX,preferredY);
  }
  desktopFiles.forEach((file,i)=>{
    const el=document.createElement('div');el.className='desk-toy';el.tabIndex=0;
    el.dataset.name=file.name;el.setAttribute('role','button');
    el.setAttribute('aria-label',file.name+', draggable decorative desktop file');
    el.innerHTML=`<img src="${file.image}" alt="" draggable="false"><span class="desk-name">${file.name}</span>`;
    toyDesk.append(el);icons.push(el);
  });
  function draw(){
    for(let i=0;i<icons.length;i++){
      const el=icons[i],p=spots.get(i);if(!p||el.classList.contains('dragging'))continue;
      el.style.setProperty('left',p.x+'px','important');
      el.style.setProperty('top',p.y+'px','important');
    }
  }
  function rebuild(first=false){
    const prev=new Map(spots),width=document.documentElement.clientWidth;
    cells=availableCells();
    spots.clear();
    const {rightX,top}=wallpaperOrigin();
    // V6: exactly five decorative files in a single top row, in the
    // user's prescribed order. Remaining five stay compact in the right
    // wallpaper gutter. Both remain draggable on the global desktop grid.
    const header=document.querySelector('.hd');
    const menu=document.querySelector('.hd .menu');
    const logo=document.querySelector('.hd .strip-identity');
    const hdr=header?rectDoc(header):null;
    const protectedBoxes=[...document.querySelectorAll('.sheet,.dock,.topline')].map(rectDoc);
    if(menu)protectedBoxes.push(rectDoc(menu));
    if(logo)protectedBoxes.push(rectDoc(logo));
    const topNames=['rhiannon.mp3','loveland.mp3','kitty.exe','dear_diary.pdf','more_files'];
    const topByName=new Map();
    if(hdr && width>=1160){
      const startX=Math.round(hdr.right-topNames.length*cellW);
      const startY=Math.round(hdr.top+38); // slightly lower than V5
      topNames.forEach((name,col)=>{
        const x=startX+col*cellW,y=startY;
        if(x>=outerPad && x+iconW<width-outerPad &&
           !protectedBoxes.some(b=>intersects(boundsAt(x,y),b,5))){
          topByName.set(name,{x,y,key:`${x},${y}`});
        }
      });
    }
    const sideSlots=[];
    // V7 Easter eggs: start the five RIGHT-gutter files below the
    // 'Now Playing' widget, not alongside the first screen of the blog.
    // The widget is measured in document coordinates so the starting
    // position naturally follows the page layout.
    const nowPlaying=document.querySelector('.rail .w:nth-child(3)');
    const nowRect=nowPlaying?rectDoc(nowPlaying):null;
    const easterStart=nowRect
      ? Math.round(Math.max(top+cellH*3,nowRect.bottom+20))
      : Math.round(top+cellH*5);
    // A compact 2-column / 3-row group, no blank rows.
    for(let row=0;row<12;row++){
      for(let col=0;col<2;col++){
        const x=rightX+col*cellW,y=easterStart+row*cellH;
        if(x<outerPad || x+iconW>=width-outerPad)continue;
        if(protectedBoxes.some(b=>intersects(boundsAt(x,y),b,5)))continue;
        sideSlots.push({x,y,key:`${x},${y}`});
      }
    }
    const sideNames=['cherry_charm.png','fav_books.pdf','coffe_cup.jpg','stuff.png','wired.mp3'];
    const preferred=new Map();
    for(const name of topNames){
      if(topByName.has(name))preferred.set(name,topByName.get(name));
    }
    sideNames.forEach((name,i)=>{
      if(sideSlots[i])preferred.set(name,sideSlots[i]);
    });
    const fallback=[...cells].sort((a,b)=>a.y-b.y||b.x-a.x);
    icons.forEach((el,i)=>{
      let slot=null;
      // Never reintroduce gaps for untouched icons during resize/navigation.
      if(manuallyMoved.has(i)&&prev.has(i))slot=snapped(i,prev.get(i).x,prev.get(i).y);
      if(!slot){
        const desired=preferred.get(desktopFiles[i].name);
        if(desired){
          const used=new Set([...spots.values()].map(p=>p.key));
          if(!used.has(desired.key))slot=desired;
        }
      }
      if(!slot){
        const used=new Set([...spots.values()].map(p=>p.key));
        slot=fallback.find(c=>!used.has(c.key))||null;
      }
      if(slot)spots.set(i,slot);
    });
    draw();
  }
  icons.forEach((el,i)=>{
    let drag=null;
    el.addEventListener('pointerdown',e=>{
      if(e.pointerType==='mouse'&&e.button!==0)return;
      const r=el.getBoundingClientRect();
      drag={id:e.pointerId,dx:e.clientX-r.left,dy:e.clientY-r.top};
      icons.forEach(item=>item.classList.toggle('selected',item===el));
      el.classList.add('dragging');
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    el.addEventListener('pointermove',e=>{
      if(!drag||e.pointerId!==drag.id)return;
      // No restrictions during drag: icons may temporarily pass over windows/content.
      const x=e.clientX+scrollX-drag.dx,y=e.clientY+scrollY-drag.dy;
      el.style.setProperty('left',x+'px','important');
      el.style.setProperty('top',y+'px','important');
    });
    function end(e){
      if(!drag||e.pointerId!==drag.id)return;
      const x=e.clientX+scrollX-drag.dx,y=e.clientY+scrollY-drag.dy;
      drag=null;el.classList.remove('dragging');
      // Recompute free desktop wallpaper slots, then snap to the nearest unoccupied one.
      cells=availableCells();
      const target=snapped(i,x,y);
      if(target){spots.set(i,target);manuallyMoved.add(i);}
      draw();
    }
    el.addEventListener('pointerup',end);
    el.addEventListener('pointercancel',end);
    el.addEventListener('keydown',e=>{
      if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))return;
      e.preventDefault();const p=spots.get(i);if(!p)return;
      const dx=e.key==='ArrowRight'?cellW:e.key==='ArrowLeft'?-cellW:0;
      const dy=e.key==='ArrowDown'?cellH:e.key==='ArrowUp'?-cellH:0;
      const target=snapped(i,p.x+dx,p.y+dy);if(target){spots.set(i,target);manuallyMoved.add(i);}draw();
    });
  });
  rebuild(true);
  const scheduleLayout=()=>{clearTimeout(relayoutTimer);relayoutTimer=setTimeout(()=>rebuild(false),100);};
  window.addEventListener('resize',scheduleLayout);
  window.addEventListener('desktop:layout',scheduleLayout);
}

/* phones: only the menu buttons stay on top; the dock and the desktop files move below the page */
(()=>{const mq=matchMedia('(max-width:760px)'),toys=document.getElementById('desktop-toys'),stage=document.querySelector('.stage'),hdr=document.querySelector('header.hd'),dc=document.querySelector('.deskcol'),sheet=document.querySelector('.sheet');
if(!toys||!stage||!hdr||!dc||!sheet)return;
const place=()=>{if(mq.matches){sheet.after(dc);stage.after(toys)}else{stage.prepend(dc);hdr.after(toys)}};
place();mq.addEventListener('change',place)})();
