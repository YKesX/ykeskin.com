(() => {
  'use strict';
  const root = document.documentElement;
  const themeSelect = document.getElementById('theme-select');

  function readTheme() {
    try {
      const stored = localStorage.getItem('theme');
      return stored === 'light' || stored === 'dark' ? stored : 'system';
    } catch (_) {
      return 'system';
    }
  }

  function applyTheme(theme) {
    // CSS follows the operating system whenever there is no explicit override.
    if (theme === 'system') delete root.dataset.theme;
    else root.dataset.theme = theme;
    themeSelect.value = theme;
  }

  applyTheme(readTheme());
  themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    applyTheme(theme);
    try {
      if (theme === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', theme);
    } catch (_) { /* Keep the selection working for this visit. */ }
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme' || event.key === null) applyTheme(readTheme());
  });
  // Animate on entry without hiding content before JavaScript runs.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();
  if ('IntersectionObserver' in window && 'animate' in Element.prototype) {
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        observer.unobserve(entry.target);
        if (reducedMotion.matches) return;
        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 1100, delay: Math.min(index * 110, 330), fill: 'backwards', easing: 'cubic-bezier(.22, .61, .36, 1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.reveal, .cert-list a').forEach((element) => observer.observe(element));
    function cancelAnimations() {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }
    reducedMotion.addEventListener('change', (event) => {
      if (event.matches) cancelAnimations();
    });
    window.addEventListener('beforeprint', cancelAnimations);
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
