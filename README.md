# AutoTaxa PT

Funil de produtos digitais para revendedores em Portugal que importam de fora da UE.
Produto da A Bilonai Group.

| Etapa | Produto | Preço | Ficheiro |
|---|---|---|---|
| Principal | Planilha AutoTaxa PT | €19 | `produtos/AutoTaxa-PT-v2026.10.xlsx` |
| Upsell | Workbook «Importar da China sem surpresas» | €12 | `produtos/Workbook-Importar-da-China-sem-Surpresas.pdf` |
| Downsell | Checklist da primeira importação | €5 | `produtos/Checklist-Primeira-Importacao-Portugal.pdf` |

Entrega da planilha: `produtos/Entrega-AutoTaxa-PT.pdf` (link de download do Google Drive). Suporte: WhatsApp +244 955 968 159 · autotaxapro@bilonai.com

## Estrutura

- `site/` — páginas de venda (as únicas publicadas pela Vercel, ver `vercel.json`):
  `index` (19 €) → `upsell` (12 €) → `downsell` (5 €) → `obrigado`, mais `termos` e `privacidade`.
  **Links de checkout, pixel e contactos: editar só `site/config.js`.** O pixel só carrega se o visitante aceitar cookies.
- `produtos/` — ficheiros entregues ao cliente. **Não são publicados no site.** Carregar na plataforma de checkout.
- `fontes/` — scripts e HTML que geram os produtos (planilha com openpyxl; PDFs com Playwright).

## Regras usadas (rever quando mudarem)

Direito fixo de 3 € por tipo de produto em encomendas até 150 € (desde 1 jul 2026), IVA 23 / 22 / 16 %,
manuseamento CTT 7 € + IVA. Os valores estão na folha «Parâmetros» da planilha.
