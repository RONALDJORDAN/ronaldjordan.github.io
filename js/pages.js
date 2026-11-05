/* ==========================================================================
   JORDAN.SYS — Internal page scripts
   Project detail rendering, resume print, copy-link and page motion.
   ========================================================================== */

(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HAS_ANIME = Boolean(window.anime && typeof window.anime.animate === "function");
  const data = window.JORDAN;

  const projectDetails = {
    viko: {
      challenge:
        "Comprimir e converter mídias diferentes sem transformar o processo em uma sequência de ferramentas soltas, comandos complexos e arquivos espalhados.",
      solution:
        "Um wizard de três etapas que unifica vídeo, áudio, imagem e PDF, com fila assíncrona, progresso em tempo real, histórico persistente e feedback claro de economia de espaço.",
      role: "Idealização, arquitetura, interface e desenvolvimento.",
      learnings: [
        ["FILAS ASSÍNCRONAS", "Processos longos precisam de feedback contínuo, cancelamento seguro e estado previsível."],
        ["FFMPEG NA PRÁTICA", "Empacotar binários e montar comandos confiáveis é tão importante quanto a interface."],
        ["CLAREZA NO FLUXO", "Um wizard bem desenhado reduz erro do usuário mais do que validações isoladas."],
      ],
    },
    fastcloud: {
      challenge:
        "Compartilhar arquivos na rede local sem depender de nuvem, mantendo o acesso simples pelo computador e pelo celular.",
      solution:
        "Servidor FTP nativo com interface desktop, painel web responsivo, QR Code de acesso, controle de usuários, permissões e instalação como serviço do Windows.",
      role: "Arquitetura, backend, painel web e empacotamento.",
      learnings: [
        ["LOCAL-FIRST", "A rede local ainda é a opção mais rápida e previsível para muitos fluxos de arquivo."],
        ["MESMO NÚCLEO, DUAS INTERFACES", "Desktop e navegador precisam compartilhar regras sem duplicar lógica."],
        ["SERVIÇO WINDOWS", "Instalação, firewall e ciclo de vida do processo fazem parte do produto."],
      ],
    },
    d2: {
      challenge:
        "Baixar mídia com poucos cliques, sem exigir que o usuário configure dependências, variáveis de ambiente ou comandos.",
      solution:
        "Aplicativo Windows com fluxo link → formato → destino, progresso em tempo real, confirmação visual e dependências empacotadas para funcionar sem configuração extra.",
      role: "Interface, integração com yt-dlp/FFmpeg e empacotamento.",
      learnings: [
        ["INTEGRAÇÃO COM CLI", "Ferramentas de linha de comando exigem parsing, timeout e tratamento de erros cuidadosos."],
        ["FEEDBACK VISUAL", "Progresso e confirmação reduzem a ansiedade em tarefas demoradas."],
        ["DISTRIBUIÇÃO", "Um app só é útil quando abre e funciona sem configuração extra."],
      ],
    },
    bodas: {
      challenge:
        "Transformar uma lembrança afetiva em uma experiência digital com personalidade, sem cair no lugar-comum de uma página estática.",
      solution:
        "Narrativa em capítulos com envelope interativo, contador, galeria de memórias, animações em Canvas 2D, transições 3D e áudio integrado via Web Audio API.",
      role: "Direção criativa, front-end, animações e trilha.",
      learnings: [
        ["NARRATIVA", "Ritmo, expectativa e transições importam tanto quanto a animação em si."],
        ["CANVAS 2D", "Efeitos criativos exigem orçamento de performance e fallback para dispositivos modestos."],
        ["ÁUDIO NO NAVEGADOR", "Web Audio API precisa de gesto do usuário e respeito ao contexto de reprodução."],
      ],
    },
    analise: {
      challenge:
        "Descobrir se uma mídia removível está saudável sem depender de achismo, testes isolados ou conclusões difíceis de comparar.",
      solution:
        "Conjunto de scripts e utilitários para testes de escrita, leitura, hash e integridade, com relatórios em Markdown, HTML e PDF para apoiar decisões de descarte, recuperação ou reutilização.",
      role: "Pesquisa, scripts, automação e documentação.",
      learnings: [
        ["DIAGNÓSTICO", "Medir antes de concluir evita descartar mídia boa ou confiar em mídia ruim."],
        ["AUTOMAÇÃO", "Relatórios padronizados economizam tempo e reduzem erro humano."],
        ["DOCUMENTAÇÃO", "Um parecer claro vale mais do que uma pilha de logs sem contexto."],
      ],
    },
  };

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderProject() {
    if (!data || !data.projects || !$("#project-title")) return;

    const params = new URLSearchParams(window.location.search);
    const requested = String(params.get("p") || "viko").toLowerCase();
    const slug = data.projects[requested] ? requested : "viko";
    const project = data.projects[slug];
    const extra = projectDetails[slug] || projectDetails.viko;

    document.body.dataset.project = slug;
    document.title = `${project.title} — Jordan Ronald`;

    const description = $('meta[name="description"]');
    if (description) description.setAttribute("content", project.summary);

    setText("project-crumb", project.title);
    setText("project-title", project.title);
    setText("project-lead", project.summary);
    setText("project-rank", project.rank);
    setText("project-core", project.core);
    setText("project-visual-meta", `${project.id} // ${project.tier}`);
    setText("project-challenge", extra.challenge);
    setText("project-solution", extra.solution);
    setText("project-role", extra.role);

    const iconUse = $("#project-icon-use");
    if (iconUse) iconUse.setAttribute("href", `#${project.icon}`);

    const meta = $("#project-meta");
    if (meta) {
      meta.replaceChildren();
      [
        [project.year, "badge--cyan"],
        [project.type, "badge--magenta"],
        [`RANK ${project.rank}`, "badge--yellow"],
        [project.metrics[3][1], "badge--lime"],
      ].forEach(([text, className]) => {
        meta.appendChild(createElement("span", `badge ${className}`, text));
      });
    }

    const metrics = $("#project-metrics");
    if (metrics) {
      metrics.replaceChildren();
      project.metrics.forEach(([label, value]) => {
        const item = createElement("div", "metric");
        item.append(createElement("span", "", label), createElement("b", "", value));
        metrics.appendChild(item);
      });
    }

    const highlights = $("#project-highlights");
    if (highlights) {
      highlights.replaceChildren();
      project.highlights.forEach((text) => {
        highlights.appendChild(createElement("li", "", text));
      });
    }

    const stack = $("#project-stack");
    if (stack) {
      stack.replaceChildren();
      project.stack.forEach((text) => {
        stack.appendChild(createElement("span", "stack-chip", text));
      });
    }

    const log = $("#project-log");
    if (log) {
      log.replaceChildren();
      project.logs.forEach((text) => {
        log.appendChild(createElement("p", "", text));
      });
    }

    const facts = $("#project-facts-list");
    if (facts) {
      facts.replaceChildren();
      [
        ["ID", project.id],
        ["ANO", project.year],
        ["TIPO", project.type],
        ["CLASSE", project.tier],
        ["CORE", project.core],
        ["STATUS", project.metrics[3][1]],
        ["PAPEL", extra.role],
      ].forEach(([label, value]) => {
        const row = createElement("div");
        row.append(createElement("dt", "", label), createElement("dd", "", value));
        facts.appendChild(row);
      });
    }

    const learnings = $("#project-learnings");
    if (learnings) {
      learnings.replaceChildren();
      extra.learnings.forEach(([title, text], index) => {
        const card = createElement("article", "project-learning reveal");
        card.style.setProperty("--reveal-delay", `${index * 80}ms`);
        card.append(
          createElement("span", "", `APRENDIZADO 0${index + 1}`),
          createElement("h3", "", title),
          createElement("p", "", text)
        );
        learnings.appendChild(card);
      });
    }

    const github = $("#project-github");
    if (github) {
      github.href = project.repo;
      github.textContent = project.repoLabel;
    }

    const mail = $("#project-mail");
    if (mail) {
      const subject = encodeURIComponent(`Sobre o projeto: ${project.title}`);
      const body = encodeURIComponent(
        `Olá, Jordan! Vi o projeto ${project.title} no seu portfólio e queria conversar sobre ele.`
      );
      mail.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    }

    const nav = $("#project-nav");
    if (nav) {
      nav.replaceChildren();
      Object.entries(data.projects)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .forEach(([key, item]) => {
          const link = createElement("a", "project-nav-card");
          link.href = `projeto.html?p=${key}`;

          const icon = createElement("span", "project-nav-card__icon");
          icon.setAttribute("aria-hidden", "true");
          icon.innerHTML = `<svg viewBox="0 0 32 32" focusable="false"><use href="#${item.icon}"></use></svg>`;

          const copy = createElement("span");
          copy.append(
            createElement("span", "project-nav-card__title", item.title),
            createElement("span", "project-nav-card__type", item.type)
          );

          link.append(icon, copy);
          nav.appendChild(link);
        });
    }

    const jsonld = $("#project-jsonld");
    if (jsonld) {
      jsonld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        dateCreated: project.year,
        keywords: project.stack.join(", "),
        url: window.location.href,
        creator: {
          "@type": "Person",
          name: "Jordan Ronald",
          url: "https://github.com/RONALDJORDAN",
        },
      });
    }

    if (requested !== slug) {
      const fallback = $("#project-fallback");
      if (fallback) fallback.hidden = false;
    }
  }

  function initCopyLink() {
    $$("[data-copy-link]").forEach((button) => {
      button.addEventListener("click", async () => {
        if (!data || typeof data.copyText !== "function") return;
        const copied = await data.copyText(window.location.href);
        if (typeof data.showToast === "function") {
          data.showToast(
            copied ? "Link copiado para a área de transferência." : "Não foi possível copiar o link.",
            copied ? "success" : "error"
          );
        }
      });
    });
  }

  function initPrint() {
    $$("[data-print]").forEach((button) => {
      button.addEventListener("click", () => window.print());
    });
  }

  function initPageMotion() {
    if (REDUCED_MOTION || !HAS_ANIME) return;

    const items = $$(
      ".page-hero__copy > .breadcrumb, .page-hero__copy > .eyebrow, .page-hero__copy > .page-hero__title, .page-hero__copy > .page-hero__lead, .page-hero__copy > .page-hero__actions, .page-hero__copy > .page-hero__stats, .project-hero__copy > .breadcrumb, .project-hero__copy > .eyebrow, .project-hero__copy > .project-hero__title, .project-hero__copy > .project-hero__lead, .project-hero__copy > .project-meta, .project-hero__copy > .project-hero__actions"
    );

    if (items.length) {
      window.anime.remove(items);
      window.anime.animate(items, {
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 640,
        delay: window.anime.stagger(70, { start: 80 }),
        ease: "outCubic",
      });
    }

    const aside = $(".page-hero__aside, .project-hero__aside");
    if (aside) {
      window.anime.remove(aside);
      window.anime.animate(aside, {
        opacity: [0, 1],
        translateX: [20, 0],
        duration: 760,
        delay: 220,
        ease: "outCubic",
      });
    }
  }

  function init() {
    renderProject();
    initCopyLink();
    initPrint();
    initPageMotion();

    if (data && typeof data.refreshReveal === "function") {
      data.refreshReveal();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
