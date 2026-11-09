/**
 * SEMED São Miguel dos Campos — UI & animações
 * Reveal ao scroll, debounce, estados de carregamento e utilitários de UX
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------
     Debounce reutilizável
     --------------------------------------------------------- */
  function debounce(fn, wait) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }
  window.SEMED = window.SEMED || {};
  window.SEMED.debounce = debounce;

  /* ---------------------------------------------------------
     Reveal ao scroll via IntersectionObserver
     --------------------------------------------------------- */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -70px 0px' }
    );

    $$('.reveal').forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------
     Barra de progresso de leitura (scroll)
     --------------------------------------------------------- */
  function initScrollProgress() {
    const progress = $('.scroll-progress');
    if (!progress) return;

    const onScroll = () => {
      const winHeight = document.documentElement.clientHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrolled = window.scrollY;
      const pct = docHeight > 0 ? scrolled / docHeight : 0;
      progress.style.transform = `scalex(${Math.min(1, Math.max(0, pct))})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------
     Estado de carregamento em botões
     --------------------------------------------------------- */
  function setBtnLoading(btn, loading) {
    if (!btn) return;
    if (loading) {
      btn.classList.add('btn--loading');
      btn.setAttribute('aria-busy', 'true');
      btn.disabled = true;
    } else {
      btn.classList.remove('btn--loading');
      btn.removeAttribute('aria-busy');
      btn.disabled = false;
    }
  }
  window.SEMED.setBtnLoading = setBtnLoading;

  /* ---------------------------------------------------------
     Animação automática de entrada nos cards da home
     --------------------------------------------------------- */
  function autoRevealCards() {
    const groups = [
      { sel: '.service-card', mod: 'reveal' },
      { sel: '.news-card', mod: 'reveal--fade' },
      { sel: '.program-card', mod: 'reveal--zoom' },
      { sel: '.transparency__card', mod: 'reveal--fade' },
    ];
    let index = 0;
    groups.forEach(({ sel, mod }) => {
      $$(sel).forEach((el) => {
        el.classList.add('reveal', mod, `reveal--stagger-${((index % 8) + 1)}`);
        index += 1;
      });
    });
  }

  /* ---------------------------------------------------------
     Inicialização
     --------------------------------------------------------- */
  function init() {
    autoRevealCards();
    initReveal();
    initScrollProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
// Jordan Araujo
