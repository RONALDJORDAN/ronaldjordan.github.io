# Plano da Carteira — JORDAN.SYS

## Objetivo

Criar `carteira.html` como página print-ready, estilo carteira de estudante/programador, inspirada nas edições Stitch "carteirinha_de_estudante" e "software_architect_devops_pixel_art_edition". A página deve ser autossuficiente, com foto, avatar pixel, ID do programador, stack visual, validação e ações de copiar/toggle. O design mantém a estética arcade/CRT com cores neon ciano/magenta/amarelo/lima e bordas duras (0 radius).

## Etapas Concluídas

- [x] Definir estrutura da página: header HUD, hero terminal, player card, stats bars, ID validation section, toggle foto/sprite
- [x] Criar/verificar avatar pixel (`assets/pixel-avatar.svg`) decodificado da página Stitch
- [x] Adicionar link `CARTEIRA` na navegação principal e no rodapé de todas as páginas
- [x] Atualizar copy de todas as páginas: remover "Full-Stack", adicionar "Engenheiro de Software // DevOps"
- [x] Integrar bibliotecas GSAP 3.15.0 + ScrollTrigger 3.15.0 + Motion 12.23.12 UMD locais
- [x] Implementar animações GSAP + Motion: hero entrance, reveals, ID validation feedback
- [x] Adicionar funcionalidade de copiar ID para área de transferência
- [x] Implementar toggle foto/sprite (foto real ↔ avatar pixel)
- [x] Criar `plans/carteira.plan.md` com registro detalhado

## O Que a Página Contém

### Estrutura

1. **Header HUD** — Sistema JORDAN.SYS com clock, áudio, créditos PLAYER 01
2. **Hero** — Título "ENGENHEIRO DE SOFTWARE // DEVOPS", terminal resumido, ação CTA
3. **Player Card** — Foto (`assets/profile.jpg`), avatar pixel (`assets/pixel-avatar.svg`), rank LVL 03, classe ENGENHEIRO DE SOFTWARE // DEVOPS
4. **Bars de Estatísticas** — Pipeline (92%), Automação (78%), Entrega (88%), Confiança (95%)
5. **Seção de ID** — Display do ID (JR-2026), input de validação, botão "Copiar ID", toggle Foto ↔ Sprite
6. **Stack Visual** — Chips C#/.NET, React/TypeScript, WPF, FFmpeg, PowerShell etc.
7. **Rodapé** — Build info, links para páginas do portfólio

### Funcionalidades JS

- **Copiar ID**: ao clicar, copia "JR-2026" para a área de transferência com toast de confirmação
- **Toggle Foto/Sprite**: alterna entre `assets/profile.jpg` (foto real) e o sprite SVG do avatar pixel
- **Validação de ID**: input que valida se o formato é `JR-XXXX` e exibe status "VÁLIDO"/"INVÁLIDO"
- **Animações GSAP**: entrada da hero, barras de estatísticas com stagger, toggle de foto com fade
- **ScrollTrigger**: sezione de ID observa scroll com scrub suave

### Design Tokens Utilizados

- Cores: `--bg: #070b14`, `--cyan: #00f0ff`, `--magenta: #ff2e88`, `--yellow: #ffe600`, `--lime: #7dff5b`
- Fontes: `--font-display: "Space Grotesk"`, `--font-mono: "Space Mono"`, `--font-pixel: "Press Start 2P"`
- Radius: `--radius: 0` (bordas duras/CRT)
- Easing: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`

## Próximos Passos (opcional)

- Validar Playwright em desktop e mobile (screenshots da carteira, toggle, cópia de ID)
- Testar reduced-motion media query: reduzir/remover animações se `prefers-reduced-motion: reduce`
- Adicionir suporte a impressão (`window.print()`) preservando o layout CRT
- Verificar compatibilidade com validação de IDs em outros projetos (ex: dossiê `dossier-id`)