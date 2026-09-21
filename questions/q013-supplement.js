/* Q13 supplementary notes from the user's answer/explanation screenshot.
   This file is additive: the original q013.js and Q1–Q12 are untouched. */
(() => {
  'use strict';
  if (typeof QUESTIONS === 'undefined' || typeof refresh !== 'function') return;
  const q = QUESTIONS.find(item => item.id === 13);
  if (!q || !Array.isArray(q.sections)) return;
  if (q.sections.some(section => section.heading === '六、原站解析补充：七条临床判别标准')) return;

  q.sections.push({
    heading: '六、原站解析补充：七条临床判别标准',
    body: `<p>原站把 growing pains 称作 <strong>benign idiopathic nocturnal limb pains of childhood</strong>（儿童良性特发性夜间肢体痛）。这里的 <em>growing pains</em> 是沿用的名称，不意味着疼痛是生长本身直接造成的；病因仍未明确。通常见于<strong>3–12岁</strong>，男孩和女孩均可发生。题目所给的6岁年龄符合常见范围。</p>
    <table class="study-table"><thead><tr><th>原站七项特征</th><th>实际问诊／查体怎么用</th></tr></thead><tbody>
    <tr><td>① 晨起不痛</td><td>疼痛发生在傍晚或夜间、可痛醒，但<strong>早晨醒来应缓解／消失</strong>；持续晨痛是重新评估信号。</td></tr>
    <tr><td>② 不跛行</td><td>让孩子现场走路、跑几步；若跛行或拒绝负重，不能直接诊断生长痛。</td></tr>
    <tr><td>③ 活动不受限</td><td>白天正常上学、玩耍、运动；若疼痛在活动中出现、影响日常功能，需要寻找其他病因。</td></tr>
    <tr><td>④ 全身情况好</td><td>无发热、消瘦、明显疲乏等全身症状。</td></tr>
    <tr><td>⑤ 体格检查正常</td><td>没有固定骨压痛、关节肿胀／积液、发红、活动受限或局灶异常。</td></tr>
    <tr><td>⑥ 运动发育里程碑正常</td><td>既往运动发育和步态符合年龄；发育倒退或新出现的运动障碍不符合典型模式。</td></tr>
    <tr><td>⑦ 间歇发作，剧烈活动后较明显</td><td>可反复数月，跑跳较多的日子夜间更易发作；<strong>不应理解为运动当时疼痛或活动受限</strong>。</td></tr>
    </tbody></table>
    <p><strong>本题已知：</strong>双侧夜间胫部／踝周疼痛、一般情况良好、检查正常。<strong>本题未明确提供：</strong>晨起是否消失、是否跛行、活动能力和运动发育史；临床应补问和检查，不能把典型特征全部当作题干事实。</p>`
  });
  q.sections.push({
    heading: '七、把“夜间痛”与警讯区分开：问诊及家长宣教',
    body: `<div class="flow"><span>双侧、间歇性傍晚／夜间下肢痛</span><i>↓</i><span>核实晨起恢复、白天活动正常、无跛行、发育正常</span><i>↓</i><span>全身状态好，骨关节与步态检查无异常</span><i>↓</i><span>典型时考虑良性夜间肢体痛：解释、按摩、热敷，必要时适龄镇痛</span></div>
    <p><strong>红旗：</strong>单侧或某一点持续疼痛、越来越重、晨起仍痛、真正的关节内痛、跛行／不能负重、关节肿胀或发热，以及苍白、异常瘀斑、体重下降等全身异常。出现时需进一步评估；发热伴不能负重尤其要及时排除骨关节感染。典型病史且查体正常者通常无须常规抽血或影像检查。</p>
    <p><strong>英文词汇：</strong><em>misnomer</em>＝名不副实的名称；<em>idiopathic</em>＝特发性；<em>nocturnal</em>＝夜间的；<em>motor milestones</em>＝运动发育里程碑；<em>vigorous activity</em>＝较剧烈活动。</p>
    <p><strong>来源：</strong>用户上传的原题答案解析截图；<a href="https://www.nhs.uk/conditions/growing-pains/" target="_blank" rel="noopener noreferrer">NHS Growing pains（典型症状与复诊警讯）</a>；<a href="https://www.clinicalguidelines.scot.nhs.uk/rhc-for-health-professionals/guidelines/primary-care-referral-guidelines/medical-paediatric-pre-referral-guidance/nocturnal-leg-pain-advice-for-referrers/" target="_blank" rel="noopener noreferrer">NHS GGC Nocturnal Leg Pain（间歇性、活动后加重与红旗）</a>。</p>`
  });
  refresh();
})();