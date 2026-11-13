---
name: accessibility-scan
description: "Uma página, tier automatizado — executa o motor de regras de acessibilidade web contra uma página viva e localiza cada violação que pode ser detectada mecanicamente. Use para 'is this page accessible', 'check a11y on this URL', 'find contrast and alt-text issues', ou para verificar uma mudança de UI."
argument-hint: "[target|url]"
allowed-tools: Bash, Read, Glob, Grep, Skill, Task
---

Audite uma página viva e reporte cada violação e onde ela está. Localize; não corrija.

Convenções compartilhadas: [`../shared/methodology.md`](../shared/methodology.md).

`$ARGUMENTS` é uma URL, um nome de config target (`dev`, `storybook`, …), ou vazio para usar o target padrão de `accesslint.config.json`. Se estiver vazio e não houver config, pergunte por uma URL ou sugira `npx @accesslint/cli init`.

## 1. Auditoria

```bash
PORT=$(npx -y @accesslint/chrome@latest ensure | node -e 'process.stdin.on("data",d=>process.stdout.write(""+JSON.parse(d).port))')
npx -y @accesslint/cli@latest scan <target> --port "$PORT" --format json
```

`<target>` é a URL ou nome de config target de `$ARGUMENTS`. Omita (não passe `""`) para auditar o target padrão da config. Adicione flags conforme necessário: `--selector`, `--wait-for "<selector>"`, `--include-aaa`, `--disable <rules>`, ou defina它们 per-target em `accesslint.config.json`.

## 2. Relatório

Conte por impacto, depois uma entrada por violação:

- onde: selector verbatim, mais `file:line (symbol)` se `source` estiver presente. Não invente. Se nenhuma violação tiver `source`, note "source mapping unavailable; located by selector only".
- evidence: contraste de cores, atributo ausente, nome vazio.
- fix: mudança mecânica, ou `NEEDS HUMAN`.

Não edite. Para correções, aplique as mecânicas e re-executar para verificar; para trabalho em massa, transfira para `accessibility-fix`.

## 3. Limpeza

```bash
npx -y @accesslint/chrome@latest stop --all  # skip if ensure reported "managed":false
```

## Notas

- `ensure` determina a port; não hardcode 9222.
- CLI exit 2 significa URL/target inválido, ou a página nunca carregou; verifique o servidor. Um nome de target desconhecido faz o CLI listar os targets disponíveis de `accesslint.config.json`.