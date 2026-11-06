# Portal Institucional SEMED — São Miguel dos Campos - AL

Site institucional estático da Secretaria Municipal de Educação de São Miguel dos Campos (Alagoas), construído em **HTML, CSS e JavaScript puros**, sem frameworks, bundlers ou etapa de build.

## Páginas

| Arquivo | Página |
| --- | --- |
| `index.html` | Página inicial |
| `noticias.html` | Notícias |
| `documentos.html` | Documentos e Editais |
| `lgpd.html` | LGPD & Transparência |
| `servidor.html` | Portal do Servidor |
| `institucional.html` | Página Institucional (visão geral da seção) |
| `quem-somos.html` | Quem Somos (missão, visão, valores, história) |
| `galeria-funcionarios.html` | Galeria de Funcionários (estrutura organizacional e equipe) |
| `contatos.html` | Contatos (atendimento, sede, formulário) |
| `biblioteca.html` | Biblioteca Digital (galeria de livros com submenu lateral e submódulos) |
| `404.html` | Página de erro (rota não encontrada) |

Cada página possui seu próprio arquivo CSS (em `css/`) e seu próprio arquivo de comportamento (em `js/`), além do CSS e do JS compartilhados (`css/base.css` e `js/common.js`).

## Estrutura

```
portal_semed/
├── index.html
├── noticias.html
├── documentos.html
├── lgpd.html
├── servidor.html
├── institucional.html
├── quem-somos.html
├── galeria-funcionarios.html
├── contatos.html
├── biblioteca.html
├── 404.html
├── SKILL_PADRAO_PAGINA.md  # padrão de header, footer e estrutura para páginas
├── css/
│   ├── base.css          # design system, header, footer, acessibilidade
│   ├── index.css
│   ├── noticias.css
│   ├── documentos.css
│   ├── lgpd.css
│   ├── servidor.css
│   ├── institucional.css
│   ├── quem-somos.css
│   ├── galeria-funcionarios.css
│   ├── contatos.css
│   ├── biblioteca.css
│   └── 404.css
├── js/
│   ├── common.js         # drawer, acessibilidade, busca, toasts, downloads
│   ├── index.js
│   ├── noticias.js
│   ├── documentos.js
│   ├── lgpd.js
│   ├── servidor.js
│   ├── institucional.js
│   ├── quem-somos.js
│   ├── galeria-funcionarios.js
│   ├── contatos.js
│   └── biblioteca.js
├── assets/
│   └── images/           # brasão e imagens locais do portal
├── robots.txt
└── .nojekyll
```

## Executar localmente

Não há dependências. Basta servir a pasta como site estático:

```bash
cd portal_semed
python -m http.server 8090
```

Depois acesse `http://127.0.0.1:8090/`.

Também é possível abrir `index.html` diretamente no navegador, mas um servidor local garante o funcionamento de todos os caminhos e do parâmetro de busca.

## Deploy

Publique **o conteúdo da pasta `portal_semed/`** como raiz do site. Não há comando de build.

- **Netlify / Cloudflare Pages:** diretório de publicação `portal_semed`, sem build command.
- **Vercel:** framework “Other”, output directory `portal_semed`.
- **GitHub Pages:** envie o conteúdo para a branch de publicação. O arquivo `.nojekyll` já está incluído para impedir o processamento pelo Jekyll.
- **Apache / Nginx / IIS:** aponte o document root para a pasta `portal_semed`.

### Página 404

A `404.html` usa caminhos absolutos a partir da raiz do domínio (`/css/...`, `/index.html`, etc.), pois pode ser servida em qualquer endereço inexistente. Se o portal for publicado em uma **subpasta** (por exemplo, `https://dominio.gov.br/semed/`), ajuste os caminhos iniciados por `/` na `404.html` ou configure a hospedagem para servir a página na raiz do domínio.

## Conteúdo e integrações

- Os formulários e downloads são **simulações de front-end**: exibem notificações e geram protocolo/arquivo localmente, sem enviar dados a um servidor.
- Para uso oficial, conecte o formulário da LGPD, a busca e os downloads às APIs/sistemas da Prefeitura.
- Os textos, telefones, e-mails, links externos e dados institucionais devem ser revisados e validados pela SEMED antes da publicação.
- Fontes (Inter) e ícones (Material Symbols) são carregados do Google Fonts e exigem conexão com a internet. Para operação totalmente offline, hospede esses arquivos localmente.

## Acessibilidade

O portal inclui:

- atalho “Pular para o conteúdo”;
- navegação por teclado e foco visível;
- painel de acessibilidade com aumento/diminuição de fonte, alto contraste e links sublinhados (preferências salvas em `localStorage`);
- marcos semânticos, rótulos ARIA e textos alternativos nas imagens;
- suporte a `prefers-reduced-motion` e estilos de impressão.

## Identidade visual

O portal segue a identidade verde institucional da SEMED:

- **Cor principal:** `#68b45c` (verde)
- **Verde escuro (header e rodapé):** `#00664f`
- **Texto em verde:** `#2f6b2f`
- **Rodapé:** verde profundo (`#0b2b20`)

### Logo

O menu superior e o drawer mobile usam a logo oficial `assets/images/semed_logo.png` (wordmark escura com as três bolinhas verdes), sem fundo azul e sem o bloco de texto “SEMED / Secretaria Municipal de Educação / São Miguel dos Campos - AL”.

O rodapé exibe ainda a faixa institucional com a logo branca da SEMED (`semed_logo_branca.png`) ao lado da bandeira do Brasil e da bandeira do Estado de Alagoas.

## Módulos (navegação)

O menu principal e o drawer mobile contêm dez módulos:

| Módulo | Destino |
| --- | --- |
| Início | `index.html` |
| Notícias | `noticias.html` |
| Institucional | `institucional.html` |
| Educação | `index.html#programas` |
| Estudante | `index.html#servicos` |
| Escola | `index.html#escola` |
| Documentos e Editais | `documentos.html` |
| LGPD & Transparência | `lgpd.html` |
| Servidor | `servidor.html` |
| Avisos | `noticias.html#avisos` |

Os novos módulos (Educação, Estudante, Escola e Avisos) apontam para âncoras existentes na página inicial ou na página de Notícias, sem exigir novas páginas.

### Serviços & Canais ao Cidadão

Na seção `#servicos` da home estão os serviços da rede municipal de São Miguel dos Campos: Localize uma Escola, Legislação, Publicações, Censo, Carta de Serviços, Revista Eletrônica, Certificação Encceja, Centros de Atendimento, Matrícula da Rede Estadual, Referencial Curricular, Editais, Alimentação Escolar, Matrizes Escolares, Observatório Astronômico, Guia sobre uso de dispositivos digitais, Caderno Orientador ano letivo 2026, Seleções, Transporte Escolar, Portal do Servidor, Calendário Escolar 2026 e Central & Ouvidoria.

## Personalização

As cores, tipografia, espaçamentos e sombras estão centralizados nos tokens de `css/base.css` (`:root`).
