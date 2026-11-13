# Skill: Data Table Designer

## Descrição
Criação de tabelas de dados interativas com ordenação, paginação, busca e exportação. Especializado em exibição de grandes volumes de dados de forma clara e eficiente.

## Quando Usar
- Usuário pede para criar uma tabela de dados
- Precisa exibir dados tabulares com funcionalidades de navegação
- Planejamento de listas de registros (alunos, produtos, usuários, etc.)
- Necessidade de ordenar, buscar ou exportar dados

## Diretrizes de Implementação

### Estrutura Básica
- Use `<table>` semântica com `<thead>`, `<tbody>`, `<tfoot>`
- Cabeçalho com botões de ordenação (setas ↑↓)
- Linhas com classes alternadas para legibilidade
- Paginação com controles de página (primeiro, anterior, próximo, último)

### Funcionalidades Obrigatórias
- Ordenação por clique no cabeçalho
- Busca em tempo real (filtra todas as colunas)
- Paginação (10, 25, 50 ou 100 itens por página)
- Exibição de quando não há resultados

### Estilo
- Cabeçalho fixo em telas longas (position: sticky)
- Linhas com hover effect
- Números alinhados à direita, texto à esquerda
- Barras de progresso inline para valores numéricos

## Exemplo de Código

```html
<div class="table-container">
  <table id="minhaTabela">
    <thead>
      <tr>
        <th data-sort="nome">Nome <span class="sort-icon"></span></th>
        <th data-sort="idade">Idade</th>
        <th data-sort="curso">_curso</th>
      </tr>
    </thead>
    <tbody>
      <!-- Dados inseridos via JS -->
    </tbody>
  </table>
  <div class="pagination">
    <button id="primeiro">«</button>
    <button id="anterior">‹</button>
    <span id="pagina-info">Página 1 de 5</span>
    <button id="proxximo">›</button>
    <button id="ultimo">»</button>
  </div>
</div>
```

```css
.table-container {
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #2c3e50;
  color: white;
  padding: 0.75rem;
  cursor: pointer;
  user-select: none;
}

th:hover {
  background: #34495e;
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

tr:nth-child(even) {
  background: #f8f9fa;
}

tr:hover {
  background: #e8f4f8;
}

.sort-icon {
  margin-left: 0.25rem;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
}
```

```javascript
class DataTable {
  constructor(tableId, data, itemsPerPage = 10) {
    this.table = document.getElementById(tableId);
    this.data = data;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.searchTerm = '';
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  get filteredData() {
    let filtered = this.data;
    
    if (this.searchTerm) {
      filtered = filtered.filter(row =>
        Object.values(row).some(val =>
          String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    }

    if (this.sortColumn) {
      filtered.sort((a, b) => {
        const aVal = a[this.sortColumn];
        const bVal = b[this.sortColumn];
        if (this.sortDirection === 'asc') {
          return aVal > bVal ? 1 : -1;
        }
        return aVal < bVal ? 1 : -1;
      });
    }

    return filtered;
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  render() {
    const tbody = this.table.querySelector('tbody');
    tbody.innerHTML = '';

    this.paginatedData.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(val => {
        const td = document.createElement('td');
        td.textContent = val;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    this.renderPagination();
  }

  renderPagination() {
    const info = document.getElementById('pagina-info');
    info.textContent = `Página ${this.currentPage} de ${this.totalPages || 1}`;
  }

  setupEventListeners() {
    // Ordenação
    this.table.querySelectorAll('th').forEach(th => {
      th.addEventListener('click', () => {
        const column = th.dataset.sort;
        if (this.sortColumn === column) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortColumn = column;
          this.sortDirection = 'asc';
        }
        this.currentPage = 1;
        this.render();
      });
    });

    // Paginação
    document.getElementById('primeiro').addEventListener('click', () => {
      this.currentPage = 1;
      this.render();
    });
    // ... outros botões
  }
}
```

## Restrições
- Dados devem vir de fonte segura (JSON local ou API autorizada)
- Use `textContent` em vez de `innerHTML` para prevenir XSS
- Para grandes volumes, considere paginação server-side
- Nunca exiba dados sensíveis (CPF, senhas, etc.) sem mascaramento