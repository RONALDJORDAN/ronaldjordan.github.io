/**
 * Página de Notícias — carrossel de destaques, filtros, ordenação e compartilhamento
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const toast = (title, msg, type) => {
    if (window.SEMED && window.SEMED.showToast) {
      window.SEMED.showToast(title, msg, type || 'success');
    }
  };

  /* ---------------------------------------------------------
     1. Carrossel de destaques (15 segundos + barra de progresso)
  --------------------------------------------------------- */
  const carousel = $('#news-carousel');
  const slides = $$('.news-carousel__slide');
  const dots = $$('.news-carousel__dot');
  const prevBtn = $('#news-prev');
  const nextBtn = $('#news-next');
  const progress = $('#news-progress');

  const INTERVAL = 15000;
  let current = 0;
  let elapsed = 0;
  let lastTick = 0;
  let rafId = null;
  let paused = false;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderProgress(value) {
    if (progress) progress.style.width = Math.min(100, Math.max(0, value)) + '%';
  }

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

    elapsed = 0;
    lastTick = performance.now();
    renderProgress(0);

    if (manual) toast('Destaque ' + (current + 1), 'Notícia em destaque selecionada.', 'info');
  }

  function tick(now) {
    if (!paused) {
      elapsed += now - lastTick;
      renderProgress((elapsed / INTERVAL) * 100);
      if (elapsed >= INTERVAL) goTo(current + 1);
    }
    lastTick = now;
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (reduceMotion || slides.length < 2) return;
    paused = false;
    lastTick = performance.now();
    if (rafId === null) rafId = requestAnimationFrame(tick);
  }

  function stop() {
    paused = true;
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  if (slides.length) {
    renderProgress(0);
    start();

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1, true));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1, true));

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goTo(index, true));
    });

    if (carousel) {
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
      carousel.addEventListener('focusin', stop);
      carousel.addEventListener('focusout', start);

      let touchX = 0;
      carousel.addEventListener('touchstart', (e) => {
        touchX = e.changedTouches[0].clientX;
      }, { passive: true });
      carousel.addEventListener('touchend', (e) => {
        const delta = e.changedTouches[0].clientX - touchX;
        if (Math.abs(delta) > 55) {
          goTo(current + (delta < 0 ? 1 : -1), true);
        }
      }, { passive: true });
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  }

  /* ---------------------------------------------------------
     2. Filtros: categoria + busca + ordenação
  --------------------------------------------------------- */
  const list = $('#news-list');
  const items = list ? $$('.news-item', list) : [];
  const categoryButtons = $$('.category-pill');
  const searchInput = $('#news-search');
  const sortSelect = $('#news-sort');
  const empty = $('#news-empty');
  const paginationInfo = $('.news-pagination > span');
  const pagination = $('.pagination');

  let activeCategory = 'todas';

  function applyFilters() {
    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let visible = 0;

    items.forEach((item) => {
      const category = item.getAttribute('data-category') || '';
      const matchesCategory = activeCategory === 'todas' || category === activeCategory;
      const matchesTerm = !term || item.textContent.toLowerCase().includes(term);
      const show = matchesCategory && matchesTerm;

      item.hidden = !show;
      if (show) visible++;
    });

    if (empty) empty.hidden = visible > 0;
    if (pagination) pagination.hidden = visible === 0;

    if (paginationInfo) {
      if (visible === 0) {
        paginationInfo.innerHTML = 'Nenhuma notícia corresponde aos filtros';
      } else {
        paginationInfo.innerHTML =
          'Mostrando <strong>1 – ' + visible + '</strong> de <strong>48</strong> notícias publicadas';
      }
    }
  }

  function applySort() {
    if (!list) return;
    const mode = sortSelect ? sortSelect.value : 'recentes';

    const sorted = items.slice().sort((a, b) => {
      if (mode === 'antigas') {
        return a.getAttribute('data-date').localeCompare(b.getAttribute('data-date'));
      }
      if (mode === 'relevantes') {
        return Number(b.getAttribute('data-views')) - Number(a.getAttribute('data-views'));
      }
      return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date'));
    });

    sorted.forEach((item) => list.appendChild(item));
  }

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.getAttribute('data-category') || 'todas';

      categoryButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });

      applyFilters();
    });
  });

  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(applyFilters, 160);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      applySort();
      applyFilters();
      toast('Ordenação aplicada', 'A lista foi reorganizada conforme sua escolha.', 'info');
    });
  }

  applyFilters();

  /* ---------------------------------------------------------
     3. Compartilhar notícia
  --------------------------------------------------------- */
  async function shareItem(title, button) {
    const url = window.location.href.split('#')[0];

    if (navigator.share) {
      try {
        await navigator.share({ title: title, text: title + ' — SEMED São Miguel dos Campos', url: url });
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(title + ' — ' + url);
      toast('Link copiado', 'O endereço da notícia foi copiado para a área de transferência.', 'success');
    } catch (err) {
      toast('Compartilhar', title, 'info');
    }

    if (button) {
      button.classList.add('is-copied');
      setTimeout(() => button.classList.remove('is-copied'), 1600);
    }
  }

  $$('.share-btn').forEach((button) => {
    button.addEventListener('click', () => {
      shareItem(button.getAttribute('data-title') || document.title, button);
    });
  });

  /* ---------------------------------------------------------
     4. Paginação (navegação visual)
  --------------------------------------------------------- */
  $$('.pagination__page, .pagination__btn').forEach((button) => {
    if (button.disabled) return;
    button.addEventListener('click', () => {
      if (button.classList.contains('pagination__btn')) {
        const isNext = button.getAttribute('aria-label') === 'Próxima página';
        const pages = $$('.pagination__page');
        const active = pages.findIndex((page) => page.classList.contains('is-active'));
        const target = pages[Math.min(pages.length - 1, Math.max(0, active + (isNext ? 1 : -1)))];
        if (target && target !== pages[active]) target.click();
        return;
      }

      $$('.pagination__page').forEach((page) => {
        page.classList.toggle('is-active', page === button);
        page.removeAttribute('aria-current');
      });
      button.setAttribute('aria-current', 'page');

      toast('Página ' + button.textContent.trim(), 'Navegação de notícias atualizada.', 'info');

      const main = $('.news-main');
      if (main) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
