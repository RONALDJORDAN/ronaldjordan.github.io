---
name: frontend-design
description: Diretrizes de design para interfaces web distintas e intencionais. Use ao criar ou reformular UI, definindo paleta, tipografia e layout específicos ao contexto.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Aborde como o líder de design de um estúdio que dá a cada cliente uma identidade visual distinta. Este cliente já rejeitou propostas que pareciam genéricas ou templateizadas e paga por um ponto de vista distintivo: faça escolhas deliberadas sobre paleta, tipografia e layout que sejam específicas para este brief.

## Fundamentar o design no tema

Identifique o assunto do produto antes de projetar. Para projetos educacionais e de logística, considere:
- **Público**: gestores educacionais, coordenadores, professores
- **Objetivo**: clareza na exibição de dados, tomada de decisão rápida
- **Contexto**: telas de dados, painéis de controle, relatórios

## Princípios de Design

### Hierarquia visual
- O hero (elemento principal) deve ser o mais característico do tema
- Use números grandes com rótulos pequenos para estatísticas
- Mantenha o espaço respirável: não encha a tela

### Tipografia
- Use 1-2 famílias de fontes no máximo
- Sans-serif para interfaces de dados (legibilidade)
- Escala tipográfica consistente: 1.25x para headings
- Comprimento de linha máximo: 80 caracteres
- Altura de linha: 1.5 para body, 1.2 para headings

### Cores
- Paleta limitada a 3-5 cores principais
- Use variáveis CSS para tokens de cor
- Azul escuro (#2c3e50) para títulos e headers
- Azul (#3498db) para dados e destaque
- Verde (#2ecc71) para positivos e success states
- Cinza claro (#ecf0f1) para backgrounds

### Estrutura Visual
- Use contornos, bordas e divisores para codificar informação
- Numere apenas se o conteúdo for realmente uma sequência
- Evite rótulos em CAES acima de cada heading (parece template)
- Use pontos médios (·) apenas quando fizer sentido

### Movimento
- Use animações com moderação, apenas para chamar atenção
- Uma única orchestrated moment (page-load sequence) é melhor que efeitos espalhados
- Motion que responde a ações do usuário é bem-visto

## Processo: Planejar, Revisar, Construir, Criticar

1. **Plano**: Crie um sistema de tokens com cor, tipo, layout e princípios
2. **Revisão**: Antes de construir, verifique se o plano não é um default genérico
3. **Construção**: Escreva o código seguindo o plano revisado
4. **Crítica**: Revise seu próprio trabalho, tire screenshots, remova um acessório

## Diretrizes de Acessibilidade

- Contraste mínimo 4.5:1 para texto normal
- Botões com área de clique de 44x44px mínimo
- Navegação por teclado completa
- Use `alt` em imagens
- Respeite `prefers-reduced-motion`

## Restrições

- Não use bibliotecas externas sem autorização
- Mantenha o código limpo e organizado
- Priorize usabilidade sobre efeitos visuais complexos
- Teste a responsividade antes de entregar
- Nunca exiba dados sensíveis sem proteção adequada