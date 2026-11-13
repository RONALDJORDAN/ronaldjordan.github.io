---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Revisão de código HTML/CSS/JS para conformidade com diretrizes de design da web, acessibilidade e usabilidade.

## Diretrizes de Revisão

### Acessibilidade (WCAG AA)
- Contraste de cores mínimo 4.5:1 para texto normal
- Botões e links devem ter área de clique de pelo menos 44x44px
- Use `alt` em todas as imagens
- Navegação por teclado deve ser completa
- Use `aria-label` e `aria-describedby` quando necessário

### Layout
- Use CSS Grid ou Flexbox para layouts responsivos
- Conteúdo fluido com `max-width` adequado
- Espaçamentos consistentes (use variáveis CSS)
- Overflow-x controlado em telas pequenas

### Tipografia
- Família de fontes definida (sans-serif para web)
- Escala tipográfica consistente (1.25x para headings)
- Comprimento de linha máximo 80 caracteres
- Altura de linha (line-height) de pelo menos 1.5 para body

### Cores
- Paleta limitada (3-5 cores principais)
- Use variáveis CSS para tokens de cor
- Feedback visual de estado (hover, focus, active, disabled)
- Não use apenas cor para transmitir informações

### Componentes
- Botões: texto claro, hover effect, estado desabilitado
- Formulários: labels visíveis, mensagens de erro específicas
- Tabelas: cabeçalho visível, linhas alternadas
- Cards: sombra suave, bordas sutis

## Formato de Saída
```
## Resumo
[Descrição breve]

## Problemas Encontrados
- **[Severidade]** [arquivo:linha] - [Descrição]
  - Sugestão: [Como corrigir]

## Pontos Positivos
- [O que já está bem feito]
```

## Restrições
- Priorize problemas de acessabilidade e usabilidade
- Não altere o código sem confirmação
- Sugestões devem ser específicas e acionáveis