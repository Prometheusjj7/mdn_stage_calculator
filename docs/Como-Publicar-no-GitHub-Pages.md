# Como Adicionar ou Remover Parceiros

Os parceiros são definidos em `data/partners.js`.

## Estrutura

```javascript
const partners = [
    { name: "Funcionário", discount: 15 },
    { name: "Gangue X", discount: 20 }
];
```

## Como adicionar

1. Abra `data/partners.js`.
2. Adicione um novo objeto dentro do array.
3. Defina `name` e `discount`.

```javascript
{ name: "Família Souza", discount: 10 }
```

## Como remover

- Delete o objeto correspondente do array.
- Mantenha a sintaxe JavaScript válida com vírgulas entre elementos.

## Como usar

Na interface, o seletor de parceiro aplica o `discount` automaticamente e bloqueia o campo manual de desconto.


