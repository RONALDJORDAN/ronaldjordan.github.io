# Identidade Visual — Portal Institucional SEMED

**Secretaria Municipal de Educação de São Miguel dos Campos — Alagoas**
Documento de referência do design system do portal. Extraído diretamente de `css/base.css`, dos CSS de página, do HTML de todas as páginas e dos arquivos de marca em `assets/images/`.

- **Conceito:** *Modern Civic Minimalism* — a sobriedade do padrão gov.br combinada com a linguagem de componentes do Material 3.
- **Stack:** HTML, CSS e JavaScript puros (sem frameworks), site estático.
- **Idioma:** Português do Brasil.
- **Última revisão:** novembro de 2026.
- **Escopo:** 20 páginas HTML (raiz, `institucional/`, `for-education/`, `for-index/`).

---

## 1. Princípios da identidade

| Princípio | Como aparece no portal |
|---|---|
| **Verde como assinatura** | Verde profundo (`#00664f`) em navegação, rodapé e heros com texto branco; verde claro (`#68b45c`) em CTAs, ícones e destaques; lima (`#bacf12`) apenas como acento da marca. |
| **Clareza cívica** | Muito branco, hierarquia tipográfica forte, kickers em caixa alta, cartões com borda fina e sombra discreta. Nada de efeitos pesados. |
| **Acessibilidade primeiro** | Skip link, foco visível, painel de acessibilidade (fonte, alto contraste, links sublinhados), respeito a `prefers-reduced-motion`. |
| **Consistência de navegação** | Header governamental idêntico em todas as páginas (topbar + marca + busca + menu verde + drawer mobile) e rodapé institucional único. |
| **Institucional, não publicitário** | Fotos reais da rede, linguagem informativa, badges e microcopy com dados oficiais. |

---

## 2. Marca

### 2.1 Arquivos oficiais

| Arquivo | Uso | Dimensões |
|---|---|---|
| `assets/images/semed_logo.png` | Logo principal (wordmark escuro) — header e drawer | 3913 × 472 px |
| `assets/images/semed_logo_branca.png` | Logo monocromático branco — rodapé sobre verde escuro | 3913 × 472 px |
| `assets/images/brasao.png` | Brasão/crest — favicon e bloco de marca do rodapé | 92 × 92 px |
| `assets/images/brasil_logo.png` | Bandeira do Brasil — topbar e rodapé | 250 × 175 px |
| `assets/images/bandeira-alagoas.png` | Bandeira de Alagoas — rodapé | 330 × 221 px |
| `assets/images/favicon.svg` | Ícone vetorial alternativo (não referenciado nas páginas) | 32 × 32 px |

### 2.2 Cores oficiais da marca

Extraídas por amostragem do arquivo `semed_logo.png`:

| Elemento | Hex | Token |
|---|---|---|
| Verde profundo (primeiro ponto / institucional) | `#00664F` | `--brand-dark` |
| Verde médio (segundo ponto) | `#66B75F` | `--brand-mid` |
| Verde-lima (terceiro ponto) | `#BACF12` | `--brand-lime` |
| Wordmark | `#1F1A24` | `--brand-ink` |

### 2.3 Regras de aplicação

- **Header:** logo colorido, altura fixa de `2rem` (`1.625rem` no mobile).
- **Drawer mobile:** logo colorido, altura `1.5rem`.
- **Rodapé:** logo branco com largura de `13rem` (`11.5rem` no mobile).
- **Área de respiro:** mantenha ao menos a altura dos três pontos de distância entre a logo e outros elementos.
- **Não fazer:** recolorir a logo, aplicar sombra/contorno, distorcer proporção, usar a versão escura sobre fundo verde escuro ou a versão branca sobre fundo claro.
- **Favicon:** `brasao.png` (92 px). Recomendação futura: gerar um PNG real a partir do arquivo (o atual é um JPEG com extensão `.png`) e/ou usar o `favicon.svg` como ícone moderno.

---

## 3. Paleta de cores

### 3.1 Marca e primárias

| Token | Hex | Uso |
|---|---|---|
| `--brand` | `#68B45C` | Cor de assinatura; botões primários, links ativos, ícones |
| `--brand-dark` | `#00664F` | Barra de navegação, rodapé, heros escuros |
| `--brand-mid` | `#66B75F` | Acento da marca (ponto do logo) |
| `--brand-lime` | `#BACF12` | Acento pontual (ponto do logo); nunca em texto corrido |
| `--brand-ink` | `#1F1A24` | Wordmark / quase-preto da marca |
| `--primary` | `#68B45C` | Ações primárias e estados ativos |
| `--primary-ink` | `#2F6B2F` | Texto e ícones sobre fundo claro (contraste 6.4:1) |
| `--primary-container` | `#4A8A45` | Hover de botão primário, faixas de gradiente |
| `--primary-dark` | `#004838` | Parada escura de gradientes |
| `--on-primary` | `#0B2B20` | Texto sobre `--primary` |
| `--primary-fixed` | `#E2F3DD` | Fundos suaves de chips/ícones e item ativo |
| `--primary-fixed-dim` | `#B9DFB0` | Variação de apoio |
| `--on-primary-fixed` | `#102E12` | Texto sobre `--primary-fixed` |
| `--on-primary-fixed-variant` | `#2F5F2C` | Texto secundário sobre `--primary-fixed` |

### 3.2 Secundárias e terciárias

| Token | Hex | Uso |
|---|---|---|
| `--secondary` | `#4A8A45` | Apoio em gradientes e ícones |
| `--secondary-container` | `#68B45C` | Fundo de ícones de destaque |
| `--on-secondary` | `#0B2B20` | Texto sobre secundária |
| `--on-secondary-container` | `#0B2B20` | Ícone sobre `--secondary-container` |
| `--tertiary` | `#6F7C00` | Rótulos de status ("Exercício", "Conselho") |
| `--tertiary-fixed` | `#F0F6C2` | Fundo de badges terciários |
| `--on-tertiary-fixed` | `#1C2200` | Texto sobre terciário |

### 3.3 Superfícies

| Token | Hex | Uso |
|---|---|---|
| `--surface` | `#EFF5F0` | Fundo padrão da página |
| `--surface-canvas` | `#E8F1EA` | Seções alternadas (`.section--canvas`) |
| `--surface-field` | `#F2F7F3` | Fundo de campos de formulário e busca |
| `--surface-card` | `#FFFFFF` | Cartões, header, modais |
| `--surface-container-low` | `#F1F7F3` | Seções alternadas, heros suaves |
| `--surface-container` | `#E6F1EA` | Chips, hovers, botões suaves |
| `--surface-container-high` | `#D9EADF` | Hover de botão suave |
| `--surface-container-highest` / `--surface-variant` | `#CCE3D4` | Estados discretos |
| `--surface-dim` | `#D5E4DD` | Sombras/áreas rebaixadas |
| `--gov-sky-subtle` | `#EFF8F1` | Fundo de ícones e hovers (herança de nomenclatura azul) |
| `--gov-sky-border` | `#BFE3CB` | Borda de apoio |
| `--neutral-border` | `#D5E4DA` | Borda padrão de cartões e divisores |
| `--neutral-muted` | `#5F6F65` | Texto auxiliar (contraste 5.3:1 no branco, 4.6:1 no canvas) |
| `--outline` | `#6E7C73` | Contornos |
| `--outline-variant` | `#BFD0C4` | Divisores suaves |

### 3.4 Texto

| Token | Hex | Uso |
|---|---|---|
| `--on-surface` | `#10231C` | Títulos e texto principal |
| `--on-surface-variant` | `#3F4A43` | Texto secundário |
| `--inverse-surface` | `#1A2B22` | Toast escuro |
| `--inverse-on-surface` | `#EEF6F0` | Texto no toast |

### 3.5 Semânticas e apoio

| Token | Hex | Uso |
|---|---|---|
| `--success` | `#2E9E63` | Indicadores positivos |
| `--success-dark` | `#1B6B42` | Texto de sucesso |
| `--success-soft` / `--success-subtle` | `#E2F4E8` | Fundo de sucesso |
| `--success-border` | `#BFE8CF` | Borda de sucesso |
| `--error` | `#BA1A1A` | Erros |
| `--error-soft` | `#FFDAD6` | Fundo de erro |
| `--accent-amber` | `#F59E0B` | Alertas/avisos pontuais |
| `--footer-bg` | `#0B2B20` | Corpo do rodapé |
| `--footer-bg-deep` | `#071F17` | Faixa inferior do rodapé |

### 3.6 Contraste (WCAG 2.1)

| Combinação | Razão | Status |
|---|---|---|
| `--on-surface` sobre `--surface` | 14.8:1 | AAA |
| `--on-surface-variant` sobre branco | 9.2:1 | AAA |
| `--primary-ink` sobre branco | 6.4:1 | AA/AAA |
| `--neutral-muted` sobre branco | 5.3:1 | AA |
| `--neutral-muted` sobre `--surface-canvas` | 4.6:1 | AA |
| Branco sobre `--brand-dark` | 7.0:1 | AAA |
| Branco sobre `--primary-ink` | 6.4:1 | AA/AAA |
| `--on-primary` sobre `--primary` | 6.0:1 | AA |
| Branco sobre `--brand` | **2.5:1** | ❌ não usar texto |
| Branco sobre `--primary-container` | 4.2:1 | Só texto grande (≥24px ou 19px bold) |
| `--success-dark` sobre `--success-soft` | 5.7:1 | AA |
| `--error` sobre `--error-soft` | 5.0:1 | AA |

> **Contraste de cartões:** cartões brancos (`--surface-card`) precisam se destacar de `--surface`/`--surface-canvas`. A separação combina três camadas: fundo de página mais profundo, borda `1px solid --neutral-border` e `--shadow-sm` verde-acinzentada. Não use cartões brancos sobre seções brancas sem borda ou sombra.

> **Regra de ouro:** texto branco só sobre verde profundo (`--brand-dark`, `--primary-ink`) ou sobre painéis escuros translúcidos. Sobre `--brand` e `--primary-container`, use `--on-primary` (verde quase preto).

---

## 4. Tipografia

**Família única:** `Inter` (Google Fonts, pesos 400, 500, 600, 700, 800), com fallback de sistema.

```css
--font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

**Ícones:** `Material Symbols Outlined` (fonte variável), classes utilitárias `.icon-sm` (16px), `.icon-md` (20px), `.icon-lg` (28px).

### 4.1 Escala em uso

| Papel | Tamanho | Peso | Observações |
|---|---|---|---|
| Hero H1 (home) | `clamp(1.75rem, 3.3vw, 2.5rem)` | 800 | `letter-spacing: -0.03em`, `line-height: 1.16` |
| Hero H1 (servidor/404) | `clamp(2rem–2.25rem, 4–4.6vw, 3–3.5rem)` | 800 | Texto branco sobre verde profundo |
| Hero H1 (páginas internas) | `clamp(2rem, 4vw, 3rem)` | 800 | |
| Título de seção | `clamp(1.625rem, 3vw, 2.25rem)` | 700 | `.section-title` |
| Subtítulo de seção | `0.9375rem` | 400 | `.section-subtitle`, `line-height: 1.6` |
| Kicker/eyebrow | `0.6875rem` | 700 | Caixa alta, `letter-spacing: 0.09em` |
| Corpo | `1rem` / `0.875rem` | 400 | |
| Texto de apoio | `0.75rem` / `0.8125rem` | 400–500 | |
| Rótulo/badge | `0.6875rem` | 600–700 | |
| Microtexto legal | `0.6875rem`, `0.625rem` | 400–700 | Rodapé e selos |

**Títulos:** `line-height: 1.2` e `letter-spacing: -0.015em` por padrão (`h1`–`h6`).
**Números:** `font-variant-numeric: tabular-nums` em estatísticas.

> **Recomendação:** consolidar os valores fora de escala encontrados (`0.78rem`, `0.72rem`, `0.9rem`) em uma escala de 8 passos: 10 / 12 / 13 / 14 / 16 / 18 / 24 / 32 / 40 / 48 px.

---

## 5. Layout, espaço e grid

| Item | Valor |
|---|---|
| Container máximo | `1280px` (`--container`) |
| Padding lateral | `1.5rem`; `2rem` a partir de 1024px; `1rem` até 640px |
| Seção padrão | `padding-block: 4rem` (`3rem` no mobile) |
| Seção compacta | `padding-block: 3rem` |
| Cabeçalho de seção | `margin-bottom: 2.5rem` (centralizado: `3rem`) |
| Grid de cards | `repeat(auto-fill, minmax(26rem, 1fr))` ou `repeat(auto-fit, minmax(18rem, 1fr))` |
| Hero interno em duas colunas | `minmax(0, 1fr) 340px` ou `19rem` |
| Topbar | altura mínima `2.5rem` |
| Header principal | altura mínima `4.5rem` |
| Barra de navegação | pills de `0.5rem × 0.875rem`, `border-radius: 9999px` |

**Fundos de seção:** `.section--canvas` (cinza-esverdeado), `.section--white` (branco), `.section--surface` (padrão). O ritmo visual alterna canvas → branco → canvas.

**Breakpoints:** `1100px` (compactação do menu), `900px` (menu vira drawer, busca some), `640px` (mobile: container 1rem, rodapé em 1 coluna).

---

## 6. Formas, sombras e elevação

| Token | Valor |
|---|---|
| `--radius-sm` | `0.25rem` |
| `--radius` | `0.5rem` |
| `--radius-md` | `0.75rem` |
| `--radius-lg` | `1rem` |
| `--radius-xl` | `1.5rem` |
| `--radius-full` | `9999px` |

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgb(9 42 29 / .06), 0 2px 8px -2px rgb(9 42 29 / .10)` | Cartões, botões |
| `--shadow-md` | `0 4px 10px -2px rgb(9 42 29 / .12), 0 2px 6px -2px rgb(9 42 29 / .08)` | Hover de cartão |
| `--shadow-lg` | `0 10px 15px -3px rgb(9 42 29 / .14), 0 4px 6px -4px rgb(9 42 29 / .08)` | Elementos flutuantes |
| `--shadow-xl` | `0 20px 25px -5px rgb(9 42 29 / .12), 0 8px 10px -6px rgb(9 42 29 / .06)` | Dropdowns, modais, hero frame |

**Padrão de cartão:** fundo branco + borda `1px solid var(--neutral-border)` + `--radius-md` + `--shadow-sm`.
**Elevação por interação:** `translateY(-1px)` em botões, `translateY(-2px)` a `-4px` em cartões clicáveis, com transição de `0.2s ease`.

> **Sombras:** a base é verde-acinzentada `rgb(9 42 29)`, alinhada à identidade — evita o cinza-azulado herdado de temas anteriores e reforça a separação dos cartões sobre o canvas verde-claro.

---

## 7. Componentes

### 7.1 Botões (`.btn`)

Base: inline-flex, gap `0.5rem`, padding `0.75rem 1.5rem`, raio `--radius`, fonte `0.875rem/600`, transição de `0.2s`.

| Variante | Fundo | Texto | Uso |
|---|---|---|---|
| `.btn--primary` | `--primary` | `--on-primary` | Ação principal |
| `.btn--secondary` | branco + borda | `--on-surface` | Ação secundária |
| `.btn--ghost` | transparente | `--primary-ink` | Ação terciária |
| `.btn--soft` | `--surface-container` | `--primary-ink` | Ação discreta |
| `.btn--light` | branco | `--primary-ink` | Sobre fundo colorido |
| `.btn--success` | `--success` | branco | Confirmação |
| `.btn--white` (páginas) | branco | `--primary-ink` | Sobre hero verde |

Tamanhos: `--sm` (`0.5rem 0.875rem`), padrão, `--lg` (`0.875rem 1.75rem`), `--block` (100%).

### 7.2 Badges e chips (`.badge`)

Pill (`--radius-full`), `0.25rem 0.625rem`, `0.6875rem/600`. Variantes: `--sky`, `--blue`, `--success`, `--warm`, `--tertiary`, `--neutral`, `--error`. Usados para status, categorias, filtros ativos e contadores.

### 7.3 Cartões e ícones

- `.card`: branco + borda + raio + sombra.
- `.icon-box`: `3rem × 3rem`, raio `--radius`, fundo `--gov-sky-subtle`, ícone `--primary-ink`; variantes `--blue`, `--soft`, `--tertiary`.
- Cartões de página usam raios maiores (`--radius-md`/`--radius-lg`), borda superior ou lateral de 3–5px em verde para destaque editorial.

### 7.4 Formulários

- Campos com fundo `--surface-field`, borda transparente, raio `--radius`, fonte `0.875rem`.
- Foco: fundo branco, borda `--primary-ink`, anel `0 0 0 3px rgba(0,102,79,.16)`.
- Rótulos `0.75rem/600`; placeholder `--neutral-muted`.
- Checkbox com `accent-color: --primary-ink` dentro de `.checkbox-row` (fundo `--surface-container`).
- Select com seta SVG cinza-esverdeada embutida.

### 7.5 Header governamental

Três faixas empilhadas:

1. **Topbar** (`#F4F8F4`, borda inferior): marca "BRASIL / Governo Municipal" com bandeira, links institucionais, redes sociais, botão **Acessibilidade** e **Mapa do site**.
2. **Header principal** (branco): logo SEMED, busca em pill com atalho `Ctrl K`, botão "Portal do Servidor" e botão de menu (mobile).
3. **Navegação** (`--brand-dark`): pills brancos translúcidos; item ativo verde `--brand` com texto `--on-primary`; dropdowns brancos com itens ativos em `--primary-fixed`.

- Header sticky no topo, com sombra sutil ao rolar (`.is-scrolled`).
- Drawer mobile branco deslizando da direita, com overlay escuro desfocado, logo, itens com ícones e CTA final.
- Animações do drawer: `0.3–0.35s cubic-bezier(0.4, 0, 0.2, 1)`, itens em cascata.

### 7.6 Breadcrumb

`0.75rem`, `--neutral-muted`, separadores `chevron_right` de 14px, página atual em `--on-surface/600`. Sempre dentro do hero (exceto em `for-index/escolas.html`, que usa uma faixa própria `.breadcrumb-bar`).

### 7.7 Rodapé

Quatro blocos em `1.4fr 1fr 1fr 1.25fr`:

1. Marca (brasão + wordmark) + texto institucional + redes sociais.
2. **Ensino & Ofertas** (8 links).
3. **Transparência** (8 links).
4. **Sede & Contato** (endereço, horário, telefones, e-mail, botão de acessibilidade).

Faixas adicionais: logos institucionais (SEMED branco + Governo Federal + Governo de Alagoas) e barra inferior (`--footer-bg-deep`) com copyright e links legais. Fundo `--footer-bg`; textos em `#A6BFAF`/`#CFE2D6`; títulos em branco, caixa alta, `0.6875rem/700`.

### 7.8 Feedback

- **Toast** (`#toast-notification`): cartão escuro `--inverse-surface`, ícone semântico, título e mensagem, fecha automaticamente. Injetado por `js/common.js` quando ausente.
- **Modal** (`.modal`): overlay `rgba(19,27,46,.55)` com blur, cartão branco de até `36rem`, entrada `modalIn 0.2s`.
- **Barra de progresso de leitura** (`.scroll-progress`): linha verde no topo, presente em todas as páginas.

---

## 8. Arquétipos de página (heros)

| Arquétipo | Aparência | Páginas |
|---|---|---|
| **A — Hero editorial verde** | Faixa em gradiente verde + moldura branca arredondada com carrossel | `index.html` |
| **B — Hero suave** | Gradiente radial verde no topo direito sobre superfície clara, breadcrumb, duas colunas com cartões laterais | `noticias.html`, `documentos.html`, `lgpd.html`, `politica-privacidade.html`, `termos-de-uso.html` |
| **C — Hero verde profundo** | Gradiente `--primary-ink → --brand-dark`, texto branco, painel "vidro escuro" | `servidor.html`, `404.html` |
| **D — Hero fotográfico** | Foto da sede em tela cheia + overlay preto 55% + texto branco | `institucional/institucional.html` |
| **E — Hero branco com coluna lateral** | Fundo branco, borda inferior, grid `1fr / 340px`, cartões de missão/visão/contato | `institucional/quem-somos.html`, `contatos.html`, `galeria-funcionarios.html`, `biblioteca.html` |
| **F — Hero branco centralizado** | Fundo branco, kicker + título + subtítulo centralizados, sem breadcrumb | `for-education/*.html` |
| **G — Hero com busca** | Fundo branco, kicker + título + campo de busca, lista em seção canvas | `for-index/escolas.html` |
| **H — Hero verde centralizado (em produção)** | Faixa verde profunda com kicker, título e subtítulo centralizados; aviso institucional em card | `for-index/censo.html` |

**Estrutura comum:** skip link → header (topbar, marca, nav) → drawer → `<main id="conteudo">` → breadcrumb/hero → seções → rodapé → toast → scripts.

---

## 9. Movimento

| Token | Valor |
|---|---|
| `--ease-out` | `cubic-bezier(0.25, 1, 0.5, 1)` |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-back` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--dur-fast` | `0.15s` |
| `--dur-base` | `0.35s` |
| `--dur-slow` | `0.7s` |

- **Reveal ao scroll:** `.reveal` (opacidade 0→1, `translateY(28px)` → 0, `scale(.985)` → 1) com variantes `--fade`, `--slide-left`, `--slide-right`, `--zoom` e `--stagger-1..8` (60ms entre itens). Aplicado automaticamente por `js/ui.js`.
- **Micro-interações:** botões sobem 1px, cartões 2–4px, ícones giram/deslizam.
- **Loading:** shimmer, spinner e botão com `::after` girando.
- **`prefers-reduced-motion`:** todas as animações e transições reduzidas a `0.01ms`; `scroll-behavior: auto`.

---

## 10. Acessibilidade

- **Skip link** "Pular para o conteúdo" em todas as páginas.
- **Foco visível:** contorno `2px solid var(--primary-ink)` com `offset: 3px`.
- **Painel de acessibilidade:** tamanho de fonte (A−/A/A+), alto contraste e links sublinhados, com preferências salvas.
- **Alto contraste:** paleta preta + amarelo (`#FFDD00`), superfícies `#000`/`#111`, logo invertida.
- **Semântica:** `aria-current="page"`, `aria-expanded`, `aria-controls`, `aria-live` no toast, labels em `sr-only`.
- **Imagens:** logos e bandeiras com `alt` descritivo; imagens decorativas com `alt=""`.
- **Impressão:** header, nav, rodapé, toast e modal ocultos; fundo branco.

---

## 11. Inventário de páginas

| Página | Título | CSS | JS | Hero |
|---|---|---|---|---|
| `index.html` | SEMED — Secretaria Municipal de Educação | `index.css` | `index.js` | A |
| `noticias.html` | Notícias | `noticias.css` | `noticias.js` | B |
| `documentos.html` | Documentos e Editais | `documentos.css` | `documentos.js` | B |
| `servidor.html` | Portal do Servidor | `servidor.css` | `servidor.js` | C |
| `lgpd.html` | LGPD & Transparência | `lgpd.css` | `lgpd.js` | B |
| `politica-privacidade.html` | Política de Privacidade | `politica-privacidade.css` | `politica-privacidade.js` | B |
| `termos-de-uso.html` | Termos de Uso | `termos-de-uso.css` | `termos-de-uso.js` | B |
| `404.html` | Página não encontrada (404) | `404.css` | `index.js` + `ui.js` | C |
| `404_temp.html` | Página não encontrada (404) | `404.css` | — | C |
| `institucional/institucional.html` | Institucional | `institucional.css` | `institucional.js` | D |
| `institucional/quem-somos.html` | Quem Somos | `quem-somos.css` | `quem-somos.js` | E |
| `institucional/contatos.html` | Contatos | `contatos.css` | `contatos.js` | E |
| `institucional/galeria-funcionarios.html` | Galeria de Funcionários | `galeria-funcionarios.css` | `galeria-funcionarios.js` | E |
| `institucional/biblioteca.html` | Biblioteca Digital | `biblioteca.css` | `biblioteca.js` | E |
| `for-education/educacao-basica.html` | Educação Básica | `educacao.css` | `ui.js` | F |
| `for-education/educacao-especial.html` | Educação Especial | `educacao.css` | `ui.js` | F |
| `for-education/educacao-jovens-adultos.html` | Educação de Jovens e Adultos | `educacao.css` | `ui.js` | F |
| `for-education/calendario-2026.html` | Calendário Ano Letivo 2027 | `educacao.css` | `ui.js` | F |
| `for-index/escolas.html` | Localize uma Escola | `escolas.css` | `escolas.js` | G |
| `for-index/censo.html` | Censo Escolar | `index.css` | `ui.js` | H (em produção) |

Todas as páginas carregam `base.css` + `animations.css`; todas usam `js/common.js` (drawer, acessibilidade, busca, toasts) e `js/ui.js` (reveals, progresso de leitura), exceto onde indicado.

---

## 12. Ajustes aplicados nesta revisão

Correções de consistência e identidade feitas em todas as páginas:

1. **Links quebrados corrigidos**
   - `index.html`: `../for-index/escolas.html` → `for-index/escolas.html` e `../for-index/censo.html` → `for-index/censo.html`.
   - `institucional/biblioteca.html`, `contatos.html`, `galeria-funcionarios.html`, `institucional.html`: links legais do rodapé passaram a usar `../termos-de-uso.html` e `../politica-privacidade.html`.
2. **Tokens ausentes definidos em `base.css`**
   - `--primary-dark` (usado no gradiente do Censo — antes inválido).
   - `--on-secondary-container` (ícones do Portal do Servidor).
   - `--success-subtle`, `--success-ink`, `--success-border` (ícones dos cards de submódulos do Institucional ficavam sem fundo verde).
   - Cores oficiais da marca: `--brand-mid`, `--brand-lime`, `--brand-ink`.
3. **Contraste dos heros com texto branco**
   - `servidor.css` e `404.css`: gradiente passou de verde claro (`--primary`) para `--primary-ink → --primary-container → --brand-dark`. Contraste do texto subiu de ~2.8:1 para **5.2:1+**.
   - `servidor.css`: painel "Acessos Rápidos" virou vidro escuro (`rgba(7,31,23,.45)`), elevando o contraste interno para **6:1+**.
   - `institucional.css`: breadcrumb do hero fotográfico ganhou sombra de texto e opacidade maior para se manter legível sobre a fachada clara.
4. **Metadados de identidade**
   - `<meta name="theme-color" content="#00664f" />` adicionado a todas as 20 páginas, para colorir a interface do navegador no mobile.
5. **Normalizações de texto e layout**
   - `for-index/escolas.html`: título padronizado para `- AL` (antes `- Alagoas`); breadcrumb ganhou a faixa `.breadcrumb-bar` com respiro; nomes longos de escolas não são mais cortados pelo botão de informação.
   - `for-index/censo.html`: rodapé movido para fora de `<main>` (HTML válido); página ganhou hero institucional (kicker, título, subtítulo), aviso "em produção" em card e microcopy corrigida (antes prometia links que não existiam).
6. **Contraste entre cartões e fundo (correção sistêmica)**
   - `--surface` passou de `#F7FAF8` para `#EFF5F0` e `--surface-canvas` de `#F6FAF7` para `#E8F1EA`, criando separação real entre o branco dos cartões e o fundo da página.
   - `--neutral-border` passou de `#DFEAE2` para `#D5E4DA`; `--neutral-muted` de `#64756B` para `#5F6F65` (mantém AA sobre o novo canvas).
   - `--shadow-sm`/`--shadow-md`/`--shadow-lg` migraram para base verde-acinzentada `rgb(9 42 29)` com sombra difusa maior.
   - Novo token `--surface-field` (`#F2F7F3`) evita que campos de formulário e busca fiquem com o mesmo tom forte do canvas; aplicado em `base.css` e `documentos.css`.

---

## 13. Pendências e recomendações

| Prioridade | Item |
|---|---|
| Alta | `for-index/censo.html` está em produção: o hero e o aviso já seguem a identidade, mas os dados e links oficiais (INEP/IDEB) ainda precisam ser publicados. |
| Alta | `404_temp.html` é uma cópia de `404.html`; remover ou documentar como rascunho. |
| Média | `for-education/*.html` não têm breadcrumb (único grupo de páginas internas sem trilha). |
| Média | Renomear `--gov-sky-*` (nome herdado do azul) para `--gov-green-*`; alto custo de busca, baixo risco visual. |
| Média | `brasao.png` é um JPEG com extensão `.png`; converter para PNG real e gerar favicons 32/180/512. |
| Baixa | Consolidar a escala tipográfica (valores `0.72rem`, `0.78rem`, `0.9rem` fora da escala). |
| Baixa | Código morto em `index.css` (`.tab`, `.tip`, `.tip-list`) pode ser removido. |
| Baixa | O hero do Institucional usa foto com overlay 55% — monitorar contraste do breadcrumb sobre áreas claras da imagem. |

---

## 14. Checklist para novas páginas

- [ ] `<html lang="pt-BR">`, `charset`, `viewport`, `title` no padrão `Página | SEMED São Miguel dos Campos - AL`.
- [ ] `<meta name="description">` e `<meta name="theme-color" content="#00664f">`.
- [ ] Favicon `assets/images/brasao.png` (caminho relativo).
- [ ] Inter (400–800) + Material Symbols via Google Fonts.
- [ ] `base.css` + CSS da página + `animations.css`.
- [ ] Skip link e `<main id="conteudo">`.
- [ ] Header, drawer e rodapé copiados do padrão (`.skills/SKILL_PADRAO_PAGINA.md`).
- [ ] Item ativo com `is-active` / `aria-current="page"` no desktop e no drawer.
- [ ] Breadcrumb com a página atual em `aria-current="page"` (exceto home).
- [ ] Hero alinhado a um dos arquétipos A–H.
- [ ] Texto branco apenas sobre `--brand-dark`/`--primary-ink`.
- [ ] Botão primário com no máximo um por bloco de decisão.
- [ ] Ícones sempre acompanhados de rótulo textual.
- [ ] `alt` em imagens de conteúdo; `alt=""` em decoração.
- [ ] Testar foco por teclado, alto contraste e `prefers-reduced-motion`.
- [ ] Verificar links relativos (especialmente em subpastas).

---

## Anexo A — Pacote mínimo de tokens

```css
:root {
  /* Marca */
  --brand: #68b45c;
  --brand-dark: #00664f;
  --brand-mid: #66b75f;
  --brand-lime: #bacf12;
  --brand-ink: #1f1a24;

  /* Primárias */
  --primary: #68b45c;
  --primary-ink: #2f6b2f;
  --primary-container: #4a8a45;
  --primary-dark: #004838;
  --on-primary: #0b2b20;
  --primary-fixed: #e2f3dd;
  --on-primary-fixed: #102e12;

  /* Superfícies */
  --surface: #eff5f0;
  --surface-canvas: #e8f1ea;
  --surface-field: #f2f7f3;
  --surface-card: #ffffff;
  --surface-container-low: #f1f7f3;
  --surface-container: #e6f1ea;
  --neutral-border: #d5e4da;
  --neutral-muted: #5f6f65;

  /* Texto */
  --on-surface: #10231c;
  --on-surface-variant: #3f4a43;

  /* Semânticas */
  --success: #2e9e63;
  --success-dark: #1b6b42;
  --success-soft: #e2f4e8;
  --error: #ba1a1a;
  --accent-amber: #f59e0b;
  --footer-bg: #0b2b20;

  /* Forma */
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;

  /* Elevação */
  --shadow-sm: 0 1px 2px 0 rgb(9 42 29 / 0.06), 0 2px 8px -2px rgb(9 42 29 / 0.1);
  --shadow-md: 0 4px 10px -2px rgb(9 42 29 / 0.12), 0 2px 6px -2px rgb(9 42 29 / 0.08);
  --shadow-lg: 0 10px 15px -3px rgb(9 42 29 / 0.14), 0 4px 6px -4px rgb(9 42 29 / 0.08);

  /* Tipografia */
  --font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  /* Movimento */
  --dur-fast: 0.15s;
  --dur-base: 0.35s;
  --dur-slow: 0.7s;
  --ease-out: cubic-bezier(0.25, 1, 0.5, 1);
}
```

---

*Documento gerado a partir da auditoria de `base.css`, dos 15 CSS de página, das 20 páginas HTML e dos arquivos de marca. Mantenha este arquivo atualizado sempre que um token, componente ou arquétipo de página mudar.*
