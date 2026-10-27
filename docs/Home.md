# Guia Completo: Como Adicionar e Alterar Valores

Este é o manual definitivo de como atualizar todas as configurações de preços e receitas da Oficina Mecânica. O sistema foi dividido para ficar organizado, então cada "tipo" de item possui seus próprios dados em arquivos separados.

> [!IMPORTANT]
> Regra de ouro: sempre que for adicionar um item novo, você precisa declará-lo duas vezes no arquivo: primeiro dentro do dicionário de `const` (ex.: `const MATERIAL = {...}`) e depois dentro da lista de objetos correspondente.

---

## 1. Matérias-Primas Básicas (`data/materials.js`)
São os itens primários, como plástico, sucata, vidro e metais.

### Como alterar o preço de um material existente
Procure a lista `const materials = [...]`, encontre o material e mude a linha `price`.

```javascript
{
    id: MATERIAL.REFINED_PLASTIC,
    name: "Plástico Refinado",
    image: "assets/images/refined-plastic.png",
    price: 15 // <-- Altere apenas este número
}
```

### Como criar um novo material do zero
**Passo A:** adicione o ID no enum `MATERIAL` no topo do arquivo (não esqueça da vírgula na linha anterior):

```javascript
const MATERIAL = {
    REFINED_PLASTIC: "refined_plastic",
    REFINED_SCRAP: "refined_scrap",
    NOVO_MATERIAL: "novo_material" // <-- Novo aqui
};
```

**Passo B:** adicione as propriedades dele na lista `const materials = [...]`:

```javascript
{
    id: MATERIAL.NOVO_MATERIAL,
    name: "Fibra de Carbono",
    image: "assets/images/fibra-carbono.png",
    price: 50
}
```

---

## 2. Peças / Componentes de Stage (`data/components.js`)
São as peças craftadas para tunar carros (ECU, filtros, turbinas).

### Como alterar o valor de venda (lucro)
Mude a propriedade `sellPrice`:

```javascript
{
    id: COMPONENT.ECU,
    name: "ECU",
    // ...
    sellPrice: 8500 // <-- Altere o valor de venda aqui
}
```

### Como alterar o Stage
Mude a propriedade `stage` utilizando `STAGE.STAGE_1`, `STAGE.STAGE_2` ou `STAGE.STAGE_3`:

```javascript
stage: STAGE.STAGE_2 // Mudou de Stage 1 para 2
```

### Como alterar a receita (ingredientes de craft)
Se a receita mudar (por exemplo, exigir mais sucata), edite a lista de `ingredients`:

```javascript
ingredients: [
    { id: MATERIAL.REFINED_COPPER, quantity: 150 }, // Aumentou para 150
    { id: MATERIAL.REFINED_PLASTIC, quantity: 100 },
    { id: MATERIAL.REFINED_SCRAP, quantity: 100 }
    // Você pode deletar linhas para remover materiais
]
```

> [!WARNING]
> Certifique-se de que o ID do material que você colocou (`MATERIAL.REFINED_COPPER`) existe de fato no arquivo `materials.js`.

---

## 3. Serviços de Mecânica (`data/mechanic_services.js`)
Serviços como reparo de motor, instalação de peça e reparo de lataria.

### Como alterar a taxa cobrada pelo serviço
Apenas mude a linha `price`:

```javascript
{
    id: SERVICE.REPAIR_ENGINE,
    name: "Reparar Motor",
    price: 1500 // <-- Valor cobrado do cliente em dinheiro
}
```

### Como alterar o que o serviço gasta
Assim como no craft de peças, altere os `ingredients`. Para serviços que não gastam nada (como "Remover Peça"), basta deixar os colchetes vazios `ingredients: []`.

```javascript
ingredients: [
    { id: MATERIAL.REFINED_ALUMINUM, quantity: 7 },
    { id: MATERIAL.REFINED_COPPER, quantity: 10 }
]
```

### Adicionando um novo serviço
Lembre-se da regra de ouro!
1. Vá no `const SERVICE = { ... }` e adicione `NOVO_SERVICO: "novo_servico"`.
2. Vá no `const services = [ ... ]` e adicione o bloco:

```javascript
{
    id: SERVICE.NOVO_SERVICO,
    name: "Polimento Cristalizado",
    price: 300,
    ingredients: [
        { id: MATERIAL.REFINED_GLASS, quantity: 2 }
    ]
}
```

---

## 4. Produtos Finais (`data/products.js`)
Itens de uso final da mecânica, como lockpicks e kit de reparo de motor. O processo é o mesmo.

- O `sellPrice` dita o preço de venda da oficina.
- O `ingredients` dita quantos materiais você queima para fazer esse item.
- Para criar um novo, defina o ID no topo do arquivo em `const PRODUCT` e as propriedades no array `products`.


