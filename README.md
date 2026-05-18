# Mechanic Craft Calculator 🛠️

Bem-vindo(a) ao repositório da Mechanic Craft Calculator! 
Este projeto é uma ferramenta vital para gerenciar e calcular custos, ingredientes e lucros da oficina mecânica na cidade. 

O sistema foi construído pensando inteiramente em **facilidade de manutenção e hospedagem gratuita**. Toda a calculadora roda localmente no navegador do cliente (Static Web App), o que permite ser hospedada gratuitamente pelo **GitHub Pages**, sem necessidade de bancos de dados complexos ou servidores back-end.

## 🚀 Funcionalidades

- **Calculadora de Stage e Componentes**: Saiba exatamente quantos materiais básicos são necessários para craftar componentes de Stage 1, 2 e 3.
- **Serviços Mecânicos**: Lista de serviços como reparos de motor e lataria, com seus respectivos custos e exigências de material.
- **Produtos Finais**: Controle de custo para confecção de lockpicks, kits de reparos e garrafas de nitro.
- **Sistema de Descontos e Parceiros**: Aplique o desconto da parceria automaticamente para facções, gangues ou funcionários da oficina.

## 📂 Estrutura do Projeto

Para garantir as melhores práticas de código limpo (*Clean Code*) e coesão, os dados e enums estão separados por domínio dentro da pasta `data/`:

- `data/materials.js`: Constantes e preços de Matérias-primas (Plástico, Sucata, Vidro, etc.)
- `data/components.js`: Enums de Stages e receitas de Componentes (ECU, Filtros, Turbinas)
- `data/mechanic_services.js`: Custos para os Serviços de Mecânica
- `data/products.js`: Receitas de Produtos (Lockpicks e Garrafas de Nitro)
- `data/partners.js`: Relação de Parceiros e porcentagens de desconto

## 📖 Documentação para Manutenção

Se você é o sucessor deste projeto e precisa fazer alterações cotidianas no jogo (como aumento de preço do refino ou alteração na receita do Lockpick), nós elaboramos uma documentação focada no **passo a passo**. Você não precisa ter conhecimento avançado em programação para manter este projeto vivo!

Consulte os guias abaixo (também disponíveis na Wiki do GitHub):

1. 🏠 **[Página Inicial da Documentação](docs/Home.md)**
2. 🛠️ **[Como Alterar Valores e Receitas de Crafting](docs/Como-Alterar-Valores.md)**
3. 🤝 **[Como Adicionar ou Remover Parceiros](docs/Como-Adicionar-Parceiros.md)**
4. 🌐 **[Como Publicar e Atualizar no GitHub Pages](docs/Como-Publicar-no-GitHub-Pages.md)**

## 💻 Tecnologias Utilizadas

- **HTML5 & CSS3**: Para estruturação semântica e interface de usuário moderna (Dark Mode / Glassmorphism UI).
- **Vanilla JavaScript**: Lógica de cálculo, manipulação do DOM e estruturação via Enums.
- **Local Storage API**: Persistência de estado visual (como preferência de visualização de valores).
- **GitHub Pages**: Para o deploy contínuo (CI/CD nativo e estático).

---
*Desenvolvido com dedicação para gerenciar a oficina. Deixado como legado para os sucessores.*
