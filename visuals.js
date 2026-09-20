/* Pediatric question bank: image enhancements; external photos retain source attribution. */
(() => {
  'use strict';
  const commons = 'https://commons.wikimedia.org/wiki/';
  const data = {
    1: {note: ['下肢力线：先 O，后直，再 X','出生～2岁：膝内翻常见 → 约2岁：逐渐变直 → 3～4岁：膝外翻明显 → 7～8岁：接近成人力线。'], photos: [['O形腿与X形腿对照','Genu_valgum_and_Genu_Varum.jpg','Wikimedia Commons · Dr. Vijaya chandar']]},
    2: {note: ['佝偻病 X 线速记','Cupping（杯口）＋ Fraying（毛刷）＋ Splaying（喇叭口）＋ Growth plate widening（生长板增宽）。题目中的 joint widening 不是精确术语。'], photos: [['佝偻病腕部 X 线','RicketsXray.jpg','Wikimedia Commons · Frank Gaillard']]},
    3: {note: ['猩红热：咽痛＋砂纸疹＋草莓舌','初期白草莓舌 → 数日后红草莓舌；皮肤皱褶处可出现 Pastia lines。'], photos: [['猩红热皮疹','Scarlet_fever_rash.jpg','Wikimedia Commons · Whispyhistory'],['白草莓舌','Strep_throat_with_white_strawberry_tongue.jpg','Wikimedia Commons · Whispyhistory'],['Pastia lines（帕氏线）',"Pastia%27s_sign_1.jpg",'Wikimedia Commons · Danvasilis']]},
    4: {note: ['麻疹并发症时间轴','急性期：肺炎、中耳炎、急性脑炎；远期：SSPE 通常在初次感染多年后出现。'], photos: [['麻疹皮疹','Measles_rash_PHIL_4497_lores.jpg','Wikimedia Commons · CDC'],['Koplik spots（柯氏斑）','Koplik_spots%2C_measles_6111_lores.jpg','Wikimedia Commons · CDC']]},
    5: {note: ['生理性膝内翻：复习图卡','13个月、双侧对称、刚开始行走、无危险信号 → 解释和随访。2～4岁与膝内翻改善相关；7～8岁与膝外翻改善相关。'], photos: [['膝内翻 / 膝外翻示意','Genu_valgum_and_Genu_Varum.jpg','Wikimedia Commons · Dr. Vijaya chandar']]}
  };
  const css = document.createElement('style');
  css.textContent = '.visual-enhancements{border-top:1px solid #e2eaf0;margin-top:24px;padding-top:22px}.visual-enhancements h3{font-size:18px;margin:0 0 9px;color:#203b57}.visual-note{padding:17px 19px;border-radius:13px;background:linear-gradient(110deg,#eaf3ff,#f8fbff);border:1px solid #d8e6f6;margin:13px 0 18px}.visual-note strong{display:block;color:#225ca2;font-size:15px}.visual-note p{font-size:13px;line-height:1.9;margin:7px 0 0}.visual-photo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:13px}.visual-photo{margin:0;border:1px solid #dfe7ee;border-radius:13px;overflow:hidden;background:#fafcff}.visual-photo img{display:block;width:100%;height:210px;object-fit:contain;background:#fff;padding:5px}.visual-photo figcaption{padding:11px 12px;font-size:12px;line-height:1.6}.visual-photo figcaption strong{display:block;color:#254c72}.visual-photo figcaption a{display:block;font-size:11px;margin-top:4px}.visual-notice{font-size:11px;color:#6b7e8f;line-height:1.65;margin:13px 0 0}@media(max-width:760px){.visual-photo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.visual-photo img{height:150px}}@media(max-width:420px){.visual-photo-grid{grid-template-columns:1fr}.visual-photo img{height:210px}}';
  document.head.appendChild(css);
  function mount() {
    for (const card of document.querySelectorAll('.q-card')) {
      const id = Number(card.id.replace('question-', ''));
      const item = data[id], answer = card.querySelector('.explanation');
      if (!item || !answer || answer.querySelector('.visual-enhancements')) continue;
      const section = document.createElement('section'); section.className = 'visual-enhancements';
      const heading = document.createElement('h3'); heading.textContent = '🖼 解析配图 · 图文复习'; section.append(heading);
      const note = document.createElement('div'); note.className = 'visual-note';
      const label = document.createElement('strong'); label.textContent = item.note[0];
      const description = document.createElement('p'); description.textContent = item.note[1];
      note.append(label, description); section.append(note);
      const gallery = document.createElement('div'); gallery.className = 'visual-photo-grid';
      for (const [name, filename, credit] of item.photos) {
        const fig = document.createElement('figure'); fig.className = 'visual-photo';
        const img = document.createElement('img'); img.alt = name; img.loading = 'lazy';
        img.src = commons + 'Special:FilePath/' + filename;
        img.addEventListener('error', () => {img.style.display = 'none';});
        const caption = document.createElement('figcaption');
        const title = document.createElement('strong'); title.textContent = name;
        const source = document.createElement('a'); source.href = commons + 'File:' + filename; source.target = '_blank'; source.rel = 'noopener noreferrer'; source.textContent = '查看原图与授权信息 · ' + credit;
        caption.append(title, source); fig.append(img, caption); gallery.append(fig);
      }
      section.append(gallery);
      const notice = document.createElement('p'); notice.className = 'visual-notice'; notice.textContent = '临床图片为同主题公开图库参考图，不是聊天中自动检索图片的原件；需联网加载。原题截图仍可在每题下方单独查看。';
      section.append(notice);
      const takeaway = answer.querySelector('.takeaway');
      if (takeaway) takeaway.before(section); else answer.append(section);
    }
  }
  const holder = document.getElementById('questions');
  if (holder) { new MutationObserver(mount).observe(holder, {childList:true}); mount(); }
})();