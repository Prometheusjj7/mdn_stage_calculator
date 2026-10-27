# Mechanic Craft Calculator 🛠️

Bem-vindo(a) ao repositório da Mechanic Craft Calculator!
Este projeto é uma ferramenta vital para gerenciar e calcular custos, ingredientes e lucros da oficina mecânica na cidade.

O sistema foi construído pensando inteiramente em facilidade de manutenção e hospedagem gratuita. Toda a calculadora roda localmente no navegador do cliente (Static Web App), o que permite hospedagem em GitHub Pages sem backend.

## 🚀 Funcionalidades

- Calculadora de Stage e Componentes: saiba exatamente quantos materiais básicos são necessários para craftar componentes de Stage 1, 2 e 3.
- Serviços Mecânicos: lista de serviços como reparos de motor e lataria, com seus respectivos custos e exigências de material.
- Produtos Finais: controle de custo para confecção de lockpicks, kits de reparos e garrafas de nitro.
- Sistema de Descontos e Parceiros: aplique o desconto da parceria automaticamente para facções, gangues ou funcionários da oficina.

## 📂 Estrutura do Projeto

Para garantir as melhores práticas de código limpo e coesão, os dados e enums estão separados por domínio dentro da pasta `data/`:

- `data/materials.js`: constantes e preços de matérias-primas (plástico, sucata, vidro, etc.)
- `data/components.js`: enums de stages e receitas de componentes (ECU, filtros, turbinas)
- `data/mechanic_services.js`: custos para os serviços de mecânica
- `data/products.js`: receitas de produtos (lockpicks e garrafas de nitro)
- `data/partners.js`: relação de parceiros e porcentagens de desconto

## 📖 Documentação para Manutenção

Se você é o sucessor deste projeto e precisa fazer alterações cotidianas no jogo, elaboramos documentação para os principais ajustes:

Consulte os guias abaixo:

1. 🏠 [Página Inicial da Documentação](docs/Home.md)
2. 🛠️ [Como Alterar Valores e Receitas de Crafting](docs/Como-Alterar-Valores.md)
3. 🤝 [Como Adicionar ou Remover Parceiros](docs/Como-Adicionar-Parceiros.md)
4. 🌐 [Como Publicar e Atualizar no GitHub Pages](docs/Como-Publicar-no-GitHub-Pages.md)

## 💻 Tecnologias Utilizadas

- HTML5 e CSS3: estruturação semântica e interface de usuário moderna (dark mode / glassmorphism)
- JavaScript Vanilla: lógica de cálculo, manipulação do DOM e estruturação via enums
- Local Storage API: persistência de estado visual
- GitHub Pages: deploy contínuo e gratuito

---
*Desenvolvido com dedicação para gerenciar a oficina. Deixado como legado para os sucessores.*


