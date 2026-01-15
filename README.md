# 📦 Landing Page Template

### 🔗 [Clique aqui para ver o Template Online](https://landing-page-wine-mu.vercel.app/)

Um template **White Label**, moderno e performático para Landing Pages. Desenvolvido com **React**, **Vite** e **Tailwind CSS**.

Este projeto foi arquitetado como uma **SPA (Single Page Application)** altamente personalizável. Todo o conteúdo (textos, preços, links e contatos) é gerenciado através de um único arquivo de configuração (`src/config/content.jsx`), permitindo a criação rápida de sites para SaaS ou serviços.

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)**: Biblioteca para construção da interface.
- **[Vite](https://vitejs.dev/)**: Tooling de frontend ultrarrápido.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização utility-first.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações de entrada (Scroll Reveal).
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)**: Gerenciamento de SEO e Meta Tags dinâmicas.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas (Navegação SPA).
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   ├── layout/      # Navbar, Footer e estruturas fixas
│   ├── sections/    # Hero, Pricing, Features (Consomem o config)
│   ├── ui/          # Elementos base reutilizáveis (Botões, Toggle de Tema)
│   └── utils/       # Animações (ScrollAnimation) e Utilitários
├── config/
│   └── content.jsx  # 🧠 ARQUIVO DE CONFIGURAÇÃO (Edite aqui)
├── pages/           # Páginas de conteúdo (Home, Termos, Docs...)
└── App.jsx          # Configuração de Rotas
```

## 🛠️ Instalação e Execução
Siga os passos abaixo para rodar o projeto em sua máquina.

## Pré-requisitos
Certifique-se de ter o Node.js instalado.

## 1. Instalar Dependências
Abra o terminal na pasta do projeto e execute:
npm install

## 2. Rodar em Desenvolvimento
Inicie o servidor local para ver o site funcionando e editá-lo em tempo real:
npm run dev
