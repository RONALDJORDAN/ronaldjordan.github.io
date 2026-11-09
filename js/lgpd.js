/* Jordan Araujo */
/**
 * Página LGPD & Transparência — subnavegação, FAQ, formulário do titular
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
     1. Subnavegação com seção ativa
  --------------------------------------------------------- */
  const subnav = $('#lgpd-subnav');
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
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
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
        const id = link.getAttribute('data-section');
        setActive(id);
        history.replaceState(null, '', '#' + id);
      });
    });
  }

  /* ---------------------------------------------------------
     2. Acordeão de perguntas frequentes
  --------------------------------------------------------- */
  const faqButtons = $$('.lgpd-faq__question');

  faqButtons.forEach((button) => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      faqButtons.forEach((other) => {
        if (other === button) return;
        const otherAnswer = document.getElementById(other.getAttribute('aria-controls'));
        other.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.hidden = true;
      });

      button.setAttribute('aria-expanded', String(!isOpen));
      if (answer) answer.hidden = isOpen;
    });
  });

  /* ---------------------------------------------------------
     3. Formulário de requerimento do titular
  --------------------------------------------------------- */
  const form = $('#lgpd-request-form');
  const success = $('#lgpd-success');
  const protocol = $('#lgpd-protocol');

  function generateProtocol() {
    const year = new Date().getFullYear();
    const serial = String(Math.floor(10000 + Math.random() * 89999));
    return 'LGPD-' + year + '-' + serial;
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const original = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<span class="material-symbols-outlined icon-sm">hourglass_top</span> Protocolando...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = original;
        }

        const code = generateProtocol();
        if (protocol) {
          protocol.textContent =
            'Protocolo nº ' + code +
            ' gerado. A resposta oficial será enviada em até 15 dias úteis para o e-mail informado.';
        }

        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        form.reset();
        toast(
          'Requerimento protocolado',
          'Guarde o protocolo ' + code + ' para acompanhar sua solicitação.',
          'success'
        );
      }, 1200);
    });
  }

  /* ---------------------------------------------------------
     4. Rolagem suave para âncoras internas
  --------------------------------------------------------- */
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);

      if (id === '#dpo') setActive('dpo');
    });
  });
})();
