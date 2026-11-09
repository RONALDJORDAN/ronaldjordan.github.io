/**
 * SEMED São Miguel dos Campos — Portal Institucional
 * JavaScript compartilhado por todas as páginas (vanilla JS)
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------
     1. Drawer de navegação mobile
     --------------------------------------------------------- */
  const drawer = $('#mobile-drawer');
  const menuBtn = $('#mobile-menu-btn');
  const closeBtn = $('#mobile-menu-close');

  function openDrawer() {
    if (!drawer) return;
    drawer.hidden = false;
    document.body.style.overflow = 'hidden';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.hidden = true;
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  $$('[data-close-drawer]', drawer || document).forEach((el) =>
    el.addEventListener('click', closeDrawer)
  );
  $$('#mobile-drawer a').forEach((link) =>
    link.addEventListener('click', closeDrawer)
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && !drawer.hidden) closeDrawer();
  });

  /* ---------------------------------------------------------
     2. Header com sombra ao rolar
     --------------------------------------------------------- */
  const header = $('#site-header');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ---------------------------------------------------------
     3. Painel de acessibilidade
     --------------------------------------------------------- */
  const a11yToggle = $('#a11y-toggle');
  const a11yPanel = $('#a11y-panel');
  const fontInc = $('#font-increase');
  const fontDec = $('#font-decrease');
  const fontReset = $('#font-reset');
  const contrastToggle = $('#contrast-toggle');
  const underlineToggle = $('#underline-toggle');

  let fontScale = parseFloat(localStorage.getItem('semed-font-scale') || '1');

  function applyFontScale() {
    fontScale = Math.min(1.3, Math.max(0.85, fontScale));
    document.documentElement.style.fontSize = (fontScale * 100) + '%';
    localStorage.setItem('semed-font-scale', String(fontScale));
  }

  if (fontScale !== 1) applyFontScale();

  function setPanel(open) {
    if (!a11yPanel || !a11yToggle) return;
    a11yPanel.hidden = !open;
    a11yToggle.setAttribute('aria-expanded', String(open));
  }

  if (a11yToggle) {
    a11yToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setPanel(a11yPanel.hidden);
    });
  }

  document.addEventListener('click', (e) => {
    if (!a11yPanel || a11yPanel.hidden) return;
    if (!a11yPanel.contains(e.target) && e.target !== a11yToggle && !a11yToggle.contains(e.target)) {
      setPanel(false);
    }
  });

  if (fontInc) fontInc.addEventListener('click', () => { fontScale += 0.05; applyFontScale(); });
  if (fontDec) fontDec.addEventListener('click', () => { fontScale -= 0.05; applyFontScale(); });
  if (fontReset) fontReset.addEventListener('click', () => { fontScale = 1; applyFontScale(); });

  function setPressed(btn, state) {
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(state));
    btn.textContent = state ? 'Desativar' : 'Ativar';
  }

  const contrastOn = localStorage.getItem('semed-contrast') === '1';
  const underlineOn = localStorage.getItem('semed-underline') === '1';

  document.body.classList.toggle('high-contrast', contrastOn);
  document.body.classList.toggle('links-underlined', underlineOn);
  setPressed(contrastToggle, contrastOn);
  setPressed(underlineToggle, underlineOn);

  if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
      const on = !document.body.classList.contains('high-contrast');
      document.body.classList.toggle('high-contrast', on);
      localStorage.setItem('semed-contrast', on ? '1' : '0');
      setPressed(contrastToggle, on);
    });
  }

  if (underlineToggle) {
    underlineToggle.addEventListener('click', () => {
      const on = !document.body.classList.contains('links-underlined');
      document.body.classList.toggle('links-underlined', on);
      localStorage.setItem('semed-underline', on ? '1' : '0');
      setPressed(underlineToggle, on);
    });
  }

  /* ---------------------------------------------------------
     4. Busca do cabeçalho + atalho Ctrl/Cmd + K
     --------------------------------------------------------- */
  const headerSearch = $('#site-search');
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (headerSearch) headerSearch.focus();
    }
  });

  /* ---------------------------------------------------------
     5. Toast reutilizável
     --------------------------------------------------------- */
  function showToast(title, message, type) {
    type = type || 'success';
    let toast = $('#toast-notification');

    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'toast hidden';
      toast.setAttribute('aria-live', 'polite');
      toast.innerHTML =
        '<div class="toast-content">' +
        '<span class="toast-icon">check_circle</span>' +
        '<div class="toast-body">' +
        '<span class="toast-title"></span>' +
        '<span class="toast-msg"></span>' +
        '</div>' +
        '<button class="toast-close" aria-label="Fechar notificação"><span class="material-symbols-outlined">close</span></button>' +
        '</div>';
      document.body.appendChild(toast);
    }

    const icon = $('.toast-icon', toast);
    $('.toast-title', toast).textContent = title || 'Aviso';
    $('.toast-msg', toast).textContent = message || '';

    const icons = { success: 'check_circle', error: 'error', warning: 'warning', info: 'info' };
    icon.textContent = icons[type] || 'info';
    icon.className = 'toast-icon ' + (type || 'success');

    toast.classList.remove('hidden');
    requestAnimationFrame(() => toast.classList.add('show'));

    clearTimeout(toast._timer);
    toast._timer = setTimeout(hideToast, 5200);
    $('.toast-close', toast).onclick = hideToast;
  }

  function hideToast() {
    const toast = $('#toast-notification');
    if (!toast) return;
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 320);
  }

  window.SEMED = window.SEMED || {};
  window.SEMED.showToast = showToast;

  /* ---------------------------------------------------------
     6. Formulários com feedback
     --------------------------------------------------------- */
  $$('form[data-toast]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.innerHTML : '';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined icon-sm">hourglass_top</span> Processando...';
      }
      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = original;
        }
        showToast('Enviado com sucesso!', 'Sua mensagem foi registrada. A equipe da SEMED responderá em breve.', 'success');
        form.reset();
      }, 1100);
    });
  });

  /* ---------------------------------------------------------
     7. Botões de download simulados
     --------------------------------------------------------- */
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-download');
    if (btn) {
      e.preventDefault();
      const file = btn.getAttribute('data-file') || 'documento.pdf';
      showToast('Download iniciado', file + ' está sendo transferido.', 'success');
    }
  });

  /* ---------------------------------------------------------
     8. Dropdown de submódulos (Institucional)
     Abre por hover, clique na seta ou foco de teclado.
  --------------------------------------------------------- */
  $$('.main-nav__dropdown').forEach((dropdown) => {
    const trigger = dropdown.querySelector('.main-nav__dropdown-trigger');
    const menu = dropdown.querySelector('.main-nav__dropdown__menu');

    if (!trigger || !menu) return;

    function setOpen(open) {
      dropdown.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      setOpen(!expanded);
      trigger.focus();
    });

    // Abre o submenu com a seta para baixo e leva o foco ao primeiro item
    trigger.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown') return;
      e.preventDefault();
      setOpen(true);
      const firstItem = menu.querySelector('a');
      if (firstItem) firstItem.focus();
    });

    // Abre ao passar o cursor sobre o item "Institucional" ou sobre o submenu
    dropdown.addEventListener('mouseenter', () => setOpen(true));
    dropdown.addEventListener('mouseleave', () => {
      if (!dropdown.contains(document.activeElement)) setOpen(false);
    });

    // Mantém aberto enquanto o foco estiver dentro do dropdown.
    // Só abre no foco por teclado (focus-visible), para não conflitar com o clique/toque.
    dropdown.addEventListener('focusin', (e) => {
      if (e.target !== trigger && !menu.contains(e.target)) return;

      let keyboardFocus = true;
      try {
        keyboardFocus = e.target.matches(':focus-visible');
      } catch (err) {
        keyboardFocus = true;
      }

      if (keyboardFocus || menu.contains(e.target)) setOpen(true);
    });

    dropdown.addEventListener('focusout', (e) => {
      if (!dropdown.contains(e.relatedTarget)) setOpen(false);
    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) setOpen(false);
    });

    // Fecha com ESC e devolve o foco para a seta
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        trigger.focus();
      }
    });

    // Navegação entre os submenus com as setas do teclado
    menu.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

      const items = Array.from(menu.querySelectorAll('a'));
      const index = items.indexOf(document.activeElement);
      if (index === -1) return;

      e.preventDefault();
      const nextIndex = e.key === 'ArrowDown'
        ? (index + 1) % items.length
        : (index - 1 + items.length) % items.length;

      items[nextIndex].focus();
    });
  });

  /* ---------------------------------------------------------
     8b. Dropdown no mobile drawer - toggle
     --------------------------------------------------------- */
  $$('.mobile-drawer__dropdown').forEach((dropdown) => {
    const trigger = dropdown.querySelector('.mobile-drawer__dropdown-trigger');
    const menu = dropdown.querySelector('.mobile-drawer__dropdown__menu');

    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = dropdown.getAttribute('aria-expanded') === 'true';
      dropdown.setAttribute('aria-expanded', String(!expanded));
      menu.setAttribute('aria-hidden', String(expanded));
      trigger.focus();
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
      }
    });
  });

  /* ---------------------------------------------------------
     9. Ano dinâmico no rodapé (se marcado)
     --------------------------------------------------------- */
  $$('[data-current-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
