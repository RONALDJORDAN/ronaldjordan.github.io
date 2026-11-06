# Skill: Padrão de Página SEMED — Header, Footer e Estrutura

Esta skill define o padrão obrigatório de menu superior (header), footer e estrutura base para **todas as páginas atuais e futuras** do Portal Institucional SEMED — São Miguel dos Campos - AL.

---

## 1. Visão Geral

O portal é um site estático em **HTML, CSS e JavaScript puros**, sem frameworks. Cada página possui:

- Próprio arquivo HTML na raiz de `portal_semed/`
- Próprio CSS em `css/<pagina>.css`
- Próprio JS em `js/<pagina>.js` (opcional, se houver comportamento específico)
- CSS compartilhado: `css/base.css` (design system, header, footer, acessibilidade)
- JS compartilhado: `js/common.js` (drawer, acessibilidade, busca, toasts, downloads)

---

## 2. Estrutura Obrigatória do HTML

Todo arquivo HTML deve seguir esta ordem exata de blocos:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Título | SEMED São Miguel dos Campos - AL</title>
  <meta name="description" content="Descrição institucional..." />
  <link rel="icon" type="image/png" href="assets/images/brasao.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
  <link rel="stylesheet" href="css/base.css" />
  <link rel="stylesheet" href="css/<pagina>.css" />
</head>
<body>

  <!-- 1. Skip link -->
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

  <!-- 2. HEADER PADRÃO (ver seção 3) -->
  <header class="gov-header" id="site-header"> ... </header>

  <!-- 3. MOBILE DRAWER PADRÃO (ver seção 4) -->
  <div class="mobile-drawer" id="mobile-drawer" hidden> ... </div>

  <!-- 4. MAIN com id="conteudo" -->
  <main id="conteudo">
    <!-- Conteúdo específico da página -->
  </main>

  <!-- 5. FOOTER PADRÃO (ver seção 5) -->
  <footer class="site-footer"> ... </footer>

  <!-- 6. Toast (opcional, já injetado pelo common.js) -->
  <div class="toast hidden" id="toast-notification" aria-live="polite" aria-atomic="true"> ... </div>

  <!-- 7. Scripts -->
  <script src="js/common.js"></script>
  <script src="js/<pagina>.js"></script>
</body>
</html>
```

---

## 3. Header Padrão (copiar integralmente)

O header é composto por três partes: `gov-topbar`, `header-main` e `main-nav`. Não alterar classes, IDs ou estrutura.

### 3.1 Gov Topbar

```html
<div class="gov-topbar">
  <div class="container gov-topbar__inner">
    <div class="gov-topbar__left">
      <a class="gov-brand" href="index.html" aria-label="Governo Municipal de São Miguel dos Campos">
        <img class="gov-brand__crest" src="assets/images/brasil_logo.png" alt="" />
        <span>BRASIL<small>Governo Municipal</small></span>
      </a>
      <nav class="gov-links" aria-label="Links institucionais">
        <a href="lgpd.html">Acesso à Informação</a>
        <a href="noticias.html">Comunica BR</a>
        <a href="documentos.html">Órgãos do Governo</a>
      </nav>
    </div>
    <div class="gov-topbar__right">
      <div class="gov-social" aria-label="Redes sociais">
        <a href="#" aria-label="Instagram"><span class="material-symbols-outlined">photo_camera</span></a>
        <a href="#" aria-label="Facebook"><span class="material-symbols-outlined">public</span></a>
        <a href="#" aria-label="YouTube"><span class="material-symbols-outlined">play_circle</span></a>
      </div>
      <div class="a11y-wrap">
        <button class="a11y-toggle" id="a11y-toggle" aria-expanded="false" aria-controls="a11y-panel">
          <span class="material-symbols-outlined icon-sm">accessibility_new</span>
          Acessibilidade
        </button>
        <div class="a11y-panel" id="a11y-panel" hidden>
          <h2>Recursos de acessibilidade</h2>
          <div class="a11y-row">
            <span>Tamanho do texto</span>
            <div class="a11y-buttons">
              <button type="button" id="font-decrease" aria-label="Diminuir texto">A−</button>
              <button type="button" id="font-reset" aria-label="Texto normal">A</button>
              <button type="button" id="font-increase" aria-label="Aumentar texto">A+</button>
            </div>
          </div>
          <div class="a11y-row">
            <span>Alto contraste</span>
            <div class="a11y-buttons">
              <button type="button" id="contrast-toggle" aria-pressed="false">Ativar</button>
            </div>
          </div>
          <div class="a11y-row">
            <span>Links sublinhados</span>
            <div class="a11y-buttons">
              <button type="button" id="underline-toggle" aria-pressed="false">Ativar</button>
            </div>
          </div>
        </div>
      </div>
      <a href="index.html#mapa">Mapa do site</a>
    </div>
  </div>
</div>
```

### 3.2 Header Main

```html
<div class="header-main">
  <div class="container header-main__inner">
    <a class="brand brand--logo" href="index.html" aria-label="SEMED - Página inicial">
      <img class="brand__logo" src="assets/images/semed_logo.png" alt="SEMED - Secretaria Municipal de Educação" />
    </a>

    <form class="header-search" action="documentos.html" method="get" role="search">
      <span class="material-symbols-outlined search-icon">search</span>
      <label class="sr-only" for="site-search">Buscar no portal</label>
      <input type="search" id="site-search" name="q" placeholder="Buscar escolas, editais, documentos..." autocomplete="off" />
      <kbd>Ctrl K</kbd>
    </form>

    <div class="header-actions">
      <a href="servidor.html" class="btn btn--primary">
        <span class="material-symbols-outlined icon-sm">account_circle</span>
        Portal do Servidor
      </a>
      <button class="menu-toggle" id="mobile-menu-btn" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="mobile-drawer">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </div>
</div>
```

### 3.3 Main Navigation

O módulo **Institucional** é um link real que leva para `institucional.html`, com um dropdown separado para os submódulos:

```html
<nav class="main-nav" aria-label="Navegação principal">
  <div class="container main-nav__inner">
    <a href="index.html" class="main-nav__link">Início</a>
    <a href="noticias.html" class="main-nav__link">Notícias</a>
    <a href="institucional/institucional.html" class="main-nav__link">Institucional</a>
    <div class="main-nav__dropdown" aria-expanded="false" aria-haspopup="true">
      <button class="main-nav__dropdown-trigger" aria-label="Submódulos Institucionais" type="button">
        <span class="material-symbols-outlined" style="font-size:0.7rem">arrow_drop_down</span>
      </button>
      <div class="main-nav__dropdown__menu" aria-hidden="true">
        <a href="institucional/institucional.html" class="main-nav__dropdown__item">Institucional</a>
        <a href="institucional/quem-somos.html" class="main-nav__dropdown__item">Quem Somos</a>
        <a href="institucional/galeria-funcionarios.html" class="main-nav__dropdown__item">Galeria de Funcionários</a>
        <a href="institucional/contatos.html" class="main-nav__dropdown__item">Contatos</a>
        <a href="institucional/biblioteca.html" class="main-nav__dropdown__item">Biblioteca Digital</a>
      </div>
    </div>
    <a href="index.html#programas" class="main-nav__link">Educação</a>
    <a href="index.html#servicos" class="main-nav__link">Estudante</a>
    <a href="index.html#escola" class="main-nav__link">Escola</a>
    <a href="documentos.html" class="main-nav__link">Documentos e Editais</a>
    <a href="lgpd.html" class="main-nav__link">LGPD &amp; Transparência</a>
    <a href="servidor.html" class="main-nav__link">Servidor</a>
    <a href="noticias.html#avisos" class="main-nav__link">Avisos</a>
  </div>
</nav>
```

> **Regras importantes:**
> - O texto **"Institucional"** é um link real (`<a href="...">`) que leva para a página institucional. **Não** abre dropdown.
> - O **botão trigger** (seta `arrow_drop_down`) é que abre/fecha o dropdown dos submódulos.
> - No desktop, o dropdown também abre por `:hover`.
> - Na página corrente, adicionar `is-active` / `aria-current="page"` ao link Institucional e ao item ativo dentro do dropdown.

---

## 4. Mobile Drawer Padrão (copiar integralmente)

```html
<div class="mobile-drawer" id="mobile-drawer" hidden>
  <div class="mobile-drawer__overlay" data-close-drawer></div>
  <aside class="mobile-drawer__panel" aria-label="Menu de navegação móvel">
    <div class="mobile-drawer__head">
      <a class="brand brand--logo" href="index.html" aria-label="SEMED - Página inicial">
        <img class="brand__logo" src="assets/images/semed_logo.png" alt="SEMED - Secretaria Municipal de Educação" />
      </a>
      <button class="mobile-drawer__close" id="mobile-menu-close" aria-label="Fechar menu">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <nav class="mobile-drawer__nav" aria-label="Menu de navegação móvel">
      <a href="index.html"><span class="material-symbols-outlined">home</span>Início</a>
      <a href="noticias.html"><span class="material-symbols-outlined">newspaper</span>Notícias</a>
      <a href="institucional.html"><span class="material-symbols-outlined">verified_user</span>Institucional</a>
      <a href="index.html#programas"><span class="material-symbols-outlined">auto_stories</span>Educação</a>
      <a href="index.html#servicos"><span class="material-symbols-outlined">backpack</span>Estudante</a>
      <a href="index.html#escola"><span class="material-symbols-outlined">school</span>Escola</a>
      <a href="documentos.html"><span class="material-symbols-outlined">folder_managed</span>Documentos e Editais</a>
      <a href="lgpd.html"><span class="material-symbols-outlined">shield_person</span>LGPD &amp; Transparência</a>
      <a href="servidor.html"><span class="material-symbols-outlined">account_circle</span>Servidor</a>
      <a href="noticias.html#avisos"><span class="material-symbols-outlined">campaign</span>Avisos</a>
    </nav>
    <div class="mobile-drawer__footer">
      <a href="servidor.html" class="btn btn--primary btn--block">
        <span class="material-symbols-outlined icon-sm">login</span>
        Acessar Portal do Servidor
      </a>
    </div>
  </aside>
</div>
```

> **Regra do link ativo no drawer:** na página corrente, adicionar `aria-current="page"` ao link correspondente no drawer mobile.

---

## 5. Footer Padrão (copiar integralmente)

```html
<footer class="site-footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      <a class="brand" href="index.html">
        <img class="brand__crest" src="assets/images/brasao.png" alt="" />
        <span class="brand__text">
          <strong>SEMED</strong>
          <small>Secretaria Municipal de Educação<br />São Miguel dos Campos - AL</small>
        </span>
      </a>
      <p>Promovendo uma educação pública, inclusiva e transformadora, valorizando os profissionais do magistério e ampliando as oportunidades de aprendizagem para crianças, jovens e adultos miguelenses.</p>
      <div class="footer__social">
        <a href="#" aria-label="Instagram"><span class="material-symbols-outlined">photo_camera</span></a>
        <a href="#" aria-label="Facebook"><span class="material-symbols-outlined">public</span></a>
        <a href="#" aria-label="YouTube"><span class="material-symbols-outlined">play_circle</span></a>
        <a href="#" aria-label="WhatsApp"><span class="material-symbols-outlined">chat</span></a>
      </div>
    </div>

    <div class="footer__col">
      <h3>Ensino &amp; Ofertas</h3>
      <ul>
        <li><a href="index.html#programas">Educação Infantil</a></li>
        <li><a href="index.html#programas">Ensino Fundamental I</a></li>
        <li><a href="index.html#programas">Ensino Fundamental II</a></li>
        <li><a href="index.html#programas">Educação de Jovens e Adultos</a></li>
        <li><a href="index.html#programas">Educação Especial &amp; Inclusão</a></li>
        <li><a href="index.html#programas">Programa Escola 10</a></li>
        <li><a href="index.html#programas">IDEB</a></li>
        <li><a href="index.html#programas">Grêmios Estudantis</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h3>Transparência</h3>
      <ul>
        <li><a href="lgpd.html">Serviço de Informação ao Cidadão (e-SIC)</a></li>
        <li><a href="lgpd.html">Portal da Transparência</a></li>
        <li><a href="lgpd.html">Ouvidoria Municipal</a></li>
        <li><a href="documentos.html">Editais &amp; Licitações</a></li>
        <li><a href="documentos.html">Prestação de Contas</a></li>
        <li><a href="servidor.html">Contracheque</a></li>
        <li><a href="lgpd.html">LGPD &amp; Privacidade</a></li>
        <li><a href="documentos.html">Legislação</a></li>
      </ul>
    </div>

    <div class="footer__col footer__contact">
      <h3>Sede &amp; Contato</h3>
      <p>
        <span class="material-symbols-outlined">place</span>
        <span>Rua Deputado José Medeiros, s/n, Centro<br />São Miguel dos Campos - AL<br />CEP 57240-000</span>
      </p>
      <p>
        <span class="material-symbols-outlined">schedule</span>
        <span>Segunda a sexta, das 07h30 às 13h30</span>
      </p>
      <p>
        <span class="material-symbols-outlined">phone</span>
        <span>(82) 3271-1234 | (82) 3271-1250</span>
      </p>
      <p>
        <span class="material-symbols-outlined">mail</span>
        <span>semed@saomigueldoscampos.al.gov.br</span>
      </p>
      <a class="footer__access-btn" href="lgpd.html">
        <span class="material-symbols-outlined icon-sm">accessibility_new</span>
        Acessibilidade Presencial e Digital
      </a>
    </div>
  </div>

  <div class="footer__institutional">
    <div class="container footer__institutional-inner">
      <a class="footer__semed-logo" href="index.html" aria-label="SEMED - Página inicial">
        <img src="assets/images/semed_logo_branca.png" alt="SEMED - Secretaria Municipal de Educação de São Miguel dos Campos" />
      </a>
      <div class="footer__gov-logos" aria-label="Governos parceiros">
        <figure class="footer__gov-logo">
          <img src="assets/images/brasil_logo.png" alt="Bandeira do Brasil" />
          <figcaption>Governo Federal</figcaption>
        </figure>
        <figure class="footer__gov-logo">
          <img src="assets/images/bandeira-alagoas.png" alt="Bandeira do Estado de Alagoas" />
          <figcaption>Governo de Alagoas</figcaption>
        </figure>
      </div>
    </div>
  </div>

  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <p>© 2026 SEMED — Secretaria Municipal de Educação de São Miguel dos Campos - AL. Todos os direitos reservados.</p>
      <nav class="footer__bottom-links" aria-label="Links legais">
        <a href="#">Portal Fale.BR</a><span>|</span>
        <a href="#">Termos de Uso</a><span>|</span>
        <a href="lgpd.html">Política de Privacidade</a><span>|</span>
        <a href="index.html#mapa">Mapa do site</a>
      </nav>
    </div>
  </div>
</footer>
```

---

## 6. Regras para Caminhos (Assets)

- **Imagens, CSS, JS:** usar caminhos relativos sem barra inicial: `css/base.css`, `js/common.js`, `assets/images/...`
- **Exceção `404.html`:** conforme documentado no `README.md`, a `404.html` pode usar caminhos absolutos com barra inicial (`/css/...`, `/index.html`, etc.) porque pode ser servida em qualquer endereço inexistente.
- Nunca usar caminhos absolutos em páginas normais, exceto a `404.html`.

---

## 7. Regras para Links de Navegação

| Módulo | Destino | Aplica em |
|---|---|---|
| Início | `index.html` | Todas |
| Notícias | `noticias.html` | Todas |
| Institucional (dropdown) | `institucional.html` + submódulos | Todas |
| └─ Quem Somos | `quem-somos.html` | Submenu Institucional |
| └─ Galeria de Funcionários | `galeria-funcionarios.html` | Submenu Institucional |
| └─ Contatos | `contatos.html` | Submenu Institucional |
| └─ Biblioteca Digital | `biblioteca.html` | Submenu Institucional |
| Educação | `index.html#programas` | Todas |
| Estudante | `index.html#servicos` | Todas |
| Escola | `index.html#escola` | Todas |
| Documentos e Editais | `documentos.html` | Todas |
| LGPD & Transparência | `lgpd.html` | Todas |
| Servidor | `servidor.html` | Todas |
| Avisos | `noticias.html#avisos` | Todas |

---

## 8. Checklist Antes de Criar uma Nova Página

- [ ] Criar `nova-pagina.html` na raiz de `portal_semed/`
- [ ] Copiar `<head>` completo da skill (incluindo `base.css` e CSS próprio)
- [ ] Copiar header padrão integralmente (seções 3.1–3.3)
- [ ] Marcar o link da página corrente com `is-active` / `aria-current="page"`
- [ ] Copiar mobile drawer padrão integralmente (seção 4)
- [ ] Marcar o link da página corrente com `aria-current="page"` no drawer
- [ ] Criar `<main id="conteudo">` com o conteúdo específico
- [ ] Copiar footer padrão integralmente (seção 5)
- [ ] Adicionar `<div class="toast hidden" id="toast-notification">...</div>` antes dos scripts
- [ ] Incluir `<script src="js/common.js"></script>` e `<script src="js/nova-pagina.js"></script>`
- [ ] Criar `css/nova-pagina.css` (mesmo que vazio ou com estilos específicos)
- [ ] Criar `js/nova-pagina.js` (opcional, se houver comportamento específico)
- [ ] Verificar que todas as imagens usam `assets/images/...` (caminho relativo)
- [ ] Verificar que todos os links internos seguem a tabela da seção 7

---

## 9. Exemplo de Página Pronta

Consulte `institucional.html` como referência de uma página completa seguindo este padrão, incluindo hero institucional, seções de conteúdo, footer e scripts.
