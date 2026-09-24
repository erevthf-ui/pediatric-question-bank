/* Mobile swipe navigation for single-question mode.
   Swipe left -> next question; swipe right -> previous question.
   Does not alter any archived question content. */
(() => {
  'use strict';

  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let tracking = false;

  const MIN_DISTANCE = 55;
  const MAX_DURATION = 900;
  const HORIZONTAL_RATIO = 1.25;

  function isInteractive(target) {
    return !!target.closest('button, a, input, textarea, select, summary, details, [contenteditable="true"]');
  }

  function canSwipe() {
    return typeof state !== 'undefined' &&
      typeof visibleQuestions === 'function' &&
      typeof jump === 'function' &&
      !state.all &&
      !state.bookmarksOnly &&
      !state.search;
  }

  document.addEventListener('touchstart', event => {
    if (!canSwipe() || event.touches.length !== 1 || isInteractive(event.target)) {
      tracking = false;
      return;
    }
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = Date.now();
    tracking = true;
  }, { passive: true });

  document.addEventListener('touchend', event => {
    if (!tracking || !canSwipe() || event.changedTouches.length !== 1) {
      tracking = false;
      return;
    }

    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    const duration = Date.now() - startTime;
    tracking = false;

    if (
      duration > MAX_DURATION ||
      Math.abs(dx) < MIN_DISTANCE ||
      Math.abs(dx) < Math.abs(dy) * HORIZONTAL_RATIO
    ) return;

    const list = visibleQuestions();
    const index = list.findIndex(q => q.id === state.current);
    if (index < 0) return;

    if (dx < 0 && index < list.length - 1) {
      jump(list[index + 1].id);
    } else if (dx > 0 && index > 0) {
      jump(list[index - 1].id);
    }
  }, { passive: true });

  // Small, non-intrusive hint on mobile.
  const addHint = () => {
    if (document.getElementById('swipe-nav-hint')) return;
    const host = document.querySelector('.intro');
    if (!host) return;
    const hint = document.createElement('p');
    hint.id = 'swipe-nav-hint';
    hint.textContent = '📱 手机端可左右滑动切换题目：左滑下一题，右滑上一题。';
    hint.style.marginTop = '8px';
    hint.style.fontSize = '12px';
    hint.style.color = '#6b7f92';
    host.appendChild(hint);
  };

  addHint();
})();
