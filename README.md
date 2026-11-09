# Portal Institucional SEMED — São Miguel dos Campos - AL

![SEMED logo](assets/images/semed_logo_branca.png)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Sem frameworks](https://img.shields.io/badge/Frameworks-Nenhum-68b45c?style=for-the-badge)](#)
[![Site estático](https://img.shields.io/badge/Site-Est%C3%A1tico-00664f?style=for-the-badge)](#)
[![Acessibilidade WCAG](https://img.shields.io/badge/Acessibilidade-WCAG-2f6b2f?style=for-the-badge)](#)
[![Licença MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-00664f?style=for-the-badge)](LICENSE)
[![Português do Brasil](https://img.shields.io/badge/Idioma-Portugu%C3%AAs_do_Brasil-00664f?style=for-the-badge)](#)

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

```text
SEMED-SMC-AL/
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
├── SKILL_PADRAO_PAGINA.md
├── robots.txt
├── .nojekyll
├── LICENSE
├── README.md
├── css/
│   ├── base.css
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
│   ├── common.js
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
└── assets/
    └── images/
```

## Executar localmente

Não há dependências. Basta servir a pasta raiz como site estático:

```bash
python -m http.server 8090
```

Depois acesse `http://127.0.0.1:8090/`.

Também é possível abrir `index.html` diretamente no navegador, mas um servidor local garante o funcionamento de todos os caminhos e do parâmetro de busca.

## Deploy

Publique **o conteúdo da pasta raiz** como raiz do site. Não há comando de build.

- **Netlify / Cloudflare Pages:** diretório de publicação = raiz do repositório, sem build command.
- **Vercel:** framework “Other”, output directory = raiz do repositório.
- **GitHub Pages:** envie o conteúdo para a branch de publicação. O arquivo `.nojekyll` já está incluído para impedir o processamento pelo Jekyll.
- **Apache / Nginx / IIS:** aponte o document root para a pasta raiz do repositório.

### Página 404

A `404.html` usa caminhos absolutos a partir da raiz do domínio (`/css/...`, `/index.html`, etc.), pois pode ser servida em qualquer endereço inexistente. Se o portal for publicado em uma **subpasta**, ajuste os caminhos iniciados por `/` na `404.html`.

## Conteúdo e integrações

- Os formulários e downloads são **simulações de front-end**: exibem notificações e geram protocolo/arquivo localmente, sem enviar dados a um servidor.
- Para uso oficial, conecte o formulário da LGPD, a busca e os downloads às APIs/sistemas da Prefeitura.
- Os textos, telefones, e-mails, links externos e dados institucionais devem ser revisados e validados pela SEMED antes da publicação.
- Fontes (Inter) e ícones (Material Symbols) são carregados do Google Fonts e exigem conexão com a internet.

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

## Licença

O **código-fonte** deste projeto está licenciado sob a **Licença MIT** — veja o arquivo [LICENSE](LICENSE) para detalhes.

Os **conteúdos institucionais** (textos, logos, imagens, telefones, e-mails e dados da Secretaria Municipal de Educação de São Miguel dos Campos - AL) são de propriedade da SEMED e não estão cobertos pela licença MIT. Sua reprodução ou uso externo exige autorização prévia da SEMED.

## Como contribuir

Contribuições são bem-vindas. Para propor alterações:

1. Faça um fork do repositório.
2. Crie uma branch a partir de `main`: `git checkout -b sua-melhoria`.
3. Faça suas alterações e commite: `git commit -m "feat: descreva a mudança"`.
4. Envie a branch: `git push origin sua-melhoria`.
5. Abra um Pull Request descrevendo o que foi alterado e por favor.

Mantenha o padrão de cada página (veja `SKILL_PADRAO_PAGINA.md`) e os tokens de cor definidos em `css/base.css` (`:root`).

## Autoria

Desenvolvido para a **Secretaria Municipal de Educação de São Miguel dos Campos - AL**.
