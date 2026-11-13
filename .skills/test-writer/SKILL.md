# Skill: Test Writer

## Descrição
Criação de testes automatizados para aplicações web (HTML/CSS/JS) e scripts Python. Cobertura de casos de sucesso, erro e borda.

## Quando Usar
- Usuário pede para criar testes
- Precisa de validação de funcionalidades implementadas
- Planejamento de garantia de qualidade
- Refatoração que requer validação

## Diretrizes de Teste

### Tipos de Teste
- **Unitário**: Testa funções isoladamente
- **Integração**: Testa interação entre componentes
- **E2E**: Testa fluxo completo do usuário

### Ferramentas Recomendadas
- Python: `unittest` (padrão) ou `pytest`
- JavaScript: `Jest` ou `Mocha` (se permitido pelo projeto)
- Para HTML/CSS/JS puro: use testes manuais ou scripts de verificação

### Estrutura Básica

```python
import unittest
from processar_dados import normalizar_turma

class TestNormalizarTurma(unittest.TestCase):
    def test_remove_acentos(self):
        self.assertEqual(normalizar_turma("4º ANO"), "4 ANO")
    
    def test_normaliza_espacos(self):
        self.assertEqual(normalizar_turma("4  ANO"), "4 ANO")
    
    def test_minuscula(self):
        self.assertEqual(normalizar_turma("4º ano"), "4 ANO")

if __name__ == '__main__':
    unittest.main()
```

### Critérios de Boa Qualidade
- Cada teste deve testar uma única coisa (isolamento)
- Use nomes descritivos (test_deve_...)
- Evite dependências entre testes
- Limpeza pós-teste (teardown)

## Restrições
- Nunca crie testes que dependam de estado externo
- Testes devem ser rápidos e independentes
- Evite testes frágeis (que falham sem razão real)