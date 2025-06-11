# 🌌 Chat LLM Astronomia 🌟

Um chatbot de linguagem natural especializado em Astronomia, com backend em Node.js + TypeScript e frontend simples em HTML/CSS/JS.

---

## 🚀 Sobre o projeto

Este projeto é um chatbot LLM que responde perguntas sobre Astronomia — explicando conceitos científicos sobre o universo, estrelas, planetas, buracos negros, galáxias, sistema solar e outros fenômenos astronômicos.

O backend utiliza a API do OpenRouter para gerar as respostas da IA, enquanto o frontend é uma interface leve, simples e funcional feita com HTML, CSS e JavaScript puro.

---

## 📂 Estrutura do projeto

/
├── backend/
│ └── index.ts # Servidor Express que faz proxy para API OpenRouter
├── frontend/
│ ├── index.html # Interface do chat Astronomia
│ ├── style.css # Estilos simples para o frontend
│ └── script.js # Lógica frontend para comunicação com backend
└── .env # Variáveis de ambiente, incluindo a chave da OpenRouter


---

## ⚙️ Setup e execução

### 1. Clone o repositório

```bash
git clone https://github.com/Juliana162702/Space_Chat_LLM
cd seu-repositorio

2. Configurar o backend

Entre na pasta do backend:

cd backend

Instale as dependências:

npm install

Crie o arquivo .env com a sua chave da OpenRouter API:

OPENROUTER_API_KEY=seu_token_aqui
PORT=4000

3. Rodar o backend

Para rodar em modo desenvolvimento com hot reload:

npm run dev

Ou para compilar e rodar a versão buildada:

npm run build
npm start

O servidor ficará disponível em: http://localhost:4000
4. Abrir o frontend

No diretório raiz ou dentro da pasta frontend/, abra o arquivo index.html direto no navegador.
Também pode servir via Live Server do VSCode ou outro servidor estático.
🕹 Como usar

    Digite uma pergunta sobre Astronomia na caixa de texto.

    Clique em Enviar.

    Aguarde a resposta científica da IA aparecer no chat.

🔮 Tecnologias usadas

    Node.js + Express + TypeScript

    Axios para chamadas HTTP

    API OpenRouter (modelo para chat LLM)

    HTML, CSS e JavaScript puro no frontend

🎨 Visual e estilo

    Layout simples e clean para foco no conteúdo científico

    Caixa de texto clara e botões acessíveis

    Respostas exibidas de forma legível e organizada

⚠️ Atenção

    Não esqueça de configurar a variável OPENROUTER_API_KEY no seu .env.

    O backend deve estar rodando para o frontend funcionar.

    A API OpenRouter pode ter limitações no uso gratuito.

📫 Contato

Desenvolvido Juliana Reis
