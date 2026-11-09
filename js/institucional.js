/* Jordan Araujo */
/**
 * SEMED São Miguel dos Campos — Página Institucional
 * Comportamento específico da página institucional (vanilla JS)
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);

  /* ---------------------------------------------------------
     Formulário de contato da página institucional
     --------------------------------------------------------- */
  const form = $('#inst-contact-form') || $('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.innerHTML : '';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined icon-sm">hourglass_top</span> Enviando...';
      }
      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = original;
        }
        if (window.SEMED && window.SEMED.showToast) {
          window.SEMED.showToast('Mensagem enviada!', 'A equipe da SEMED responderá em até 5 dias úteis.', 'success');
        }
        form.reset();
      }, 1100);
    });
  }

})();
