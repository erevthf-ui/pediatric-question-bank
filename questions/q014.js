/* Q14 — additive question module. Previous question content is not modified. */
(() => {
  'use strict';
  if (typeof QUESTIONS === 'undefined' || typeof refresh !== 'function') return;
  if (QUESTIONS.some(item => item.id === 14)) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="470" viewBox="0 0 960 470"><rect width="960" height="470" fill="#f3f8fc"/><rect x="25" y="24" width="910" height="422" rx="21" fill="white" stroke="#d4e2ee" stroke-width="2"/><text x="52" y="80" fill="#285c9b" font-family="Arial,sans-serif" font-weight="bold" font-size="29">Q14 · Down syndrome + tiredness</text><rect x="67" y="107" width="826" height="73" rx="13" fill="#eaf1ff"/><text x="480" y="152" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" fill="#224e81">Consider thyroid dysfunction: check TSH</text><path d="M480 190v32m-10-10 10 10 10-10" stroke="#5a80b0" stroke-width="4" fill="none"/><rect x="67" y="238" width="826" height="92" rx="13" fill="#e7f7ee"/><text x="480" y="275" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="24" fill="#196442">Hypothyroidism: most characteristic answer</text><text x="480" y="304" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#277052">Hyperthyroidism is possible but less common</text><rect x="67" y="351" width="826" height="60" rx="12" fill="#fff3e4"/><text x="480" y="387" text-anchor="middle" font-family="Arial,sans-serif" font-size="19" fill="#82591f">Annual TSH; test earlier if symptomatic</text></svg>`;
  QUESTIONS.push({
    id:14,category:'遗传综合征与儿科内分泌',difficulty:'重点',title:'唐氏综合征青少年疲劳：关联的甲状腺疾病',en_title:'Down syndrome: hypothyroidism association',
    stem:"Jason a 14-year-old boy with Down's syndrome who presents to the GP with tiredness. Which of the following conditions is associated with Down's syndrome?",
    options:[['A','Type-2-diabetes'],['B','ADHD'],['C','Hyperthyroidism'],['D','Male breast cancer'],['E','Hypothyroidism']],
    answer:'E',answerName:'Hypothyroidism（甲状腺功能减退症）',
    key:'14岁唐氏综合征＋疲劳 → 想到甲状腺疾病；单选题预期答案为甲减。注意甲亢及ADHD也可与唐氏综合征并存，“其他选项绝对不相关”的题干表述不严谨。',
    image:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg),
    sections:[
      {heading:'一、为什么选 E？将遗传综合征和症状联系起来',body:'<p><strong>唐氏综合征（Down syndrome，通常为21三体）</strong>患儿发生甲状腺功能异常的风险较高，尤其要识别<strong>甲状腺功能减退症（hypothyroidism）</strong>。甲减可表现为疲劳、怕冷、便秘、皮肤干燥、生长速度减慢、体重变化以及学习或活动表现改变；这些症状可能不典型，不能单靠临床表现排除。题干给出14岁、唐氏综合征和疲劳，按单选题的典型关联选择E。</p><p>甲减可以是先天性，也可以是后天获得性，例如自身免疫性桥本甲状腺炎。21三体并不意味着每个人都会患甲减；疲劳也不是甲减的特异性症状，确诊须依赖甲状腺功能检查。</p>'},
      {heading:'二、重要命题陷阱：甲亢也有关联！',body:'<p>截图中的原解析明确指出：唐氏综合征同时增加<strong>甲亢和甲减</strong>风险，但甲减更常见，因此本题的<strong>考试预期答案是E</strong>，不能说选项C“完全无关联”。美国儿科学会（AAP）2022年报告列出唐氏综合征相关甲亢约0.65%–3%，并列出先天性甲减及自身免疫性甲状腺疾病等相关问题；这些指标定义和年龄范围各异，不应机械相加或直接作总体患病率比较。</p><p>此外，ADHD／注意力问题也确实可在唐氏综合征儿童中出现，因此若把题目字面理解为“只有一项与唐氏综合征存在任何关联”，选项设置并不严谨；结合疲劳和教材意图才选甲减。</p>'},
      {heading:'三、五个选项逐一判断',body:'<table class="study-table"><thead><tr><th>选项</th><th>解析</th></tr></thead><tbody><tr><td>A 2型糖尿病</td><td>唐氏综合征患儿可存在肥胖等代谢风险，但本题的经典内分泌关联是甲减；不要与更需记忆的1型糖尿病自身免疫关联混淆。</td></tr><tr><td>B ADHD</td><td>注意缺陷及ADHD可能共存，并非绝对无关；不能据此解释本题疲劳，也不是命题预期答案。</td></tr><tr><td>C 甲亢</td><td>也可能发生，特别是Graves病，但较甲减少见；本题单选不选C。</td></tr><tr><td>D 男性乳腺癌</td><td>不是唐氏综合征的经典高风险关联或本题疲劳的典型解释。</td></tr><tr><td>E 甲减 ✓</td><td>与唐氏综合征密切相关，且可出现疲劳；本题标准答案。</td></tr></tbody></table>'},
      {heading:'四、14岁唐氏综合征患儿出现疲劳，临床怎样检查？',body:'<div class="flow"><span>唐氏综合征＋新出现或持续疲劳</span><i>↓</i><span>查看甲功史、症状、生长曲线及体格检查</span><i>↓</i><span>检测TSH；异常时结合FT4判断，并视情况评估甲状腺抗体／转儿科内分泌</span><i>↓</i><span>同时排查贫血或缺铁、阻塞性睡眠呼吸暂停等其他原因</span></div><p>按AAP 2022年健康管理建议，唐氏综合征的青少年应<strong>每年检测TSH</strong>；有相关症状时提前检查；若已有抗甲状腺抗体，每6个月检测TSH。甲减常见的原发性模式为TSH升高、FT4降低（显性甲减）或FT4正常（亚临床甲减），解释需使用年龄及实验室参考范围。不要因为本题正确答案是甲减，就认定题干人物已经确诊。</p>'},
      {heading:'五、相关伴发疾病与临床警醒',body:'<p>唐氏综合征还需关注先天性心脏病、阻塞性睡眠呼吸暂停、听力及视力问题、乳糜泻、血液异常等。对14岁青少年的疲劳，需根据病史、查体与筛查情况考虑贫血／缺铁、睡眠呼吸暂停及心脏问题，避免把所有新症状简单归咎于遗传综合征。</p><p>参考：<a href="https://publications.aap.org/pediatrics/article/149/5/e2022057010/186778/Health-Supervision-for-Children-and-Adolescents" target="_blank" rel="noopener noreferrer">AAP Pediatrics 2022：唐氏综合征儿童和青少年健康管理</a>；<a href="https://pubmed.ncbi.nlm.nih.gov/35490285/" target="_blank" rel="noopener noreferrer">PubMed：同一临床报告</a>。上方为原创学习示意图，非用户原题截图。</p>'}
    ],
    visualHtml:'<section class="note-section"><h3>🧠 考试速记卡</h3><div class="visual-note"><strong>Down syndrome ＋ tiredness → 查甲功，单选优先甲减。</strong><p>甲亢也可能相关，但甲减更典型；青少年常规每年查TSH，出现症状时提前查。别忽略贫血和睡眠呼吸暂停。</p></div></section>',
    takeaway:'Q14选E：Hypothyroidism。唐氏综合征可并发甲亢和ADHD，原题若仅问“是否有关联”并不够严谨；但结合疲劳与较常见的甲减，E是预期答案。'
  });
  QUESTIONS.sort((a,b)=>a.id-b.id);
  const total=QUESTIONS.length;
  document.title='儿科刷题档案 · '+total+'道题';
  const stat=document.querySelector('.stat-row .stat b'); if(stat)stat.innerHTML=total+' <small>道题</small>';
  if (typeof state !== 'undefined') state.current=14;
  refresh();
})();