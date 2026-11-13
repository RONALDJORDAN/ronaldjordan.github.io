# Skill: CSV Data Processor

## Descrição
Processamento de arquivos CSV (delimitados por vírgula, ponto e vírgula, tabulação) para extração de estatísticas, normalização de dados e exportação de relatórios.

## Quando Usar
- Usuário fornece um CSV e pede para processar
- Precisa de estatísticas, contagem, agrupamento de dados
- Planejamento de relatórios a partir de dados tabulares
- Necessidade de normalizar ou limpar dados de CSV

## Diretrizes de Implementação

### Leitura do CSV
- Use codificação `utf-8-sig` para remover BOM
- Suporte a delimitadores: vírgula (`,`), ponto e vírgula (`;`), tabulação (`\t`)
- Use `csv.DictReader` do módulo csv do Python
- Trate valores ausentes como string vazia

### Normalização de Dados
- Trim em todas as strings
- Padronize datas para formato ISO (YYYY-MM-DD) ou DD/MM/YYYY
- Normalize nomes de categorias (ex: "4º ANO", "4 ANO", "4º ANO " → "4 ANO")
- Converta números para float/int conforme apropriado

### Estatísticas Comuns
- Contagem total de registros
- Contagem por categoria (escola, turma, curso, etc.)
- Distribuição por range (faixa etária, faixa de valores)
- Valores máximo, mínimo, média

### Exportação
- JSON para uso em aplicações web
- CSV formatado para Excel/planilhas
- Relatório em texto para leitura rápida

## Exemplo de Código

```python
import csv
from collections import Counter, defaultdict

def processar_csv(caminho, delimitador=';'):
    with open(caminho, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f, delimiter=delimitador)
        rows = list(reader)
    
    # Estatísticas básicas
    total = len(rows)
    colunas = list(rows[0].keys()) if rows else []
    
    # Contagem por categoria
    por_escola = Counter(r['Escola'].strip() for r in rows)
    por_turma = Counter(normalizar_turma(r['Turma']) for r in rows)
    
    return {
        'total': total,
        'colunas': colunas,
        'por_escola': por_escola,
        'por_turma': por_turma,
        'rows': rows
    }

def normalizar_turma(turma):
    """Normaliza variações de nomes de turma."""
    t = turma.strip().upper()
    t = t.replace('º', '').replace('°', '').replace('ª', '')
    while '  ' in t:
        t = t.replace('  ', ' ')
    return t.strip()
```

## Restrições
- Nunca exiba dados sensíveis (CPF, RG, endereços) sem autorização
- Use codificação UTF-8 em todos os arquivos de saída
- Mantenha o código Python limpo e documentado
- Teste com arquivos de diferentes tamanhos e formatos