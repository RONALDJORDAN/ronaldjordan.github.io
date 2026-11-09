/* Jordan Araujo */
/**
 * Portal do Servidor — abas, busca, modal e subnavegação
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
     1. Abas de documentos
  --------------------------------------------------------- */
  const tabs = $$('.srv-tab');
  const panels = $$('.srv-panel');

  function activateTab(name) {
    tabs.forEach((tab) => {
      const active = tab.getAttribute('data-tab') === name;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach((panel) => {
      const active = panel.id === 'srv-panel-' + name;
      panel.hidden = !active;
    });

    applySearch();
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.getAttribute('data-tab')));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const current = tabs.indexOf(tab);
      const next = event.key === 'ArrowRight'
        ? (current + 1) % tabs.length
        : (current - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      activateTab(tabs[next].getAttribute('data-tab'));
    });
  });

  /* ---------------------------------------------------------
     2. Busca instantânea por painel
  --------------------------------------------------------- */
  const searchInput = $('#srv-doc-search');

  function applySearch() {
    if (!searchInput) return;
    const term = searchInput.value.trim().toLowerCase();

    panels.forEach((panel) => {
      const items = $$('[data-search]', panel);
      const empty = $('[data-empty]', panel);
      let visible = 0;

      items.forEach((item) => {
        const haystack = (item.getAttribute('data-search') || '') + ' ' + item.textContent.toLowerCase();
        const show = !term || haystack.includes(term);
        item.hidden = !show;
        if (show) visible++;
      });

      if (empty) empty.hidden = visible > 0 || !term;
    });
  }

  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(applySearch, 120);
    });
  }

  const activePanel = $('.srv-panel:not([hidden])');
  if (activePanel) applySearch();

  /* ---------------------------------------------------------
     3. Subnavegação com seção ativa
  --------------------------------------------------------- */
  const subnav = $('#srv-subnav');
  const subLinks = subnav ? $$('a[data-section]', subnav) : [];
  const sections = subLinks
    .map((link) => document.getElementById(link.getAttribute('data-section')))
    .filter(Boolean);

  let activeId = '';

  function setActive(id) {
    if (!id || id === activeId) return;
    activeId = id;
    subLinks.forEach((link) => {
      const isActive = link.getAttribute('data-section') === id;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  let offsets = [];

  function updateOffsets() {
    offsets = sections.map((section) => {
      const margin = parseFloat(getComputedStyle(section).scrollMarginTop);
      return (Number.isFinite(margin) ? margin : 190) + 4;
    });
  }

  function onScroll() {
    if (!sections.length) return;
    let current = sections[0].id;

    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top - (offsets[index] || 194) <= 0) {
        current = section.id;
      }
    });

    setActive(current);
  }

  if (subnav && sections.length) {
    updateOffsets();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      updateOffsets();
      onScroll();
    });
    onScroll();

    subLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setActive(link.getAttribute('data-section'));
      });
    });
  }

  /* ---------------------------------------------------------
     4. Modal de prévia de documento
  --------------------------------------------------------- */
  const modal = $('#srv-modal');
  const modalTitle = $('#srv-modal-title');
  const modalText = $('#srv-modal-text');
  const modalDownload = $('#srv-modal-download');
  const modalClose = $('#srv-modal-close');
  const modalCancel = $('#srv-modal-cancel');
  let lastFocused = null;

  function openModal(title, description, file) {
    if (!modal || !modalTitle) return;
    lastFocused = document.activeElement;
    modalTitle.textContent = title || 'Documento SEMED';
    if (modalText) {
      modalText.textContent = description ||
        'Documento institucional de uso interno e orientação aos servidores da rede municipal de ensino de São Miguel dos Campos - AL.';
    }
    if (modalDownload) {
      modalDownload.setAttribute('data-file', file || (title || 'Documento SEMED') + ' (PDF)');
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  $$('[data-preview]').forEach((button) => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-preview');
      openModal(
        title,
        'Manual técnico revisado pela SEMED para orientar os servidores da rede municipal de ensino. O arquivo completo está disponível para download em formato PDF.',
        title + ' (PDF)'
      );
    });
  });

  $$('[data-journal]').forEach((button) => {
    button.addEventListener('click', () => {
      const edition = button.getAttribute('data-journal');
      openModal(
        'Jornal Comunica SEMED — ' + edition,
        'Leitor digital da edição oficial do Jornal Comunica SEMED. A versão completa em PDF pode ser baixada e distribuída entre os profissionais da rede municipal.',
        'Jornal Comunica SEMED — ' + edition + ' (PDF)'
      );
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  if (modalDownload) {
    modalDownload.addEventListener('click', () => {
      toast('Download iniciado', 'O arquivo institucional está sendo transferido com segurança.', 'success');
      closeModal();
    });
  }
})();
