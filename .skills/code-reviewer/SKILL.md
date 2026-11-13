# Skill: Code Review

## Descrição
Revisão de código com foco em qualidade, boas práticas, segurança e manutenibilidade. Analisa arquivos fornecidos e sugere melhorias específicas.

## Quando Usar
- Usuário pede para revisar código
- Detectar bugs, vulnerabilidades ou problemas de performance
- Validar aderência a padrões de código
- Sugerir refatorações

## Diretrizes de Revisão

### Critérios Obrigatórios
- **Segurança**: Nunca exiba ou processe dados sensíveis (senhas, CPFs, tokens)
- **Correção**: Verifique lógica, tratamento de erros e casos edge
- **Legibilidade**: Identação consistente, nomes descritivos, funções pequenas
- **Manutenibilidade**: Acoplamento baixo, cohesion alta, DRY

### Análise por Linguagem

#### HTML
- Semântica correta (use `<main>`, `<section>`, `<article>`)
- Atributos `alt` em imagens
- Formatação adequada de metadados

#### CSS
- Variáveis CSS para cores e tamanhos
- Unidades relativas (rem, em, %) em vez de px fixos
- Media queries para responsividade
- Evite seletores deeply nested

#### JavaScript
- Use `const` e `let` em vez de `var`
- Funções arrow quando apropriado
- Tratamento de erros com try/catch
- Evite eval, innerHTML com dados não confiáveis

#### Python
- Docstrings em funções públicas
- Type hints quando útil
- Use módulos padrão antes de instalar pacotes

## Formato de Saída

```
## Resumo
[Breve descrição do que foi analisado]

## Problemas Encontrados
1. **[Severidade]** - [Arquivo:linha] - [Descrição]
   - Sugestão: [Como corrigir]

## Sugestões de Melhoria
- [Sugestão 1]
- [Sugestão 2]

## Código Corrigido
```python
# Código corrigido
```
```

## Restrições
- Nunca faça alterações sem confirmação do usuário
- Priorize problemas de segurança e bugs sobre preferências de estilo
- Justifique cada sugestão com razão técnica
- Não use jargões excessivamente técnicos sem explicação