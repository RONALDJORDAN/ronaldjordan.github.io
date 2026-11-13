# Skill: Dashboard Designer

## Descrição
Criação de painéis de controle (dashboards) interativos com cards, gráficos, tabelas e filtros. Especializado em exibição de dados estatísticos e métricas de forma visualmente atraente e informativa.

## Quando Usar
- Usuário pede para criar um dashboard ou painel de métricas
- Precisa exibir dados estatísticos, KPIs ou relatórios
- Planejamento de aplicações que precisam de visão geral de dados
- Criação de interfaces com múltiplas seções de informações

## Diretrizes de Implementação

### Layout
- Grid responsivo com CSS Grid (auto-fit, minmax)
- Cards de estatísticas no topo (totais, médias, percentuais)
- Seções organizadas por tema com títulos claros
- Uso de cores consistentes para categorias

### Componentes
- **Cards de stat**: número grande + label + ícone opcional
- **Listas com barras**: progresso proporcional ao valor máximo
- **Tabelas**: cabeçalho fixo, linhas alternadas, hover effect
- **Gráficos de barras**: usando CSS (sem bibliotecas externas)
- **Filtros**: selects, inputs de busca, botões de toggle

### Cores
- Primária: azul escuro (#2c3e50) para títulos e headers
- Secundária: azul (#3498db) para dados e destaque
- Acento: verde (#2ecc71) para positivos, laranja (#f39c12) para alertas
- Neutro: cinza claro (#ecf0f1) para backgrounds

### Dados
- Sempre normalize os dados antes de renderizar
- Use `toLocaleString('pt-BR')` para formatação numérica
- Calcule porcentagens com `toFixed(1)` para consistência
- Ordene dados de forma decrescente por padrão

## Exemplo de Código

```html
<div class="dashboard">
  <div class="stat-card">
    <h3>Total de Usuários</h3>
    <p class="stat-number">1.234</p>
  </div>
  <div class="stat-card">
    <h3>Ativos</h3>
    <p class="stat-number">987</p>
  </div>
</div>

<div class="filters">
  <select id="periodo">
    <option value="7">Últimos 7 dias</option>
    <option value="30">Últimos 30 dias</option>
  </select>
</div>

<div class="chart-container">
  <div class="bar" style="height: 80%"></div>
  <div class="bar" style="height: 60%"></div>
  <div class="bar" style="height: 90%"></div>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #3498db;
}

.chart-container {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  height: 200px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

.bar {
  flex: 1;
  background: #3498db;
  border-radius: 4px 4px 0 0;
  transition: height 0.3s;
}
```

## Restrições
- Use apenas HTML, CSS e JavaScript vanilla (sem frameworks)
- Priorize performance: evite re-renderizações desnecessárias
- Dados devem ser carregados via fetch de JSON estático
- Filtros devem atualizar as visualizações em tempo real
- Nunca exiba dados sensíveis sem proteção adequada