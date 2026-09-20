/* Q6 · additive question module; preserves all Q1–Q5 content and quiz controls. */
(() => {
  'use strict';
  if (typeof QUESTIONS === 'undefined' || typeof state === 'undefined' || typeof refresh !== 'function') return;
  if (QUESTIONS.some(q => q.id === 6)) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="460" viewBox="0 0 900 460"><rect width="900" height="460" fill="#f3f8ff"/><rect x="24" y="24" width="852" height="412" rx="22" fill="white" stroke="#c5d8f1" stroke-width="2"/><text x="54" y="84" fill="#245aa7" font-size="28" font-family="Arial,sans-serif" font-weight="bold">Q6 · Non-IgE-mediated cow's milk allergy</text><text x="54" y="137" fill="#25394f" font-size="21" font-family="Arial,sans-serif">10 weeks · exclusively breastfed</text><text x="54" y="190" fill="#25394f" font-size="21" font-family="Arial,sans-serif">Irritability + regurgitation + loose stools with blood</text><text x="54" y="243" fill="#25394f" font-size="21" font-family="Arial,sans-serif">Weight centile: 50th → 25th</text><path d="M450 270v44m-10-10 10 10 10-10" fill="none" stroke="#2963b4" stroke-width="4"/><rect x="76" y="327" width="748" height="78" rx="14" fill="#e4f5eb" stroke="#9fd5b5"/><text x="450" y="361" text-anchor="middle" fill="#14663c" font-size="22" font-weight="bold" font-family="Arial,sans-serif">Continue breastfeeding</text><text x="450" y="391" text-anchor="middle" fill="#14663c" font-size="19" font-family="Arial,sans-serif">Maternal cow's-milk exclusion trial for 2–4 weeks</text></svg>`;
  QUESTIONS.push({
    id:6, category:'儿童过敏与消化', difficulty:'重点', title:'纯母乳喂养婴儿：血便与牛奶蛋白过敏', en_title:'Cow’s milk protein allergy in an exclusively breastfed infant',
    stem:'A 10-week-old boy is brought to the GP. He is exclusively breastfed and has been persistently irritable for the past month. His mother reports frequent regurgitation and loose stools, occasionally containing flecks of blood. His weight has dropped from the 50th to the 25th centile. Examination is unremarkable.\n\nWhat is the most appropriate initial advice for the mother?',
    options:[['A',"Advise maternal exclusion of cow's milk protein"],['B','Advise switching to an amino acid-based formula'],['C','Advise switching to an extensively hydrolysed formula'],['D','Advise switching to a soya-based formula'],['E','Refer for skin prick testing']],
    answer:'A', answerName:"Advise maternal exclusion of cow's milk protein", key:'10周龄＋纯母乳＋反复反流、稀便伴少量血丝＋烦躁＋体重百分位下降，考虑非IgE介导牛奶蛋白过敏；问“最初给母亲的建议”。',
    image:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg),
    sections:[
      {heading:'一、为什么选 A？从症状推断免疫机制',body:'<p>纯母乳婴儿出现持续胃肠道症状（反流、腹泻、血丝便）和烦躁，提示<strong>牛奶蛋白过敏（cow’s milk allergy，CMA）</strong>，更符合<strong>非 IgE 介导</strong>表现，例如食物蛋白诱导的过敏性直肠结肠炎（FPIAP）谱系。母亲摄入的少量膳食牛奶蛋白可能进入母乳；不过<strong>纯母乳婴儿真正的牛奶蛋白过敏并不常见</strong>，不能仅凭反流或烦躁直接确诊。</p><p>这位婴儿已有反复血丝便与体重百分位下移，适合在临床评估下<strong>继续母乳喂养，母亲试行严格排除牛奶蛋白 2–4 周</strong>，记录便血、排便、喂养和体重变化；随后制定母亲重新引入牛奶的计划，以症状复发验证因果关系，避免无限期无根据忌口。</p>'},
      {heading:'二、最关键的治疗决策：先保留母乳',body:'<div class="flow"><span>纯母乳＋提示性的胃肠道症状</span><i>↓</i><span>评估婴儿状况、生长曲线、便血其他原因</span><i>↓</i><span>继续母乳；母亲排除牛奶蛋白 2–4 周</span><i>↓</i><span>症状改善？复评体重并按医生方案重新引入母亲饮食中的牛奶</span><i>↓</i><span>再引入后症状重现：支持诊断；未改善则重新考虑病因</span></div><p>母亲需要检查乳制品及加工食品配料，获得营养指导，并按照当地推荐补充钙与维生素 D。体重从第 50 降至第 25 百分位本身不等于确诊生长迟缓，但需核实测量、绘制完整生长曲线，并安排近期复评。</p>'},
      {heading:'三、选项逐一排除',body:'<table class="study-table"><thead><tr><th>选项</th><th>为什么</th></tr></thead><tbody><tr><td>A ✓ 母亲去除牛奶蛋白</td><td>在有临床指征的纯母乳婴儿中，先延续母乳并进行限时排除—再引入试验。</td></tr><tr><td>B 氨基酸配方 AAF</td><td>适用于特定重症、复杂病例或深度水解配方不耐受等情况；本题不应首先放弃母乳。</td></tr><tr><td>C 深度水解配方 eHF</td><td>无法母乳喂养、必须使用配方时常用的一线替代；本题目前纯母乳，不能作为首选初始建议。</td></tr><tr><td>D 大豆配方</td><td>婴儿可能合并大豆过敏；年龄仅10周，不宜作为本题首选。</td></tr><tr><td>E 皮肤点刺试验</td><td>主要反映 IgE 致敏；不能可靠诊断非 IgE 介导胃肠道过敏。</td></tr></tbody></table>'},
      {heading:'四、临床不能漏掉的警讯',body:'<p>肛裂、感染及其他肠道疾病也可造成婴儿血便。若持续或大量便血、脱水、胆汁性呕吐、精神差、贫血或生长明显受损，应及时进一步评估，不能仅让家属自行长期忌口。FPIAP 的典型患儿多整体状态良好；本题的体重趋势要求主动随访。</p>'},
      {heading:'五、指南出处与诊断注意事项',body:'<p>世界过敏组织 WAO DRACMA 2023：对病史与检查较支持 CMA 的纯母乳婴儿，可试行母亲排除牛奶 2–4 周，之后重新引入确认。诊断不是“忌口有效”即结束，应评估再引入后的反应。<a href="https://pubmed.ncbi.nlm.nih.gov/38020284/" target="_blank" rel="noopener noreferrer">WAO DRACMA：母乳喂养与牛奶过敏</a>；<a href="https://pubmed.ncbi.nlm.nih.gov/37546235/" target="_blank" rel="noopener noreferrer">WAO DRACMA：排除与再引入</a>。</p>'}
    ],
    visualHtml:'<section class="note-section"><h3>🧠 诊断逻辑图卡</h3><div class="visual-note"><strong>纯母乳不是牛奶蛋白过敏的排除条件</strong><p>母乳优先 → 有指征才让母亲短期排除牛奶 → 观察改善 → 重新引入验证。不要只凭非特异性反流、哭闹过度诊断。</p></div></section>',
    takeaway:'纯母乳＋疑似非 IgE 牛奶蛋白过敏 → 继续母乳，母亲限时排除牛奶蛋白 2–4 周，再引入验证；同时复查体重。'
  });
  const intro=document.querySelector('.intro p'); if(intro) intro.textContent='按题号整理本对话中的 6 道儿科题目、英文原题、所有选项、答案与中文解析。Q1–Q5 原题截图保留；Q6 暂用自制摘要图卡代替原始截图。可搜索、收藏和打印。';
  const title=document.querySelector('.page-title'); if(title) title.textContent=title.textContent.replace('5 道','6 道').replace('5道','6道');
  document.title='儿科刷题档案 · 6道题';
  state.current=6;
  refresh();
})();