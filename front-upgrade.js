(function () {
  'use strict';
  window.__frontUpgrade = window.__frontUpgrade || { version: 1 };
  if (typeof window.Lenis !== 'undefined') {
    window.__frontUpgrade.lenis = window.Lenis;
  }
  if (typeof window.gsap !== 'undefined' && window.gsap.registerPlugin) {
    window.__frontUpgrade.scrollTrigger = true;
  }
})();
