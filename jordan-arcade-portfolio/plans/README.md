# Planos e registro — JORDAN.SYS

Este diretório guarda o plano de cada página e o registro de execução do portfólio. A ideia é permitir retomar o trabalho em outra sessão sem depender do histórico da IA.

## Como usar

1. Leia `REGISTRO.md` para saber o que já foi feito.
2. Abra o plano da página que vai trabalhar.
3. Siga a ordem: conteúdo → HTML → CSS → JS → validação.
4. Ao terminar, atualize o status no plano e adicione uma entrada no `REGISTRO.md`.

## Páginas

| Página | Arquivo | Plano | Status |
| --- | --- | --- | --- |
| Home | `index.html` | `index.plan.md` | concluído |
| Sobre | `sobre.html` | `sobre.plan.md` | concluído |
| Projetos | `projetos.html` | `projetos.plan.md` | concluído |
| Laboratório | `laboratorio.html` | `laboratorio.plan.md` | concluído |
| Arsenal | `arsenal.html` | `arsenal.plan.md` | concluído |
| Trajetória | `trajetoria.html` | `trajetoria.plan.md` | concluído |
| Contato | `contato.html` | `contato.plan.md` | concluído |
| Currículo | `curriculo.html` | `curriculo.plan.md` | concluído |
| Projeto dinâmico | `projeto.html` | `projeto.plan.md` | concluído |
| Carteira | `carteira.html` | `carteira.plan.md` | concluído |
| 404 | `404.html` | `404.plan.md` | concluído |

Todas as páginas foram implementadas, validadas e auditadas em navegador real (desktop e mobile). O registro detalhado está em `REGISTRO.md`.

## Regras editoriais

- O site é 100% autoral.
- Não citar, linkar ou representar outras marcas, sites ou projetos que não sejam os cinco projetos pessoais listados.
- Não usar imagens de projetos antigos; usar ícones SVG pixel-art inline.
- Não apagar os projetos antigos do usuário; apenas não referenciá-los no portfólio.

## Estrutura técnica

- `css/fonts.css`: fontes locais.
- `css/tokens.css`: tokens, reset e utilitários.
- `css/style.css`: componentes do site.
- `css/pages.css`: layouts específicos das páginas internas.
- `js/app.js`: interações globais, dados dos projetos e navegação.
- `js/pages.js`: detalhe dinâmico de projeto, currículo e pequenos extras.
- `assets/`: foto, favicon, fontes e bibliotecas locais.
- `README.md`: visão geral do projeto, execução, estrutura e validação.
