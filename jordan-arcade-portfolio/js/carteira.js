// ==========================================================================
// JORDAN.SYS — Carteira de Programador
// Interações da página carteira: copiar ID, toggle foto/sprite, validação
// ==========================================================================

(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const EMAIL = "ronaldjordan.dev@gmail.com";
  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HAS_ANIME = Boolean(window.anime && typeof window.anime.animate === "function");
  const HAS_MOTION = Boolean(window.Motion);

  // Dados da carteira
  const CARTEIRA = {
    id: "JR-2026",
    photo: "assets/profile.jpg",
    avatarSprite: "assets/pixel-avatar.svg",
    name: "JORDAN RONALD",
    role: "ENGENHEIRO DE SOFTWARE // DEVOPS",
    stack: ["C#", ".NET 8", "WPF", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Node.js", "PowerShell", "FFmpeg", "Git"],
    metrics: [
      ["PIPELINE", "92"],
      ["AUTOMACAO", "78"],
      ["ENTREGA", "88"],
      ["CONFIANCA", "95"]
    ]
  };

  let showPhoto = true;

  /* ------------------------------------------------------------------------
     01. Copiar ID
     ------------------------------------------------------------------------ */

  async function copyId() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CARTEIRA.id);
        showToast(`ID copiado: ${CARTEIRA.id}`);
        return true;
      }

      // Fallback para navegadores antigos
      const textarea = document.createElement("textarea");
      textarea.value = CARTEIRA.id;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      showToast(copied ? `ID copiado: ${CARTEIRA.id}` : "Não foi possível copiar o ID.");
      return copied;
    } catch {
      showToast("Não foi possível copiar o ID. Tente novamente.", "error");
      return false;
    }
  }

  function showToast(message, type = "success") {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.toggle("is-error", type === "error");
    toast.classList.add("is-visible");

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3800);
  }

  /* ------------------------------------------------------------------------
     02. Toggle Foto ↔ Sprite
     ------------------------------------------------------------------------ */

  function togglePhoto() {
    showPhoto = !showPhoto;

    const playerPhoto = $("#player-photo");
    const playerAvatar = $("#player-avatar");

    if (showPhoto) {
      // Mostrar foto real, esconder avatar pixel
      if (playerPhoto) playerPhoto.style.display = "block";
      if (playerAvatar) playerAvatar.style.display = "none";
      // Atualizar texto do botão
      const toggleBtn = $("[data-toggle-photo]");
      if (toggleBtn) toggleBtn.textContent = "TOGGLE FOTO 🖼️";
    } else {
      // Mostrar avatar pixel, esconder foto real
      if (playerPhoto) playerPhoto.style.display = "none";
      if (playerAvatar) playerAvatar.style.display = "block";
      // Atualizar texto do botão
      const toggleBtn = $("[data-toggle-photo]");
      if (toggleBtn) toggleBtn.textContent = "TOGGLE FOTO 📸";
    }

    // Animação GSAP/Motion
    if (!REDUCED_MOTION && HAS_ANIME) {
      const elements = [playerPhoto, playerAvatar];
      anime.remove(elements);
      anime(elements, {
        opacity: [showPhoto ? 1 : 0, showPhoto ? 0 : 1],
        duration: 300,
        easing: "outCubic"
      });
    }
  }

  /* ------------------------------------------------------------------------
     03. Validar ID
     ------------------------------------------------------------------------ */

  function validateId(inputValue) {
    const idRegex = /^JR-\d{4}$/;
    const statusDiv = $("#validation-status");

    if (idRegex.test(inputValue)) {
      if (statusDiv) {
        statusDiv.textContent = "VÁLIDO";
        statusDiv.className = "validation-status validation-status--valid";
      }
      showToast(`ID válido: ${inputValue}`);
      // Copiar automaticamente ID válido
      copyId();
      return true;
    } else {
      if (statusDiv) {
        statusDiv.textContent = "INVÁLIDO";
        statusDiv.className = "validation-status validation-status--invalid";
      }
      showToast("ID inválido. O formato esperado é JR-XXXX (ex: JR-2026).", "error");
      return false;
    }
  }

  /* ------------------------------------------------------------------------
     04. Inicialização
     ------------------------------------------------------------------------ */

  function init() {
    // Event: Copiar ID
    const copyIdBtn = $("[data-copy-id]");
    if (copyIdBtn) {
      copyIdBtn.addEventListener("click", () => copyId());
    }

    // Event: Toggle Foto/Sprite
    const togglePhotoBtn = $("[data-toggle-photo]");
    if (togglePhotoBtn) {
      togglePhotoBtn.addEventListener("click", togglePhoto);
    }

    // Event: Validar ID
    const validateBtn = $("[data-validate-id]");
    const idInput = $("#id-input");
    if (validateBtn && idInput) {
      validateBtn.addEventListener("click", () => validateId(idInput.value));
      idInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") validateId(idInput.value);
      });
    }

    // Inicializar clock do header
    initClock();

    // Animações hero entrance
    if (!REDUCED_MOTION && HAS_ANIME) {
      const heroItems = [
        ".hero__copy > .eyebrow",
        ".hero__title",
        ".hero__role",
        ".hero__lead",
        ".hero__terminal",
        ".hero__actions",
        ".hero__stats"
      ];

      anime.remove(heroItems);
      anime(heroItems, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 760,
        delay: anime.stagger(80, { start: 120 }),
        easing: "outCubic"
      });
    }

    if (window.Vivus) {
      try {
        new window.Vivus("hero-circuit", {
          type: "delayed",
          duration: 140,
          delay: 40,
          pathTimingFunction: window.Vivus.EASE_OUT,
          animTimingFunction: window.Vivus.EASE
        });
      } catch {
        /* Opcional: circuito decorativo */
      }
    }
  }

  /* ------------------------------------------------------------------------
     05. Clock do header
     ------------------------------------------------------------------------ */

  function initClock() {
    const clock = $("#system-clock");
    if (!clock) return;

    let formatter;
    try {
      formatter = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Sao_Paulo",
      });
    } catch {
      formatter = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    }

    const update = () => {
      clock.textContent = formatter.format(new Date());
    };

    update();
    window.setInterval(update, 1000);
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Shared surface for page-specific scripts.
  window.JORDAN = {
    copyId,
    togglePhoto,
    validateId,
    refreshReveal: observeReveals,
  };
})();