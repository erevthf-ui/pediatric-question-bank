/* Q13 — append-only module: growing pains. Existing Q1–Q12 files remain unchanged. */
(() => {
  'use strict';
  if (typeof QUESTIONS === 'undefined' || typeof refresh !== 'function') return;
  if (QUESTIONS.some(q => q.id === 13)) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="500" viewBox="0 0 960 500"><rect width="960" height="500" fill="#f2f7fb"/><rect x="24" y="24" width="912" height="452" rx="22" fill="white" stroke="#d4e1ef" stroke-width="2"/><text x="54" y="83" fill="#255eaa" font-size="30" font-family="Arial,sans-serif" font-weight="bold">Q13 · Growing pains (benign nocturnal limb pain)</text><rect x="60" y="115" width="840" height="72" rx="14" fill="#e9f2ff"/><text x="480" y="160" text-anchor="middle" fill="#225586" font-size="23" font-family="Arial,sans-serif">Age 6 + bilateral shin / leg pain at night</text><path d="M480 193v32m-10-10 10 10 10-10" fill="none" stroke="#5b83b6" stroke-width="4"/><rect x="60" y="238" width="840" height="82" rx="14" fill="#e7f6ed"/><text x="480" y="273" text-anchor="middle" fill="#13623e" font-size="23" font-family="Arial,sans-serif" font-weight="bold">Well child + normal examination</text><text x="480" y="303" text-anchor="middle" fill="#277651" font-size="19" font-family="Arial,sans-serif">Usually pain-free in the morning; normal walking</text><rect x="60" y="348" width="840" height="88" rx="14" fill="#fff4e5"/><text x="480" y="383" text-anchor="middle" fill="#88591c" font-size="20" font-family="Arial,sans-serif" font-weight="bold">RED FLAGS: unilateral / focal, limp, swelling, fever</text><text x="480" y="414" text-anchor="middle" fill="#88591c" font-size="18" font-family="Arial,sans-serif">persistent morning pain, worsening, weight loss</text></svg>`;
  QUESTIONS.push({
    id:13,category:'儿童骨科与生长发育',difficulty:'基础',title:'6岁儿童双侧夜间小腿痛：生长痛',en_title:'Bilateral nocturnal leg pain with a normal examination',
    stem:'A 6-year-old boy is brought to surgery by his mother. For the past 2 months he has been complaining of pain in his shins and ankles at night-time. His symptoms are bilateral he is otherwise well. There is no family history of note. Clinical examination is unremarkable.\n\nWhat is the most likely diagnosis?',
    options:[['A','Legg-Calve-Perthes disease'],['B','Osteoid osteoma'],['C','Growing pains'],['D','Talipes equinovarus'],['E','Osteochondritis dissecans']],
    answer:'C',answerName:'Growing pains（生长痛／儿童良性夜间肢体痛）',
    key:'6岁＋持续2个月的双侧胫部及踝周夜间痛＋其余健康＋体格检查正常：典型生长痛题型。若真的是踝关节内持续疼痛或有红旗征象，则须重新评估。',
    image:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg),
    sections:[
      {heading:'一、选 C：从五条线索识别生长痛',body:'<p><strong>Growing pains（生长痛）</strong>又称儿童良性夜间肢体痛（benign nocturnal limb pains）。典型发生于约3–12岁儿童，以<strong>双侧</strong>下肢酸痛为主，多位于小腿、胫部、腘窝或大腿，常在傍晚及夜间出现，可反复数月；白天尤其早晨通常无痛，步态、活动能力及体格检查正常。本题的年龄6岁、双侧夜间胫部／踝周痛、健康且查体无异常，使C最符合。</p><p>需要准确理解：题干只说“夜间痛、查体正常”，并未明确提供“晨起消失”和“无跛行”；后两项是应进一步询问并确认的典型特征，不能冒充题干已知信息。痛点通常是肌肉／肢体而非真正关节内部，若患儿清晰指向踝关节内疼痛，需要进一步检查。</p>'},
      {heading:'二、为什么其他四项不合适？',body:'<table class="study-table"><thead><tr><th>选项</th><th>典型表现及与本题的区别</th></tr></thead><tbody><tr><td>A Legg–Calvé–Perthes 病</td><td>儿童股骨头骨骺缺血性坏死；常表现为跛行、髋／腹股沟／大腿或牵涉性膝痛，髋外展和内旋可受限。双侧胫部夜痛且查体正常不典型。</td></tr><tr><td>B 骨样骨瘤 Osteoid osteoma</td><td>也会<strong>夜间痛</strong>，但常为单一骨部位的持续局灶性疼痛，典型对NSAIDs反应显著；应寻找固定压痛点。不要仅凭“夜间痛”就选它。</td></tr><tr><td>C Growing pains ✓</td><td>学龄前／学龄儿童，双侧、夜间、非进行性，白天健康、无客观检查异常。</td></tr><tr><td>D 马蹄内翻足 Talipes equinovarus</td><td>多为出生时可见的足部固定形态畸形（跖屈、内翻、前足内收），而非6岁儿童新发双侧夜痛且足部外观正常。</td></tr><tr><td>E 剥脱性骨软骨炎 Osteochondritis dissecans</td><td>常累及膝等关节，运动相关局部疼痛、肿胀、卡锁或活动障碍；与本题非关节特异性的双侧夜痛不同。</td></tr></tbody></table>'},
      {heading:'三、生长痛不是骨骼正在长长造成的痛',body:'<p>名称虽叫“生长痛”，并<strong>没有证据证明由骨骼生长或生长高峰直接引起</strong>。病因尚不明确，活动量大、肌肉疲劳或关节过度活动等可能有关。属于临床判断：典型病史加正常查体、排除危险信号后可作出判断，不存在专门用于“确诊生长痛”的血液检测或影像检查。</p><div class="flow"><span>年龄合适＋双侧下肢间歇性夜痛</span><i>↓</i><span>早晨恢复、活动及步态正常、无全身症状？</span><i>↓</i><span>仔细检查骨、关节、肌肉及步态，排除局灶痛与红旗</span><i>↓</i><span>符合典型模式 → 临床考虑生长痛；解释、对症处理与随访</span></div>'},
      {heading:'四、何时不能简单归为生长痛？',body:'<p><strong>需要重新评估的红旗：</strong>单侧或固定一处疼痛；夜痛逐渐加重或持续不缓解；晨起仍痛、活动时疼痛或跛行／拒绝负重；真正关节痛、肿胀、发红、局部骨压痛；发热、乏力、苍白、瘀斑、体重下降等。持续进行性、局灶性夜痛尤其要排除骨样骨瘤、感染和肿瘤等。不能把“夜间痛”本身当作良性诊断的充分依据。</p><p>本题若病史和检查完全符合典型模式，一般不需常规影像或抽血；若存在上述异常，应按相应线索选择检查和转诊。急性不能负重、发热伴疑似关节感染需紧急评估。</p>'},
      {heading:'五、管理、考试速记与参考资料',body:'<p>向家属解释通常为良性且可反复；可给予轻柔按摩、热敷／温水浴，疼痛明显时按儿童年龄、体重及适应证使用对乙酰氨基酚或布洛芬。确认晨起无痛、正常走路，并交代复诊警讯。病程变化或不符合典型特征应及时复诊。</p><p>资料：<a href="https://www.nhs.uk/conditions/growing-pains/" target="_blank" rel="noopener noreferrer">NHS：Growing pains</a>；<a href="https://www.clinicalguidelines.scot.nhs.uk/rhc-for-health-professionals/guidelines/primary-care-referral-guidelines/medical-paediatric-pre-referral-guidance/nocturnal-leg-pain-advice-for-referrers/" target="_blank" rel="noopener noreferrer">NHS Greater Glasgow &amp; Clyde：Nocturnal leg pain 与红旗</a>；<a href="https://www.rch.org.au/clinicalguide/guideline_index/Child_with_limp/" target="_blank" rel="noopener noreferrer">Royal Children’s Hospital：儿童跛行与危险信号</a>。</p>'}
    ],
    visualHtml:'<section class="note-section"><h3>🧠 一图速记</h3><div class="visual-note"><strong>双侧＋夜间＋晨起恢复＋查体正常 → 生长痛</strong><p>若单侧、局灶、晨痛、跛行、全身症状或加重，应寻找其他诊断。上方是原创学习示意图，不是原题截图。</p></div></section>',
    takeaway:'6岁双侧夜间胫部痛、健康且查体正常：首选生长痛（C）。真正关节痛、单侧固定痛、晨痛、跛行、发热或体重下降均不是典型生长痛。'
  });
  QUESTIONS.sort((a,b)=>a.id-b.id);
  const total=QUESTIONS.length;
  document.title='儿科刷题档案 · '+total+'道题';
  const intro=document.querySelector('.intro p');if(intro)intro.textContent='当前收录 Q1–Q'+total+'；历史题目不覆盖，新题按题号增量追加。Q13 配图为原创教学图，非原题截图。';
  const stat=document.querySelector('.stat-row .stat b');if(stat)stat.innerHTML=total+' <small>道题</small>';
  state.current=13;
  refresh();
})();