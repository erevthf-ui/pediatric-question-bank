/* Incremental question loader: archived question files remain untouched; supplements can be appended separately. */
(() => {
  'use strict';
  const loadScript = (path) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = './' + path;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Cannot load question module: ' + path));
    document.body.appendChild(script);
  });
  (async () => {
    try {
      const response = await fetch('./data/catalog.json', {cache: 'no-store'});
      if (!response.ok) throw new Error('Catalog HTTP ' + response.status);
      const catalog = await response.json();
      if (!Array.isArray(catalog.modules)) throw new Error('Invalid question catalog');
      const seen = new Set();
      for (const path of catalog.modules) {
        if (typeof path !== 'string' || !/^questions\/q\d{3,4}(?:-supplement)?\.js$/.test(path)) throw new Error('Invalid module path');
        if (seen.has(path)) throw new Error('Duplicate module path: ' + path);
        seen.add(path);
        await loadScript(path);
      }
      if (typeof QUESTIONS !== 'undefined' && typeof refresh === 'function') {
        QUESTIONS.sort((a, b) => a.id - b.id);
        const total = QUESTIONS.length;
        document.title = '儿科刷题档案 · ' + total + '道题';
        const stat = document.querySelector('.stat-row .stat b');
        if (stat) stat.innerHTML = total + ' <small>道题</small>';
        const intro = document.querySelector('.intro p');
        if (intro) intro.textContent = '当前收录 Q1–Q' + total + '，按题号保留英文原题、选项、答案及中文解析。旧题归档不覆盖，新题逐题追加；可检索、收藏与打印。';
        refresh();
      }
    } catch (error) {
      console.error('题库增量加载失败；已归档题目不受影响：', error);
    }
  })();
})();
