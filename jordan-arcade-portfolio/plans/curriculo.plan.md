# Plano — curriculo.html

- **Rota/arquivo:** `curriculo.html`
- **data-page:** `curriculo`
- **Status:** concluído
- **Objetivo:** oferecer uma versão limpa, objetiva e pronta para impressão/PDF do currículo, sem depender de serviços externos.
- **Componentes:** header HUD compartilhado (oculto na impressão), hero curto, documento de currículo, botão “Imprimir / Salvar PDF”, links de contato, footer compartilhado.
- **Seções e ordem:** hero → perfil → competências → experiência → projetos selecionados → formação/estudos → idiomas → contato.
- **Conteúdo:** resumo profissional, stack, experiência como desenvolvedor full-stack em projetos autorais e contratuais genéricos, cinco projetos autorais, aprendizado contínuo, português nativo e inglês técnico. Sem citar empresas, clientes ou marcas.
- **Interações:** botão de impressão via `window.print()`, link “voltar ao portfólio”, copiar e-mail, reveals desativados na impressão.
- **Tokens 60-30-10:** tela segue o tema arcade; impressão usa fundo branco, texto preto e acentos escuros.
- **Animações:** nenhuma animação essencial; `prefers-reduced-motion` respeitado.
- **Assets:** fontes locais, favicon, sem imagens.
- **SEO/OG/JSON-LD:** title, description, Open Graph e `Person` com `knowsAbout`.
- **Acessibilidade:** headings hierárquicos, listas semânticas, contraste AA na tela e no papel, foco visível.
- **Responsividade:** documento em coluna única no mobile; impressão em A4 com margens e quebras controladas.
- **Critério de pronto:** impressão gera documento legível em A4, links funcionam, sem overflow em 390 px, sem erros de console.
