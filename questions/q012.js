/* Q12 — additive module. Q1–Q11 archived files are not modified. */
(() => {
  'use strict';
  if (typeof QUESTIONS === 'undefined' || typeof refresh !== 'function') return;
  if (QUESTIONS.some(q => q.id === 12)) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="980" height="510" viewBox="0 0 980 510"><rect width="980" height="510" fill="#f3f7fb"/><rect x="22" y="22" width="936" height="466" rx="22" fill="white" stroke="#d8e4ef" stroke-width="2"/><text x="54" y="82" fill="#245ba4" font-size="29" font-weight="bold" font-family="Arial,sans-serif">Q12 · Vesicoureteric reflux: which imaging test?</text><rect x="65" y="124" width="850" height="80" rx="14" fill="#eaf1ff"/><text x="490" y="157" text-anchor="middle" fill="#204979" font-size="22" font-family="Arial,sans-serif">VCUG / MCUG = demonstrate and grade REFLUX</text><text x="490" y="186" text-anchor="middle" fill="#45617a" font-size="18" font-family="Arial,sans-serif">Contrast travels from bladder towards ureter / renal pelvis</text><path d="M490 215v37m-10-10 10 10 10-10" stroke="#4574b6" stroke-width="4" fill="none"/><rect x="65" y="269" width="850" height="103" rx="14" fill="#e7f7ee" stroke="#a5d9ba"/><text x="490" y="311" text-anchor="middle" fill="#11633f" font-size="25" font-family="Arial,sans-serif" font-weight="bold">99mTc-DMSA = assess renal CORTEX / SCARS</text><text x="490" y="345" text-anchor="middle" fill="#2f7151" font-size="19" font-family="Arial,sans-serif">Poor cortical uptake = photopenic defect; compare timing and follow-up</text><rect x="65" y="400" width="850" height="55" rx="12" fill="#fff5e5"/><text x="490" y="435" text-anchor="middle" fill="#895b18" font-size="19" font-family="Arial,sans-serif">To distinguish a persistent scar from acute inflammation, allow time after UTI</text></svg>`;
  QUESTIONS.push({
    id:12,category:'儿童肾脏与泌尿',difficulty:'必考',title:'膀胱输尿管反流：检查肾瘢痕首选什么？',en_title:'Vesicoureteric reflux: investigation for renal scarring',
    stem:'What is the investigation of choice to look for renal scarring in a child with vesicoureteric reflux?',
    options:[['A','Abdominal x-ray'],['B','Ultrasound'],['C','Radionuclide scan using dimercaptosuccinic acid (DMSA)'],['D','CT scan'],['E','Micturating cystourethrogram']],
    answer:'C',answerName:'Radionuclide scan using dimercaptosuccinic acid (DMSA)',
    key:'题眼是 renal scarring（肾皮质瘢痕），不是是否存在反流或反流分级。',
    image:'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    sections:[
      {heading:'一、正确答案 C：DMSA 肾静态显像',body:'<p><strong>99mTc-DMSA（锝-99m 二巯基丁二酸）肾静态显像</strong>主要显示肾皮质及双肾相对功能。示踪剂经近端肾小管细胞摄取并保留，正常皮质摄取较均匀；皮质炎症或瘢痕区摄取下降，表现为局灶性放射性缺损（cold spot／photopenic defect）。因此，题目问膀胱输尿管反流患儿的<strong>肾实质瘢痕</strong>，选DMSA，而不是排尿性膀胱尿道造影。</p><p><strong>关键限制：</strong>急性肾盂肾炎也可能产生摄取缺损，单次急性期DMSA异常不一定等于永久瘢痕。若依据儿童UTI指南评估感染后的持久肾实质缺损，NICE建议对符合影像指征的患儿于急性感染后<strong>4–6个月</strong>行DMSA；并非每个首次UTI患儿都需要此检查。</p>'},
      {heading:'二、VUR的机制：为什么会出现肾损伤？',body:'<p>正常输尿管斜行穿过膀胱壁，形成黏膜下隧道；膀胱充盈与排尿时的压力使壁内段受压，起到抗反流瓣膜作用。原发性VUR常与壁内输尿管段过短、膀胱输尿管连接部抗反流机制不足有关，尿液从膀胱逆行流向输尿管或肾盂。</p><div class="flow"><span>膀胱输尿管连接部抗反流机制不足</span><i>↓</i><span>膀胱内尿液逆行 → VUR</span><i>↓</i><span>尤其合并发热性UTI／肾盂肾炎或高等级反流</span><i>↓</i><span>肾皮质损伤和瘢痕风险增加</span></div><p>并非所有VUR患儿都会出现瘢痕；有些肾皮质异常也可能源于先天性肾发育不良，因此不能把所有DMSA缺损都归因于后天反流感染。</p>'},
      {heading:'三、五个选项逐一排除',body:'<table class="study-table"><thead><tr><th>检查</th><th>用途及本题判断</th></tr></thead><tbody><tr><td>A 腹部X线</td><td>普通平片无法可靠评估肾皮质瘢痕。</td></tr><tr><td>B 超声</td><td>初步了解肾大小、积水、皮质厚度及结构；能发现部分明显瘢痕，但对细微皮质缺损不如DMSA敏感，正常超声不能排除VUR。</td></tr><tr><td>C DMSA ✓</td><td>显示肾皮质摄取缺损和分肾相对功能，是本题评估瘢痕的目标检查。</td></tr><tr><td>D CT</td><td>并非儿童评估VUR相关瘢痕的常规首选；有辐射负担，通常无必要。</td></tr><tr><td>E MCUG／VCUG</td><td>经导尿管向膀胱注入造影剂，在充盈与排尿时观察尿液是否逆流，诊断并分级VUR；不能直接作为评估肾皮质瘢痕的最佳检查。</td></tr></tbody></table>'},
      {heading:'四、三个检查的提问方式，一眼识别',body:'<div class="feature-grid"><div><b>US（超声）</b><span>肾与泌尿道的解剖筛查</span><p>看积水、肾大小、皮质厚度、膀胱形态。</p></div><div><b>MCUG / VCUG（排尿性膀胱尿道造影）</b><span>有无反流？反流几级？</span><p>显示逆流、输尿管／肾盂肾盏扩张并分级I–V。</p></div><div><b>DMSA（肾静态显像）</b><span>肾皮质有无缺损或瘢痕？</span><p>评估皮质损伤与双肾相对功能。</p></div><div><b>MAG3（肾动态显像）</b><span>肾排泄／引流与梗阻评估</span><p>与DMSA用途不同，不要混淆。</p></div></div><p>题目是<strong>look for renal scarring</strong>，所以直达DMSA；若改为“diagnose and grade reflux”，则应答VCUG／MCUG。</p>'},
      {heading:'五、VUR分级速记（按排尿性膀胱尿道造影）',body:'<table class="study-table"><thead><tr><th>级别</th><th>典型影像表现</th></tr></thead><tbody><tr><td>I</td><td>逆流仅入输尿管，未达肾盂。</td></tr><tr><td>II</td><td>逆流到肾盂肾盏，无扩张。</td></tr><tr><td>III</td><td>输尿管及肾盂肾盏轻—中度扩张，肾盏穹隆正常或轻微变形。</td></tr><tr><td>IV</td><td>中度扩张／迂曲，肾盏穹隆变钝但乳头压迹尚可见。</td></tr><tr><td>V</td><td>显著扩张与迂曲，肾盏形态严重改变，乳头压迹消失。</td></tr></tbody></table><p>分级评估风险与治疗，但并不是“等级越高就一定已经有肾瘢痕”。</p>'},
      {heading:'六、指南核对与适用范围',body:'<p><a href="https://uroweb.org/guidelines/paediatric-urology/chapter/vesicoureteric-reflux" target="_blank" rel="noopener noreferrer">EAU 儿科泌尿指南：VUR、VCUG分级和DMSA评估皮质瘢痕</a>；<a href="https://www.nice.org.uk/guidance/ng224/chapter/Recommendations" target="_blank" rel="noopener noreferrer">NICE NG224：儿童UTI影像指征与DMSA感染后4–6个月时点</a>。检查的选择须依年龄、UTI特点及风险因素确定；“DMSA是看瘢痕的最佳选项”不等于所有VUR儿童都需常规反复扫描。</p>'}
    ],
    visualHtml:'<section class="note-section"><h3>🧠 一图辨别检查目的</h3><div class="visual-note"><strong>反流 → VCUG；瘢痕 → DMSA；初筛结构 → 超声</strong><p>上方为原创教学示意图，不是用户上传的题目截图或真实核医学影像。</p></div></section>',
    takeaway:'问反流诊断／分级：VCUG（MCUG）；问肾皮质损伤或瘢痕：99mTc-DMSA；评价持续瘢痕须注意急性炎症造成的暂时性缺损。'
  });
  QUESTIONS.sort((a,b)=>a.id-b.id);
  const total=QUESTIONS.length;
  document.title='儿科刷题档案 · '+total+'道题';
  const intro=document.querySelector('.intro p'); if(intro) intro.textContent='当前收录 Q1–Q'+total+'，原有题目保留，新题按编号增量追加；可检索、收藏和打印。Q12配图是自绘教学图，并非原题截图。';
  const firstStat=document.querySelector('.stat-row .stat b'); if(firstStat) firstStat.innerHTML=total+' <small>道题</small>';
  state.current=12;
  refresh();
})();
