/* Jordan Araujo */
/**
 * Página de Documentos e Editais — filtros, tabela, prévia e exportação
 */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const toast = (title, msg, type) => {
    if (window.SEMED && window.SEMED.showToast) {
      window.SEMED.showToast(title, msg, type || 'success');
    }
  };

  const searchInput = $('#doc-search-input');
  const categorySelect = $('#doc-category-select');
  const yearSelect = $('#doc-year-select');
  const filterBtn = $('#filter-trigger-btn');
  const clearBtn = $('#clear-filters-btn');
  const tabs = $$('.docs-tab');
  const rows = $$('#document-table-body tr');
  const empty = $('#docs-empty');
  const count = $('#doc-count');
  const pageInfo = $('#doc-page-info');
  const tableSection = $('#tabela-completa');

  let activeTab = 'todos';

  /* ---------------------------------------------------------
     1. Filtragem combinada
  --------------------------------------------------------- */
  function applyFilters() {
    if (!rows.length) return;

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const category = categorySelect ? categorySelect.value : 'todos';
    const year = yearSelect ? yearSelect.value : 'todos';

    let visible = 0;

    rows.forEach((row) => {
      const rowCategory = row.getAttribute('data-category') || '';
      const rowYear = row.getAttribute('data-year') || '';
      const extra = row.getAttribute('data-keywords') || '';
      const text = (row.textContent + ' ' + extra).toLowerCase();

      const matchesTerm = !term || text.includes(term);
      const matchesCategory = category === 'todos' || rowCategory === category;
      const matchesYear = year === 'todos' || rowYear === year;
      const show = matchesTerm && matchesCategory && matchesYear;

      row.hidden = !show;
      if (show) visible++;
    });

    if (empty) {
      empty.hidden = visible > 0;
      if (visible === 0) {
        empty.textContent = term
          ? 'Nenhum documento na tabela corresponde a "' + term + '". Consulte também os editais em destaque acima.'
          : 'Nenhum documento encontrado para os filtros selecionados.';
      }
    }

    if (count) {
      count.textContent = 'Exibindo ' + visible + ' de 214 registros';
    }

    if (pageInfo) {
      pageInfo.innerHTML = 'Página <strong>1</strong> de <strong>31</strong> · Total de 214 atos';
    }

    syncTabs(category);
  }

  function syncTabs(category) {
    if (category === 'todos') {
      activeTab = 'todos';
    } else {
      activeTab = category;
    }

    tabs.forEach((tab) => {
      const isActive = tab.getAttribute('data-filter') === activeTab;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
  }

  function selectTab(category) {
    activeTab = category;
    if (categorySelect) categorySelect.value = category;
    applyFilters();
  }

  if (filterBtn) filterBtn.addEventListener('click', applyFilters);

  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(applyFilters, 180);
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFilters();
      }
    });
  }

  if (categorySelect) categorySelect.addEventListener('change', applyFilters);
  if (yearSelect) yearSelect.addEventListener('change', applyFilters);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      selectTab(tab.getAttribute('data-filter') || 'todos');
    });
  });

  /* ---------------------------------------------------------
     2. Termos frequentes e limpeza
  --------------------------------------------------------- */
  $$('.docs-terms button[data-term]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!searchInput) return;
      searchInput.value = button.getAttribute('data-term') || '';
      applyFilters();
      if (tableSection) tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'todos';
      if (yearSelect) yearSelect.value = 'todos';
      selectTab('todos');
      toast('Filtros redefinidos', 'A listagem completa de documentos foi restaurada.', 'info');
    });
  }

  /* ---------------------------------------------------------
     3. Parâmetro de busca vindo do cabeçalho (?q=)
  --------------------------------------------------------- */
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q');

  if (query && searchInput) {
    searchInput.value = query;
    applyFilters();
    if (tableSection) {
      setTimeout(() => tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
    }
  } else {
    applyFilters();
  }

  /* ---------------------------------------------------------
     4. Modal de prévia
  --------------------------------------------------------- */
  const modal = $('#doc-modal');
  const modalTitle = $('#doc-modal-title');
  const modalDownload = $('#doc-modal-download');
  const modalClose = $('#doc-modal-close');
  const modalCancel = $('#doc-modal-cancel');
  let lastFocused = null;

  function openModal(title) {
    if (!modal || !modalTitle) return;
    lastFocused = document.activeElement;
    modalTitle.textContent = title || 'Documento Oficial';
    if (modalDownload) {
      modalDownload.setAttribute('data-file', (title || 'Documento Oficial') + ' (PDF)');
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  $$('[data-preview]').forEach((button) => {
    button.addEventListener('click', () => openModal(button.getAttribute('data-preview')));
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  if (modalDownload) {
    modalDownload.addEventListener('click', () => {
      toast('Download iniciado', 'O arquivo oficial está sendo transferido com segurança.', 'success');
      closeModal();
    });
  }

  /* ---------------------------------------------------------
     5. Exportação CSV e impressão
  --------------------------------------------------------- */
  const exportBtn = $('#export-csv');
  const printBtn = $('#print-table');

  function downloadCsv() {
    const visibleRows = rows.filter((row) => !row.hidden);
    if (!visibleRows.length) {
      toast('Nenhum documento', 'Não há registros visíveis para exportar.', 'warning');
      return;
    }

    const header = ['Tipo/Código', 'Título', 'Órgão Emissor', 'Data', 'Formato'];
    const lines = [header];

    visibleRows.forEach((row) => {
      const cells = $$('td', row);
      const type = cells[0] ? cells[0].innerText.replace(/\s+/g, ' ').trim() : '';
      const title = cells[1] ? cells[1].querySelector('.doc-title-btn').innerText.trim() : '';
      const organ = cells[2] ? cells[2].innerText.trim() : '';
      const date = cells[3] ? cells[3].innerText.trim() : '';
      const format = cells[4] ? cells[4].innerText.trim() : '';
      lines.push([type, title, organ, date, format]);
    });

    const csv = lines
      .map((line) => line.map((cell) => '"' + String(cell).replace(/"/g, '""') + '"').join(';'))
      .join('\r\n');

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'documentos-semed-sao-miguel-dos-campos.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    toast('Exportação concluída', 'O arquivo CSV foi gerado com os registros visíveis.', 'success');
  }

  if (exportBtn) exportBtn.addEventListener('click', downloadCsv);

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ---------------------------------------------------------
     6. Paginação (navegação visual)
  --------------------------------------------------------- */
  $$('.docs-pagination button').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.disabled) return;

      const text = button.textContent.trim();
      const isNav = text === 'Anterior' || text === 'Próxima';
      const pages = $$('.docs-pagination button').filter(
        (btn) => btn.textContent.trim() !== 'Anterior' && btn.textContent.trim() !== 'Próxima' && btn.textContent.trim() !== '...'
      );
      const activeIndex = pages.findIndex((page) => page.classList.contains('is-active'));

      if (isNav) {
        const targetIndex = Math.min(
          pages.length - 1,
          Math.max(0, activeIndex + (text === 'Próxima' ? 1 : -1))
        );
        if (pages[targetIndex] && targetIndex !== activeIndex) pages[targetIndex].click();
        return;
      }

      pages.forEach((page) => {
        page.classList.toggle('is-active', page === button);
        page.removeAttribute('aria-current');
      });
      button.setAttribute('aria-current', 'page');

      if (pageInfo) {
        pageInfo.innerHTML =
          'Página <strong>' + text + '</strong> de <strong>31</strong> · Total de 214 atos';
      }

      toast('Página ' + text, 'Navegação do repositório atualizada.', 'info');
      if (tableSection) tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
