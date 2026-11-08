/* ============================================================
   SEMED São Miguel dos Campos — Busca e Modal de Escolas
   ============================================================ */

(function () {
  const input = document.getElementById('escola-search-input');
  const resultados = document.getElementById('escola-resultados');
  const cards = document.querySelectorAll('.escola-card');

  // Modal
  const modal = document.getElementById('escola-modal');
  const overlay = document.getElementById('escola-modal-overlay');
  const btnClose = document.getElementById('escola-modal-close');

  const elTipo = document.getElementById('modal-tipo');
  const elNome = document.getElementById('modal-nome');
  const elTelefone = document.getElementById('modal-telefone');
  const elEndereco = document.getElementById('modal-endereco');
  const elMunicipio = document.getElementById('modal-municipio');
  const elMapa = document.getElementById('modal-mapa-iframe');

  if (!input || !resultados || cards.length === 0) return;

  // Telefone padrão da SEMED (use valores reais quando disponíveis)
  const TELEFONE_PADRAO = '(82) 3271-1234';
  const MUNICIPIO = 'São Miguel dos Campos - AL';

  // Coordenadas aproximadas por bairro (lat, lng) — São Miguel dos Campos - AL
  const COORDS_POR_BAIRRO = {
    centro: '-9.7833,-36.3500',
    helio-jatoba: '-9.7900,-36.3600',
    helio-jatoba-3: '-9.7920,-36.3620',
    fatima: '-9.7750,-36.3450',
    coite: '-9.8100,-36.3800',
    bela-vista: '-9.7780,-36.3480',
    geraldo-sampaio: '-9.7880,-36.3550',
    humberto-alves: '-9.7850,-36.3520',
    paraiso: '-9.7800,-36.3490',
    zona-rural: '-9.8200,-36.3900',
  };

  // Telefone por bairro (padrão da SEMED, substitua pelos reais quando tiver)
  const TELEFONE_POR_BAIRRO = {
    centro: '(82) 3271-1234',
    helio-jatoba: '(82) 3271-1234',
    helio-jatoba-3: '(82) 3271-1234',
    fatima: '(82) 3271-1234',
    coite: '(82) 3271-1234',
    bela-vista: '(82) 3271-1234',
    geraldo-sampaio: '(82) 3271-1234',
    humberto-alves: '(82) 3271-1234',
    paraiso: '(82) 3271-1234',
    zona-rural: '(82) 3271-1234',
  };

  // Gera IDs únicos para cada card baseado no nome da escola
  cards.forEach(function (card) {
    const titulo = card.querySelector('h3');
    if (titulo && !card.id) {
      const slug = titulo.textContent
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      card.id = 'escola-' + slug;
    }

    // Abre modal ao clicar no card
    card.addEventListener('click', function () {
      const tipo = this.querySelector('.escola-card__tipo')?.textContent || '';
      const nome = this.querySelector('h3')?.textContent || '';
      const enderecoEl = this.querySelector('.escola-card__body p');
      const endereco = enderecoEl ? enderecoEl.textContent.replace(/^.*?\s/, '') : '';
      const bairro = this.getAttribute('data-bairro') || 'centro';

      elTipo.textContent = tipo;
      elNome.textContent = nome;
      elTelefone.textContent = TELEFONE_POR_BAIRRO[bairro] || TELEFONE_PADRAO;
      elEndereco.textContent = endereco || 'Endereço não informado';
      elMunicipio.textContent = MUNICIPIO;

      const coords = COORDS_POR_BAIRRO[bairro] || COORDS_POR_BAIRRO.centro;
      elMapa.src =
        'https://www.openstreetmap.org/export/embed.html?bbox=' +
        encodeURIComponent(coords) +
        '&layer=mapnik&marker=' + coords;

      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  // Fecha modal
  function fecharModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    elMapa.src = ''; // para de carregar o mapa
  }

  btnClose.addEventListener('click', fecharModal);
  overlay.addEventListener('click', fecharModal);

  // Fecha com ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) {
      fecharModal();
    }
  });

  // Abre/fecha dropdown ao clicar fora
  document.addEventListener('click', function (e) {
    if (!input.contains(e.target) && !resultados.contains(e.target)) {
      resultados.hidden = true;
      resultados.innerHTML = '';
    }
  });

  input.addEventListener('focus', function () {
    if (input.value.trim() !== '' && resultados.children.length > 0) {
      resultados.hidden = false;
    }
  });

  input.addEventListener('input', function () {
    const termo = this.value.toLowerCase().trim();
    resultados.innerHTML = '';

    if (termo === '') {
      resultados.hidden = true;
      cards.forEach(function (card) {
        card.style.display = '';
      });
      return;
    }

    let encontrou = false;

    cards.forEach(function (card) {
      const texto = card.textContent.toLowerCase();
      const corresponde = texto.includes(termo);

      card.style.display = corresponde ? '' : 'none';

      if (corresponde) {
        const titulo = card.querySelector('h3');
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'escola-resultado-item';
        item.textContent = titulo ? titulo.textContent : card.textContent.trim();
        item.setAttribute('data-target', card.id);
        item.addEventListener('click', function () {
          const alvo = document.getElementById(this.getAttribute('data-target'));
          if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            alvo.style.boxShadow = '0 0 0 4px var(--primary)';
            setTimeout(function () {
              alvo.style.boxShadow = '';
            }, 1500);
          }
          resultados.hidden = true;
          input.value = '';
        });
        resultados.appendChild(item);
        encontrou = true;
      }
    });

    resultados.hidden = !encontrou;
  });
})();
