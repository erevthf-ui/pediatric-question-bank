/* Batch Q7–Q11. Source images for Q7–Q11 are ORIGINAL TEACHING DIAGRAMS, not user screenshots. */
(() => {
  'use strict';
  if (typeof QUESTIONS === 'undefined' || typeof state === 'undefined' || typeof refresh !== 'function') return;
  const diagram = (heading, rows, foot) => {
    const h = 125 + rows.length * 58;
    const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const lines = rows.map((row,i) => `<rect x="30" y="${82+i*58}" width="840" height="48" rx="10" fill="${i===rows.length-1?'#e5f5eb':'#edf4ff'}" stroke="${i===rows.length-1?'#98d5b0':'#c7d9f3'}"/><text x="450" y="${113+i*58}" text-anchor="middle" font-size="19" font-family="Arial, sans-serif" fill="#234366">${esc(row)}</text>`).join('');
    return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="${h}" viewBox="0 0 900 ${h}"><rect width="900" height="${h}" fill="#f5f9fd"/><text x="450" y="48" text-anchor="middle" font-size="27" font-weight="bold" font-family="Arial,sans-serif" fill="#17559c">${esc(heading)}</text>${lines}<text x="450" y="${h-13}" text-anchor="middle" font-size="12" font-family="Arial,sans-serif" fill="#66798b">${esc(foot||'Self-drawn revision diagram · Not an original patient photograph')}</text></svg>`);
  };
  const link=(url,label)=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const q=[
    {
      id:7,category:'儿童骨科',difficulty:'重点',title:'3岁女孩无痛性跛行：髋关节发育不良',en_title:'Developmental dysplasia of the hip (DDH)',
      stem:'A mother brings her 3-year-old daughter to see you as her carers reported that she is walking differently from the other children at nursery.\n\nWhen walking around the examination room, you observe that she walks with a Trendelenberg gait. She does not appear to be in any discomfort. On examination, you believe her left leg might be slightly shorter than her right.\n\nShe is otherwise developing well, is of normal weight, and is afebrile. Her mother tells you she cannot remember when she first started mobilising like this, but she thinks it has crept up on them over months.\n\nWhat is the most likely diagnosis?',
      options:[['A','Developmental dysplasia of the hip'],['B','Perthes disease'],['C','Septic arthritis'],['D','Slipped upper femoral epiphysis'],['E','Transient synovitis']],answer:'A',answerName:'Developmental dysplasia of the hip',
      key:'3岁女孩＋缓慢出现的无痛性跛行＋Trendelenburg步态＋左腿相对短 → 延迟发现的单侧DDH。',
      image:diagram('Q7 · Trendelenburg gait', ['Left leg bears weight; right leg is lifted','Left hip abductor mechanism insufficient','Right (unsupported) side of pelvis drops','Trunk may lean LEFT to compensate'], 'Concept diagram · pelvis drops opposite to the affected stance hip'),
      sections:[
        {heading:'一、诊断线索如何联系',body:'<p>发育性髋关节发育不良（DDH）包括髋臼发育不良、股骨头不稳定、半脱位或脱位。会走路后可能以无痛跛行、鸭步、髋关节外展受限或两腿不等长就诊。<strong>患侧表观缩短＋Trendelenburg步态</strong>尤其支持单侧髋关节病变。女孩为风险因素之一。</p><p>该步态不是DDH专有，因此需要骨盆影像和骨科评估，而非只凭步态确诊。</p>'},
        {heading:'二、Trendelenburg 的力学原理',body:'<div class="flow"><span>左腿单脚站立，右腿抬起</span><i>↓</i><span>正常左侧臀中肌／臀小肌收缩以维持骨盆水平</span><i>↓</i><span>左侧髋关节异常影响髋外展肌力学</span><i>↓</i><span>右侧骨盆下降；躯干可向左倾斜代偿</span></div><p><strong>记忆：患髋在支撑腿一侧；下沉的是对侧骨盆。</strong>注意区分骨盆下降（Trendelenburg sign）和躯干向患侧倾斜（代偿步态）。</p>'},
        {heading:'三、逐项鉴别',body:'<table class="study-table"><tr><th>选项</th><th>典型临床</th></tr><tr><td>A DDH ✓</td><td>学步后跛行、表观短腿、髋外展受限，可能无痛。</td></tr><tr><td>B Perthes</td><td>股骨头骨骺缺血性坏死，通常更大儿童，渐进跛行，可无痛；是本题最需鉴别者。</td></tr><tr><td>C 化脓性关节炎</td><td>多急性、疼痛明显、拒绝负重，可发热；需急诊排查。</td></tr><tr><td>D 股骨头骺滑脱（SUFE/SCFE）</td><td>典型青春期，常有肥胖、髋部／膝部疼痛及外旋。</td></tr><tr><td>E 一过性滑膜炎</td><td>急性或亚急性髋痛／跛行，常在病毒感染后，通常不是数月渐进伴短腿。</td></tr></table>'},
        {heading:'四、临床检查与图像学习',body:`<p>评估髋外展、Galeazzi征、下肢长度和Trendelenburg征；3岁应考虑骨盆X线并转诊儿童骨科。骨盆X线可观察髋臼覆盖及股骨头位置。</p><p>临床配图与进一步阅读：${link('https://www.orthoinfo.org/diseases--conditions/developmental-dislocation-dysplasia-of-the-hip-ddh','AAOS：DDH（含体检示意图）')}；${link('https://www.ncbi.nlm.nih.gov/books/NBK563157/','NCBI：DDH（包括Trendelenburg步态）')}。上方是自绘力学图，不是患者照片。</p>`}
      ],takeaway:'学步后无痛跛行＋Trendelenburg＋单侧短腿 → DDH；记住患侧支撑、对侧骨盆下沉。'
    },
    {
      id:8,category:'新生儿泌尿外科',difficulty:'必考',title:'冠状沟下型尿道下裂：保留包皮',en_title:'Hypospadias: avoid neonatal circumcision',
      stem:'During the neonatal check for a young baby boy, the lead midwife notices that the urethral meatus appears to be opening partway down the ventral aspect of the shaft of the baby’s penis. Closer examination shows a sub-coronal hypospadias. There are no other abnormalities, and the penile length is within normal range.\n\nWhat is the most important piece of information to give the parents regarding this child’s condition?',
      options:[['A','Circumcision is indicated as soon as possible to prevent urinary tract infections as these infants are at increased risk of urinary tract infection'],['B','Circumcision should be avoided because the foreskin is used in the surgical corrective procedure'],['C',"Hypospadias is a relatively common condition but it is unlikely the child's siblings will be affected"],['D','Hypospadias is considered an intersex disorder, so a referral should be made to a paediatrician for further discussion about management'],['E','The corrective management of hypospadias is surgical which is usually performed in the first two weeks after birth']],answer:'B',answerName:'Avoid circumcision: foreskin may be needed for reconstruction',
      key:'新生儿冠状沟下型尿道下裂；询问家长最需要获知的即时事项 → 不要提前环切包皮。',
      image:diagram('Q8 · Hypospadias: preserve foreskin',['Ventral urethral meatus is ectopic','Prepuce can supply skin / graft / tissue cover','DO NOT circumcise before specialist assessment','Paediatric urology evaluation; repair often 6–18 months'],'Teaching diagram · surgical plan is individualised'),
      sections:[
        {heading:'一、为什么保留包皮？',body:'<p>尿道下裂即尿道外口位于阴茎腹侧异常位置。背侧包皮呈帽状（dorsal hood）、腹侧包皮相对不足，有时伴腹侧弯曲。包皮可在部分修复方案中用作皮瓣、移植物或皮肤覆盖材料；术前环切可能限制重建选择。<strong>在儿童泌尿外科评估前，不应常规环切。</strong>并非所有远端尿道下裂修复都一定需要包皮。</p>'},
        {heading:'二、其他选项',body:'<table class="study-table"><tr><th>选项</th><th>解析</th></tr><tr><td>A 尽快环切</td><td>错误；尿道下裂是常规包皮环切的禁忌之一，不能凭此理由预防性环切。</td></tr><tr><td>B 保留包皮 ✓</td><td>新生儿阶段必须及时交代的关键宣教。</td></tr><tr><td>C 兄弟姐妹不会受累</td><td>不准确；存在遗传和家族聚集因素。</td></tr><tr><td>D 一律归为DSD</td><td>错误；单纯远端尿道下裂不等于性发育差异。近端型合并双侧隐睾等情况需要进一步评估。</td></tr><tr><td>E 生后两周修复</td><td>不符合常规；手术若有指征，一般安排在约6–18个月，具体由专科决定。</td></tr></table>'},
        {heading:'三、术式与指南图片',body:`<p>EAU儿科泌尿指南详细介绍远端至近端分型、重建图示及手术年龄。资料：${link('https://uroweb.org/guidelines/paediatric-urology/chapter/hypospadias','EAU：尿道下裂（手术图示）')}；${link('https://uroweb.org/guidelines/paediatric-urology/chapter/phimosis-and-other-abnormalities-of-the-penile-skin','EAU：包皮环切禁忌')}。题干前半段描述“阴茎体中途”与后面的sub-coronal不完全一致，按明确给出的冠状沟下型作答。</p>`}
      ],takeaway:'尿道下裂 → 保留包皮，不提前环切 → 儿童泌尿外科评估。'
    },
    {
      id:9,category:'儿童保护与医学伦理',difficulty:'必考',title:'12岁女孩报告性行为：立即启动儿童保护',en_title:'Sexual activity under 13: safeguarding and disclosure',
      stem:"A 12-year-old high school pupil presents to you in GP with low mood. When you discuss the background of her mood it emerges that she has been bullied for having had sex with a 17-year-old boy in the same school. This only happened once and no alcohol or drugs were involved. She said that she wasn't forced to have sex with him and that 'it was consensual'.\n\nWhat is the most appropriate immediate course of action?",
      options:[['A','You should disclose the situation to the relevant authority'],['B','You must keep this consultation confidential because she consented to the sexual activity'],['C',"You must contact the patient's mother as she is the legal guardian"],['D','You must ask the girl to discuss it with the police because of her age'],['E','You must advise the girl to have the bullying dealt with at school']],answer:'A',answerName:'Disclose to the appropriate safeguarding authority',
      key:'12岁（under 13）＋性行为＋17岁伴侣＋受欺凌、情绪低落；自称同意不能取消保护责任。',
      image:diagram('Q9 · Safeguarding, not secrecy',['Age 12 + sexual activity reported','Explain limits of confidentiality; listen without blaming','Assess immediate safety, bullying and mental health','Share necessary information with safeguarding professionals'],'Concept decision flow · not a real patient image'),
      sections:[
        {heading:'一、为什么是A？法律同意与主观感受不同',body:'<p>这是一道英国GP和儿童保护题。英格兰及威尔士法律下，未满13岁的儿童不能对性行为作出法律上有效的同意。GMC指导要求对涉及13岁以下儿童的性行为通常共享相关信息；如决定不披露，需与指定儿童保护专业人员讨论并记录理由。本题有5岁年龄差、校园欺凌与情绪低落，明显需要儿童保护评估。</p><p>医生应通过恰当途径联系指定儿童保护负责人／儿童社会服务等机构，而非依据女孩说“自愿”就承诺绝对保密。</p>'},
        {heading:'二、逐项排除与实际步骤',body:'<table class="study-table"><tr><th>选项</th><th>判断</th></tr><tr><td>A 披露相关机构 ✓</td><td>启动适当的儿童保护程序和必要信息共享。</td></tr><tr><td>B 严格保密</td><td>保密有保护儿童的例外；“自愿”不改变其年龄。</td></tr><tr><td>C 立即告诉母亲</td><td>应评估是否安全、适合邀请可信赖监护人；不是无条件首先通知。</td></tr><tr><td>D 要女孩自己报警</td><td>不能把保护责任推给儿童，须由专业人员走转介程序。</td></tr><tr><td>E 仅让学校处理欺凌</td><td>反欺凌重要，但不能替代性侵害风险评估。</td></tr></table><p>实际处置：非评判倾听、不承诺绝对保密 → 询问安全和持续接触、评估心理与自伤风险 → 按当地程序联系保护团队 → 根据时间评估性健康服务 → 客观记录并尽量只共享必要信息。</p>'},
        {heading:'三、官方来源与图解',body:`<p>${link('https://www.gmc-uk.org/professional-standards/the-professional-standards/0-18-years/sexual-activity','GMC：未成年人性行为与信息共享')}；${link('https://www.gmc-uk.org/professional-standards/the-professional-standards/0-18-years/principles-of-confidentiality','GMC：保密原则及例外')}。本题不使用未成年人的性相关真实照片，以上为自绘保护流程图。</p>`}
      ],takeaway:'Under 13 + sexual activity → safeguarding referral even if described as consensual. 保护性报告不等于医生直接做出刑事裁判。'
    },
    {
      id:10,category:'儿童传染病',difficulty:'基础',title:'幼儿急疹：热退疹出',en_title:'Roseola infantum / exanthem subitum',
      stem:'A 4-year-old boy presents to the GP with a pink spotted rash on his torso which has now spread to all limbs. On further questioning his mother states that he has had a high grade fever for 3 days prior, and in fact seemed to be getting better before the onset of this rash. He is now afebrile.\n\nOn examination there is a maculopapular red rash over his trunk and limbs. All other examinations are normal. Observations are stable.\n\nWhat is the likely diagnosis?',
      options:[['A','Measles'],['B','Roseola infantum'],['C','Erythema multiforme'],['D','Chicken pox'],['E','Coxsackievirus A6']],answer:'B',answerName:'Roseola infantum',
      key:'3天高热 → 病情好转且退热 → 躯干先出现粉红斑丘疹，扩及四肢。',
      image:diagram('Q10 · Roseola: rash as fever resolves',['Days 1–3(5): abrupt high fever','Rapid defervescence; child feels better','Pink maculopapular rash starts on trunk','Rash spreads and usually resolves rapidly'],'Timing, not rash colour alone, is the diagnostic clue'),
      sections:[
        {heading:'一、最有诊断价值的是时间顺序',body:'<p>幼儿急疹（第六病）主要由HHV-6B引起，部分由HHV-7引起。典型为突发高热约3–5日，<strong>退热时或退热后出现躯干起始的粉红色斑丘疹</strong>，随后可能扩至颈部、面部和四肢，患儿总体状况改善。4岁偏离最常见年龄，但不能推翻极具特征性的热退疹出病程。</p>'},
        {heading:'二、其他选项：比较热与疹的关系',body:'<table class="study-table"><tr><th>疾病</th><th>鉴别特征</th></tr><tr><td>A 麻疹</td><td>发热伴咳嗽、流涕、结膜炎；皮疹常从头面部向下，出疹时通常仍发热。</td></tr><tr><td>B 幼儿急疹 ✓</td><td>热退疹出，先躯干后扩散。</td></tr><tr><td>C 多形红斑</td><td>典型靶形皮损，常见于四肢远端。</td></tr><tr><td>D 水痘</td><td>瘙痒性斑疹、丘疹、水疱、结痂在同一时间并存。</td></tr><tr><td>E 柯萨奇A6</td><td>非典型手足口病可广泛出疹，常有口腔及手足受累，不能仅依广泛皮疹诊断。</td></tr></table>'},
        {heading:'三、图片与安全提示',body:`<p>${link('https://www.nhs.uk/conditions/roseola/','NHS：幼儿急疹真实皮疹照片及病程')}。该页面照片受其来源版权管理，本题库只链接，不复制或冒充授权；上方为自绘时间轴。典型幼儿急疹多自限。若精神差、脱水、持续高热、惊厥或按压不褪色皮疹，及时进一步评估。</p>`}
      ],takeaway:'Roseola = high fever 3–5 days → defervescence → truncal rash；四字记忆：热退疹出。'
    },
    {
      id:11,category:'医学遗传学与血液',difficulty:'必考',title:'A型血友病：患病父亲的儿子遗传风险',en_title:'Haemophilia A: X-linked inheritance from an affected father',
      stem:"A 35-year-old man, known to suffer from haemophilia A (factor VIII deficiency), presents to the GP surgery. His wife is currently 28 weeks pregnant with their first son and has no family history of clotting disorders. The patient is concerned that the new baby could inherit haemophilia A.\n\nWhat is the percentage chance that the patient's son will be affected?",
      options:[['A','0%'],['B','25%'],['C','50%'],['D','100%'],['E','Impossible to calculate']],answer:'A',answerName:'0% (under the standard exam assumption that the mother is not a carrier)',
      key:'父亲患X连锁隐性病；胎儿已知是儿子 → 父亲给儿子Y，不给致病X。妻子无家族史不等于基因检测证实非携带者。',
      image:diagram('Q11 · X-linked inheritance',['Affected father: X*Y × non-carrier mother: XX','SON: Y (father) + X (mother) = XY → unaffected','DAUGHTER: X* (father) + X (mother) = X*X → carrier','Exam answer: 0% for SON assuming mother is non-carrier'],'Important nuance: no family history alone cannot prove non-carrier status'),
      sections:[
        {heading:'一、先看遗传方式，别急着套四格表',body:'<p>血友病A由X染色体上的F8基因致病变异引起，通常呈<strong>X连锁隐性遗传</strong>。父亲基因型X*Y：女儿得到他的X*，儿子得到他的Y。由于题目已确定胎儿为男孩，父亲的致病X不可能通过正常父子遗传传给这个儿子。</p><div class="flow"><span>患病父亲 X*Y ＋ 假定非携带母亲 XX</span><i>↓</i><span>儿子：父亲提供 Y ＋ 母亲提供 X → XY</span><i>↓</i><span>经典遗传题：儿子患病概率 0%</span><i>↓</i><span>女儿：父亲提供 X* → 100%至少为致病变异携带者</span></div>'},
        {heading:'二、为什么不是25%、50%或100%？',body:'<table class="study-table"><tr><th>选项</th><th>关键区别</th></tr><tr><td>A 0% ✓</td><td>在“母亲非携带者”的经典模型下，儿子从父亲只获得Y，因此不会因父方F8变异患病。</td></tr><tr><td>B 25%</td><td>常见于母亲携带者、父亲正常时，将“生出患病男孩”的每次妊娠概率计算为1/4；本题已知是儿子。</td></tr><tr><td>C 50%</td><td>若母亲为携带者，已知男胎则有50%概率从母亲获得变异X。</td></tr><tr><td>D 100%</td><td>在母亲非携带的经典情景，患病父亲所有女儿获得他的变异X，而不是所有儿子患病。</td></tr><tr><td>E 无法计算</td><td>严格咨询时，题目未证实母亲不是携带者，确实无法给出绝对个人风险；但出题意图是父亲不能把X连锁变异传给儿子，因此考试选A。</td></tr></table>'},
        {heading:'三、重要临床限定：无家族史 ≠ 不是携带者',body:'<p>若母亲恰好也是F8变异携带者，已经知道胎儿为男孩，则儿子仍有<strong>50%</strong>机会从母亲获得变异X；血友病也可能出现新发变异。因此考试中的0%应准确理解为“<strong>父亲直接传给儿子的风险是0%，且在默认母亲非携带者的经典家系模型下为0%</strong>”，而非临床上对任何夫妻、任何出生男婴保证绝对零风险。真实遗传咨询可结合母系病史、分子检测与遗传咨询。</p>'},
        {heading:'四、权威来源与遗传图',body:`<p>${link('https://www.cdc.gov/hemophilia/testing/how-hemophilia-is-inherited.html','CDC：血友病遗传图（含患病父亲家系）')}；${link('https://www.genomicseducation.hee.nhs.uk/genotes/knowledge-hub/haemophilia-a/','NHS Genomics：血友病A遗传咨询')}；${link('https://www.ncbi.nlm.nih.gov/sites/books/NBK1404/','GeneReviews：无家族史及新发变异')}。上方为原创遗传示意图。</p>`}
      ],takeaway:'患病父亲传X给女儿、传Y给儿子。考试假定母亲非携带：儿子0%、女儿100%为携带者；无家族史≠排除母亲携带。'
    }
  ];
  for (const item of q) if (!QUESTIONS.some(old=>old.id===item.id)) QUESTIONS.push(item);
  QUESTIONS.sort((a,b)=>a.id-b.id);
  document.title='儿科刷题档案 · 11道题';
  const intro=document.querySelector('.intro p');
  if (intro) intro.textContent='已整理Q1–Q11共11题：英文题目、完整选项、答案、中文解析和图解。Q1–Q5保留原始题截图，Q6–Q11以原创知识示意图代替，医学参考照片提供外部原始来源链接。可检索、收藏、重做与打印。';
  const firstStat=document.querySelector('.stat-row .stat b'); if (firstStat) firstStat.innerHTML='11 <small>道题</small>';
  const footer=document.querySelector('.footer'); if(footer) footer.textContent='资料范围：Q1–Q11，供学习使用。Q6–Q11图像为自制教学图，不是原题截图；图片及指南来源在解析中给出。具体诊疗遵循当地现行规范。';
  if (!window.__q711ImageLabelFixed) {
    window.__q711ImageLabelFixed=true;
    const oldRefresh=refresh;
    window.addEventListener('click',()=>{}, {once:true});
  }
  state.current=11;
  refresh();
  const box=document.getElementById('questions');
  if(box) {
    const relabel=()=>{for(const card of box.querySelectorAll('.q-card')){let n=Number(card.id.replace('question-',''));if(n>=6){let s=card.querySelector('.source-image summary');if(s)s.textContent='🖼 查看原创教学图（非题目原截图）';let image=card.querySelector('.source-image img');if(image)image.alt=`第${n}题原创教学示意图`;}}};
    new MutationObserver(relabel).observe(box,{childList:true});
    relabel();
  }
})();