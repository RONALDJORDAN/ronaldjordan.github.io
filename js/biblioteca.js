/* Jordan Araujo */
/**
 * SEMED São Miguel dos Campos — Página Biblioteca Digital
 * Comportamento da página Biblioteca Digital (vanilla JS)
 *
 * Funcionalidade:
 * - Submenu lateral com submódulos (abas)
 * - Clicar em um item do submenu alterna o conteúdo exibido na área principal
 * - Botões de download simulados via common.js
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------
     Alternância de submódulos via submenu lateral
     --------------------------------------------------------- */
  const submenuItems = $$('.bib-submenu-item');
  const submodulos = $$('.bib-submodulo');

  function activateSub(subId) {
    // Ativar item do submenu
    submenuItems.forEach((item) => {
      const isActive = item.getAttribute('data-sub') === subId;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    // Mostrar submódulo correspondente
    submodulos.forEach((modulo) => {
      const isActive = modulo.id === `sub-${subId}`;
      modulo.classList.toggle('is-active', isActive);
      modulo.hidden = !isActive;
      if (isActive) {
        modulo.removeAttribute('hidden');
        modulo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        modulo.setAttribute('hidden', '');
      }
    });
  }

  submenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const subId = item.getAttribute('data-sub');
      if (subId) {
        activateSub(subId);
      }
    });
  });

  /* ---------------------------------------------------------
     Suporte a link direto via hash (ex: biblioteca.html#fundamental1)
     --------------------------------------------------------- */
  const hash = window.location.hash.replace('#', '');
  if (hash && submenuItems.some((i) => i.getAttribute('data-sub') === hash)) {
    activateSub(hash);
  }

})();
