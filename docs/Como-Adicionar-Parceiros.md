# Como Adicionar ou Remover Parceiros

As facções, gangues ou empresas que possuem desconto nos serviços da oficina podem ser facilmente gerenciadas pelo arquivo `data/partners.js`.

Para editar os parceiros, abra o arquivo `data/partners.js` e você verá algo assim:

```javascript
const partners = [
    { name: "Crew Blacklist", discount: 10 },
    { name: "YellowJack", discount: 10 },
    { name: "Crew Midnight", discount: 10 },
    { name: "Cassey Dinner", discount: 10 },
    { name: "Crips", discount: 10 },
    { name: "Pawnshop", discount: 10 },
    { name: "Funcionário", discount: 15 }
];
```

## Adicionando um Novo Parceiro

Para adicionar um novo parceiro, vá até o final da lista, adicione uma vírgula (`,`) na última linha existente, e insira a nova linha embaixo:

```javascript
const partners = [
    { name: "Crew Blacklist", discount: 10 },
    // ...
    { name: "Pawnshop", discount: 10 },
    { name: "Funcionário", discount: 15 },             // <-- Coloquei a vírgula aqui
    { name: "Nova Gangue XYZ", discount: 12 }          // <-- Adicionei o novo parceiro
];
```

O `name` aparecerá no menu suspenso da calculadora.
O `discount` é a porcentagem aplicada (no exemplo, 12%). Apenas coloque o número, sem o símbolo `%`.

## Removendo um Parceiro

Basta apagar a linha inteira referente ao parceiro que perdeu o benefício.
Seja cauteloso para não deixar uma vírgula sobrando no final da lista, embora os navegadores modernos costumem ignorar esse erro:

```javascript
const partners = [
    { name: "Crew Blacklist", discount: 10 },
    { name: "YellowJack", discount: 10 } // <-- Último item não precisa de vírgula
];
```

## Alterando o Desconto

Se uma facção renegociar o contrato, apenas mude o número do valor em `discount`.

```javascript
    { name: "Crew Blacklist", discount: 20 }, // Aumentou para 20%
```
