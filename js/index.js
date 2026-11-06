/**
 * Página Principal — carrossel, filtro de serviços e EDUCAST
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------
     1. Carrossel de destaques
  --------------------------------------------------------- */
  const slides = $$('.hero__slide');
  const dotsWrap = $('#hero-dots');
  const prevBtn = $('#hero-prev');
  const nextBtn = $('#hero-next');
  let current = 0;
  let timer = null;
  const INTERVAL = 7000;

  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hero__dot' + (index === 0 ? ' is-active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Ir para o destaque ' + (index + 1));
    dot.setAttribute('aria-selected', String(index === 0));
    dot.addEventListener('click', () => goTo(index, true));
    dotsWrap.appendChild(dot);
  });

  const dots = $$('.hero__dot', dotsWrap);

  function goTo(index, manual) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });

    if (manual) restart();
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function start() {
    stop();
    timer = setInterval(next, INTERVAL);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function restart() {
    start();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1, true));
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1, true));

  const hero = $('.hero');
  if (hero) {
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    hero.addEventListener('focusin', stop);
    hero.addEventListener('focusout', start);
  }

  // Swipe em dispositivos touch
  let touchStartX = 0;
  if (hero) {
    hero.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    hero.addEventListener('touchend', (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) {
        if (delta < 0) goTo(current + 1, true);
        else goTo(current - 1, true);
      }
    }, { passive: true });
  }

  if (slides.length > 1) start();

  /* ---------------------------------------------------------
     2. Filtro de serviços
  --------------------------------------------------------- */
  const filter = $('#services-filter');
  const cards = $$('#services-grid .service-card');
  const empty = $('#services-empty');

  if (filter) {
    filter.addEventListener('input', () => {
      const term = filter.value.trim().toLowerCase();
      let visible = 0;

      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const match = !term || text.includes(term);
        card.hidden = !match;
        if (match) visible++;
      });

      if (empty) empty.hidden = visible > 0;
    });
  }

  /* ---------------------------------------------------------
     3. EDUCAST play/pause simulado
  --------------------------------------------------------- */
  const educastBtn = $('#educast-btn');
  const educastState = $('#educast-state');
  let playing = false;

  if (educastBtn) {
    educastBtn.addEventListener('click', () => {
      playing = !playing;
      const icon = educastBtn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = playing ? 'pause' : 'play_arrow';
      if (educastState) {
        educastState.textContent = playing ? 'Reproduzindo... (32 min)' : 'Ouvir agora (32 min)';
      }
      if (window.SEMED && !playing) {
        window.SEMED.showToast('Reprodução pausada', 'Você pode retomar o episódio quando quiser.', 'info');
      }
    });
  }
})();
