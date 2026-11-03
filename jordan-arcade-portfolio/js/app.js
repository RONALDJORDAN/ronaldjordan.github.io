/* ==========================================================================
   JORDAN.SYS — Portfolio interactions
   Vanilla JavaScript + anime.js + Vivus
   ========================================================================== */

(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const EMAIL = "ronaldjordan.dev@gmail.com";
  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HAS_ANIME = Boolean(window.anime && typeof window.anime.animate === "function");

  const projects = {
    viko: {
      id: "PROJ_001",
      stage: "STAGE 01",
      rank: "S",
      title: "VIKO COMPRESSOR E CONVERSOR",
      type: "Aplicação desktop",
      year: "2026",
      tier: "DESKTOP // MÍDIA",
      core: "FFMPEG + .NET 8",
      icon: "icon-viko",
      repo: "https://github.com/RONALDJORDAN/Compress",
      repoLabel: "VER NO GITHUB",
      summary:
        "Aplicação desktop para comprimir e converter vídeos, áudios, imagens e PDFs em um fluxo guiado, com processamento assíncrono e histórico de operações.",
      highlights: [
        "Compressão e conversão de vídeo, áudio, imagem e PDF em uma única interface.",
        "Processamento em lote com FFmpeg em background e progresso em tempo real.",
        "Wizard em três etapas, histórico persistente e feedback claro de economia de espaço.",
      ],
      stack: ["C#", ".NET 8", "WPF", "XAML", "FFmpeg", "Ghostscript"],
      metrics: [
        ["FORMATO", "DESKTOP"],
        ["STACK", ".NET 8"],
        ["FOCO", "MÍDIA"],
        ["STATUS", "CONCLUÍDO"],
      ],
      logs: [
        "> load mission/viko",
        "[ok] ffmpeg bridge: online",
        "[ok] batch queue: ready",
        "> output: -72% de tamanho",
      ],
      tags: ["desktop", "midia", "ferramenta"],
    },

    fastcloud: {
      id: "PROJ_002",
      stage: "STAGE 02",
      rank: "A",
      title: "FASTCLOUD // FTP NATIVE",
      type: "Servidor FTP + painel web",
      year: "2026",
      tier: "DESKTOP + WEB // REDE",
      core: "FTP + PWA",
      icon: "icon-fastcloud",
      repo: "https://github.com/RONALDJORDAN/FtpNative",
      repoLabel: "VER NO GITHUB",
      summary:
        "Servidor FTP nativo para Windows com interface desktop, painel web responsivo, QR Code de acesso e instalação como serviço.",
      highlights: [
        "Compartilhamento de pasta na rede local com controle de usuários e permissões.",
        "Painel web mobile com galeria, explorador de arquivos, upload e lixeira restaurável.",
        "Instalação como serviço do Windows, regras de firewall e PWA para celular.",
      ],
      stack: ["C#", ".NET 8", "WPF", "HTTP", "PWA", "Service Worker"],
      metrics: [
        ["FORMATO", "DESKTOP + WEB"],
        ["STACK", ".NET 8"],
        ["FOCO", "REDE"],
        ["STATUS", "ATIVO"],
      ],
      logs: [
        "> mount ftp://local",
        "[ok] web panel: 8080",
        "[ok] pwa manifest: valid",
        "> session: secured",
      ],
      tags: ["desktop", "web", "ferramenta"],
    },

    d2: {
      id: "PROJ_003",
      stage: "STAGE 03",
      rank: "A",
      title: "D2 DOWNLOAD",
      type: "Aplicativo desktop",
      year: "2026",
      tier: "DESKTOP // MÍDIA",
      core: "YT-DLP + WPF",
      icon: "icon-d2",
      repo: "https://github.com/RONALDJORDAN",
      repoLabel: "VER PERFIL",
      summary:
        "Aplicativo Windows para baixar vídeos e áudios com uma interface direta: cole o link, escolha o formato e acompanhe o progresso.",
      highlights: [
        "Fluxo em três passos: link, formato (MP4/MP3) e pasta de destino.",
        "Progresso em tempo real e confirmação visual ao concluir.",
        "Dependências empacotadas para funcionar sem configuração extra.",
      ],
      stack: ["C#", ".NET 8", "WPF", "yt-dlp", "FFmpeg"],
      metrics: [
        ["FORMATO", "DESKTOP"],
        ["STACK", ".NET 8"],
        ["FOCO", "MÍDIA"],
        ["STATUS", "CONCLUÍDO"],
      ],
      logs: [
        "> resolve media url",
        "[ok] yt-dlp: ready",
        "[ok] ffmpeg: ready",
        "> download: complete",
      ],
      tags: ["desktop", "midia"],
    },

    bodas: {
      id: "PROJ_004",
      stage: "STAGE 04",
      rank: "S",
      title: "BODAS DE PAPEL",
      type: "Experiência web",
      year: "2026",
      tier: "WEB // EXPERIÊNCIA",
      core: "REACT + ANIME.JS",
      icon: "icon-bodas",
      repo: "https://github.com/RONALDJORDAN/casamento",
      repoLabel: "VER NO GITHUB",
      summary:
        "Experiência web cinematográfica criada para celebrar um ano de casamento, com narrativa em capítulos, animações e trilha sonora.",
      highlights: [
        "Narrativa em capítulos com envelope interativo, contador e galeria de memórias.",
        "Animações em Canvas 2D, transições 3D e áudio integrado via Web Audio API.",
        "Interface mobile-first com foco em performance e suavidade.",
      ],
      stack: ["React", "Vite", "Anime.js", "Canvas 2D", "Web Audio API"],
      metrics: [
        ["FORMATO", "WEB"],
        ["STACK", "REACT"],
        ["FOCO", "EXPERIÊNCIA"],
        ["STATUS", "CONCLUÍDO"],
      ],
      logs: [
        "> open memory.archive",
        "[ok] canvas 2d: 60fps",
        "[ok] audio context: ready",
        "> chapter 01: loaded",
      ],
      tags: ["web", "experiencia"],
    },

    analise: {
      id: "PROJ_005",
      stage: "STAGE 05",
      rank: "A",
      title: "ANÁLISE DE MÍDIAS REMOVÍVEIS",
      type: "Ferramenta de diagnóstico",
      year: "2026",
      tier: "FERRAMENTA // DIAGNÓSTICO",
      core: "POWERSHELL + C#",
      icon: "icon-analise",
      repo: "https://github.com/RONALDJORDAN/Analise-Midias-Removiveis",
      repoLabel: "VER NO GITHUB",
      summary:
        "Conjunto de scripts e utilitários para testar, diagnosticar e documentar a saúde de mídias removíveis, com relatórios em Markdown, HTML e PDF.",
      highlights: [
        "Testes de escrita, leitura e hash para medir o desempenho real de pendrives e cartões.",
        "Verificações de integridade com chkdsk e geração de parecer por mídia.",
        "Relatórios claros para apoiar decisões de descarte, recuperação ou reutilização.",
      ],
      stack: ["PowerShell", "C#", "Windows", "chkdsk", "SHA-256"],
      metrics: [
        ["FORMATO", "FERRAMENTA"],
        ["STACK", "POWERSHELL"],
        ["FOCO", "DIAGNÓSTICO"],
        ["STATUS", "CONCLUÍDO"],
      ],
      logs: [
        "> scan removable media",
        "[ok] write test: 100mb",
        "[ok] sha256: verified",
        "> report: generated",
      ],
      tags: ["ferramenta", "desktop"],
    },
  };

  let currentProject = "viko";
  let toastTimer = null;

  /* ------------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------------ */

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
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

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      return copied;
    } catch {
      return false;
    }
  }

  function animate(targets, options) {
    if (!HAS_ANIME || REDUCED_MOTION) return null;
    return window.anime.animate(targets, options);
  }

  function removeAnimations(targets) {
    if (!HAS_ANIME) return;
    window.anime.remove(targets);
  }

  /* ------------------------------------------------------------------------
     01. System clock
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
     02. Header, scroll progress and back-to-top
     ------------------------------------------------------------------------ */

  function initScrollUI() {
    const header = $(".site-header");
    const progress = $(".scroll-progress span");
    const toTop = $("#to-top");
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;

      if (header) header.classList.toggle("is-scrolled", scrollTop > 8);
      if (progress) progress.style.transform = `scaleX(${ratio})`;
      if (toTop) toTop.classList.toggle("is-visible", scrollTop > 600);

      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();

    if (toTop) {
      toTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: REDUCED_MOTION ? "auto" : "smooth",
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     03. Mobile navigation
     ------------------------------------------------------------------------ */

  function initMenu() {
    const toggle = $("#menu-toggle");
    const nav = $("#main-nav");
    if (!toggle || !nav) return;

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "MENU";
    };

    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "FECHAR" : "MENU";
    });

    $$("a", nav).forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) close();
    });
  }

  /* ------------------------------------------------------------------------
     04. Active navigation link
     ------------------------------------------------------------------------ */

  function initActiveNav() {
    const links = $$(".main-nav a[data-nav]");
    if (!links.length || !("IntersectionObserver" in window)) return;

    const map = new Map();

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const section = document.querySelector(href);
      if (section) map.set(section, link);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          links.forEach((link) => {
            const active = link === map.get(entry.target);
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    map.forEach((link, section) => observer.observe(section));
  }

  /* ------------------------------------------------------------------------
     04b. Static page navigation
     ------------------------------------------------------------------------ */

  function initStaticNav() {
    const page = document.body.dataset.page;
    if (!page) return;

    const pageLinks = {
      sobre: "sobre.html",
      projetos: "projetos.html",
      laboratorio: "laboratorio.html",
      arsenal: "arsenal.html",
      trajetoria: "trajetoria.html",
      contato: "contato.html",
      curriculo: "curriculo.html",
      projeto: "projetos.html",
    };

    const target = pageLinks[page];
    if (!target) return;

    $$(".main-nav a").forEach((link) => {
      const href = link.getAttribute("href");
      const active = href === target;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  /* ------------------------------------------------------------------------
     05. Reveal on scroll
     ------------------------------------------------------------------------ */

  function observeReveals() {
    const elements = $$(".reveal:not(.is-visible)");
    if (!elements.length) return;

    if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function initReveal() {
    observeReveals();
  }

  /* ------------------------------------------------------------------------
     06. Projects: filters, tabs and dossier
     ------------------------------------------------------------------------ */

  function updateDossier(project, projectId) {
    setText("dossier-id", project.id);
    setText("dossier-tier", project.tier);
    setText("dossier-rank", project.rank);
    setText("dossier-core", project.core);
    setText("dossier-year", project.year);
    setText("dossier-title", project.title);
    setText("dossier-summary", project.summary);

    const artUse = $("#dossier-art-use");
    if (artUse) artUse.setAttribute("href", `#${project.icon}`);

    const metrics = $$(".dossier__metrics .metric b");
    project.metrics.forEach((metric, index) => {
      if (metrics[index]) metrics[index].textContent = metric[1];
    });

    const highlights = $("#dossier-highlights");
    if (highlights) {
      highlights.replaceChildren();
      project.highlights.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        highlights.appendChild(item);
      });
    }

    const stack = $("#dossier-stack");
    if (stack) {
      stack.replaceChildren();
      project.stack.forEach((text) => {
        const chip = document.createElement("span");
        chip.className = "stack-chip";
        chip.textContent = text;
        stack.appendChild(chip);
      });
    }

    const logs = $("#dossier-logs");
    if (logs) {
      logs.replaceChildren();
      project.logs.forEach((text) => {
        const line = document.createElement("p");
        line.textContent = text;
        logs.appendChild(line);
      });
    }

    const link = $("#dossier-link");
    if (link) {
      link.href = project.repo;
      link.textContent = project.repoLabel;
    }

    const mail = $("#dossier-mail");
    if (mail) {
      const subject = encodeURIComponent(`Sobre o projeto: ${project.title}`);
      const body = encodeURIComponent(
        `Olá, Jordan! Vi o projeto ${project.title} no seu portfólio e queria conversar sobre ele.`
      );
      mail.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }

    const pageLink = $("#dossier-page");
    if (pageLink && projectId) {
      pageLink.href = `projeto.html?p=${encodeURIComponent(projectId)}`;
    }
  }

  function selectProject(id, shouldAnimate = true) {
    const project = projects[id];
    if (!project) return;

    const card = $(`.roster-card[data-project="${id}"]`);
    if (!card || card.classList.contains("is-hidden")) return;

    currentProject = id;

    $$(".roster-card").forEach((item) => {
      const selected = item === card;
      item.setAttribute("aria-selected", selected ? "true" : "false");
      item.tabIndex = selected ? 0 : -1;
    });

    const dossier = $("#project-dossier");
    if (dossier) dossier.setAttribute("aria-labelledby", card.id);

    updateDossier(project, id);

    const announcer = $("#project-announcer");
    if (announcer) {
      announcer.textContent = `Projeto selecionado: ${project.title}.`;
    }

    if (shouldAnimate && !REDUCED_MOTION && HAS_ANIME) {
      const panels = $$(".dossier__visual, .dossier__main, .dossier__side");
      removeAnimations(panels);
      animate(panels, {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 360,
        delay: window.anime.stagger(45),
        ease: "outCubic",
      });
    }
  }

  function filterProjects(filter) {
    const cards = $$(".roster-card");
    const visible = [];

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(/\s+/).filter(Boolean);
      const show = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !show);
      if (show) visible.push(card);
    });

    setText("project-count", String(visible.length).padStart(2, "0"));

    const empty = $("#project-empty");
    if (empty) empty.hidden = visible.length !== 0;

    const selected = $('.roster-card[aria-selected="true"]');
    if (!selected || selected.classList.contains("is-hidden")) {
      if (visible[0]) selectProject(visible[0].dataset.project, false);
    }

    if (visible.length) {
      removeAnimations(visible);
      animate(visible, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 320,
        delay: window.anime.stagger(35),
        ease: "outCubic",
      });
    }
  }

  function initProjects() {
    const roster = $(".roster");
    if (!roster) return;

    $$(".roster-card").forEach((card) => {
      card.addEventListener("click", () => {
        selectProject(card.dataset.project);
      });
    });

    roster.addEventListener("keydown", (event) => {
      const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
      if (!keys.includes(event.key)) return;

      const visible = $$(".roster-card:not(.is-hidden)");
      if (!visible.length) return;

      let index = visible.indexOf(document.activeElement);
      if (index === -1) index = visible.indexOf($('.roster-card[aria-selected="true"]'));
      if (index === -1) index = 0;

      let next = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        next = (index + 1) % visible.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        next = (index - 1 + visible.length) % visible.length;
      } else if (event.key === "Home") {
        next = 0;
      } else if (event.key === "End") {
        next = visible.length - 1;
      }

      event.preventDefault();
      visible[next].focus();
      selectProject(visible[next].dataset.project);
    });

    $$(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter || "all";

        $$(".filter-btn").forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });

        filterProjects(filter);
      });
    });
  }

  /* ------------------------------------------------------------------------
     07. Bento flip cards
     ------------------------------------------------------------------------ */

  function initBento() {
    $$(".bento-card").forEach((card) => {
      const toggle = () => {
        const flipped = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", flipped ? "true" : "false");
      };

      card.addEventListener("click", toggle);

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }

        if (event.key === "Escape") {
          card.classList.remove("is-flipped");
          card.setAttribute("aria-pressed", "false");
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     08. Optional chiptune
     ------------------------------------------------------------------------ */

  function initAudio() {
    const button = $("#audio-toggle");
    if (!button) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      button.disabled = true;
      button.textContent = "SOM: N/D";
      return;
    }

    let context = null;
    let master = null;
    let timer = null;
    let step = 0;
    let playing = false;

    const melody = [220.0, 261.63, 329.63, 392.0, 329.63, 261.63, 196.0, 246.94];
    const bass = [110.0, 110.0, 98.0, 98.0, 82.41, 82.41, 98.0, 98.0];
    const stepMs = 180;

    const ensureContext = () => {
      if (!context) {
        context = new AudioContextClass();
        master = context.createGain();
        master.gain.value = 0.035;
        master.connect(context.destination);
      }

      if (context.state === "suspended") {
        context.resume();
      }
    };

    const playTone = (frequency, duration, type, volume, when) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, when);

      gain.gain.setValueAtTime(0.0001, when);
      gain.gain.exponentialRampToValueAtTime(volume, when + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);

      oscillator.connect(gain);
      gain.connect(master);
      oscillator.start(when);
      oscillator.stop(when + duration + 0.02);
    };

    const tick = () => {
      if (!context || !playing) return;

      const now = context.currentTime + 0.03;
      const note = melody[step % melody.length];
      const bassNote = bass[step % bass.length];

      playTone(note, 0.16, "square", 0.16, now);
      if (step % 2 === 0) playTone(bassNote, 0.22, "triangle", 0.22, now);
      if (step % 4 === 2) playTone(note * 2, 0.08, "square", 0.08, now);

      step += 1;
    };

    const start = () => {
      ensureContext();
      playing = true;
      step = 0;
      tick();
      timer = window.setInterval(tick, stepMs);
      button.setAttribute("aria-pressed", "true");
      button.textContent = "SOM: ON";
      button.setAttribute("aria-label", "Desativar som ambiente");
      showToast("Chiptune ativado. Use com moderação.");
    };

    const stop = () => {
      playing = false;
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
      if (context) context.suspend();
      button.setAttribute("aria-pressed", "false");
      button.textContent = "SOM: OFF";
      button.setAttribute("aria-label", "Ativar som ambiente");
      showToast("Chiptune desativado.");
    };

    button.addEventListener("click", () => {
      if (playing) stop();
      else start();
    });
  }

  /* ------------------------------------------------------------------------
     09. Copy to clipboard
     ------------------------------------------------------------------------ */

  function initCopy() {
    $$("[data-copy-email]").forEach((button) => {
      button.addEventListener("click", async () => {
        const copied = await copyText(EMAIL);
        showToast(
          copied
            ? `E-mail copiado: ${EMAIL}`
            : "Não foi possível copiar. Selecione o e-mail manualmente.",
          copied ? "success" : "error"
        );
      });
    });

    const copyProject = $("#dossier-copy");
    if (copyProject) {
      copyProject.addEventListener("click", async () => {
        const project = projects[currentProject];
        if (!project) return;

        const text = [
          `${project.title} — ${project.type} (${project.year})`,
          project.summary,
          `Stack: ${project.stack.join(", ")}`,
          project.repo,
        ].join("\n");

        const copied = await copyText(text);
        showToast(
          copied ? "Resumo do projeto copiado." : "Não foi possível copiar o resumo.",
          copied ? "success" : "error"
        );
      });
    }
  }

  /* ------------------------------------------------------------------------
     10. Contact form
     ------------------------------------------------------------------------ */

  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;

    const status = $("#form-status");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (status) {
        status.classList.remove("is-error");
        status.textContent = "";
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) {
          status.textContent = "Verifique os campos destacados antes de enviar.";
          status.classList.add("is-error");
        }
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const from = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = encodeURIComponent(`[Portfólio] Contato de ${name}`);
      const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${from}\n\n${message}`);
      const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

      if (status) status.textContent = "Abrindo seu aplicativo de e-mail...";
      window.location.href = mailto;
      showToast("Mensagem pronta. Finalize o envio no seu e-mail.");
    });
  }

  /* ------------------------------------------------------------------------
     11. Motion: hero entrance and circuit drawing
     ------------------------------------------------------------------------ */

  function initMotion() {
    if (REDUCED_MOTION) return;

    if (HAS_ANIME) {
      const heroItems = [
        ".hero__copy > .eyebrow",
        ".hero__title",
        ".hero__role",
        ".hero__lead",
        ".hero__terminal",
        ".hero__actions",
        ".hero__stats",
      ];

      animate(heroItems, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 760,
        delay: window.anime.stagger(80, { start: 120 }),
        ease: "outCubic",
      });

      animate(".hero__card-wrap", {
        opacity: [0, 1],
        translateX: [24, 0],
        duration: 900,
        delay: 280,
        ease: "outCubic",
      });
    }

    if (window.Vivus) {
      try {
        new window.Vivus("hero-circuit", {
          type: "delayed",
          duration: 140,
          delay: 40,
          pathTimingFunction: window.Vivus.EASE_OUT,
          animTimingFunction: window.Vivus.EASE,
        });
      } catch {
        /* The decorative circuit is optional. */
      }
    }
  }

  /* ------------------------------------------------------------------------
     12. Footer year
     ------------------------------------------------------------------------ */

  function initYear() {
    setText("year", String(new Date().getFullYear()));
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */

  function init() {
    initClock();
    initScrollUI();
    initMenu();
    initActiveNav();
    initStaticNav();
    initReveal();
    initProjects();
    initBento();
    initAudio();
    initCopy();
    initContactForm();
    initMotion();
    initYear();
    selectProject("viko", false);
  }

  /* Shared surface for page-specific scripts. */
  window.JORDAN = {
    projects,
    email: EMAIL,
    showToast,
    copyText,
    refreshReveal: observeReveals,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
