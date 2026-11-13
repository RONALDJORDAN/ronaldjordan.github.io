# Skill: Web Form Designer

## Descrição
Criação de formulários web responsivos e acessíveis usando HTML5, CSS vanilla e JavaScript. Especializado em validação, feedback visual e usabilidade.

## Quando Usar
- Usuário pede para criar um formulário (cadastro, busca, filtros, etc.)
- Necessidade de validação de dados em tempo real
- Precisa de interface responsiva para dispositivos móveis
- Planejamento de aplicações que coletam ou exibem dados estruturados

## Diretrizes de Implementação

### Estrutura Básica
- Use HTML5 semântico (`<form>`, `<fieldset>`, `<legend>`, `<label>`)
- Sempre inclua `type`, `name`, `id` e `required` em campos obrigatórios
- Use CSS Grid ou Flexbox para layouts responsivos

### Validação
- Validação HTML5 nativa (pattern, min, max, type=email, etc.)
- JavaScript para validação customizada e feedback em tempo real
- Mensagens de erro claras e específicas

### Estilo
- Labels acima ou à esquerda (nunca apenas placeholder)
- Feedback visual de estado: hover, focus, error, success
- Contraste de cores adequado (WCAG AA)
- Ícones ou indicadores visuais de campos obrigatórios

### Acessibilidade
- Use `for`/`id` em labels
- `aria-live` para mensagens dinâmicas
- Navegação por teclado funcional
- `fieldset` para agrupar campos relacionados

## Exemplo de Código

```html
<form id="meuFormulario" novalidate>
  <fieldset>
    <legend>Dados Pessoais</legend>
    <div class="campo">
      <label for="nome">Nome *</label>
      <input type="text" id="nome" name="nome" required>
      <span class="erro" id="erro-nome"></span>
    </div>
    <div class="campo">
      <label for="email">E-mail *</label>
      <input type="email" id="email" name="email" required>
      <span class="erro" id="erro-email"></span>
    </div>
  </fieldset>
  <button type="submit">Enviar</button>
</form>
```

```css
.campo {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input.error {
  border-color: #e74c3c;
}

.erro {
  display: block;
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}
```

```javascript
document.getElementById('meuFormulario').addEventListener('submit', function(e) {
  e.preventDefault();
  let valido = true;

  const nome = document.getElementById('nome');
  if (!nome.value.trim()) {
    document.getElementById('erro-nome').textContent = 'Nome é obrigatório';
    nome.classList.add('error');
    valido = false;
  } else {
    document.getElementById('erro-nome').textContent = '';
    nome.classList.remove('error');
  }

  if (valido) {
    // Envia dados
  }
});
```

## Restrições
- Nunca use bibliotecas externas sem confirmação do usuário
- Sempre mantenha o código limpo e organizado
- Priorize usabilidade sobre efeitos visuais complexos
- Teste a responsividade antes de entregar