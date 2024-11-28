# README

## Como Rodar o Projeto FoodShop

Este guia irá ajudá-lo a configurar e executar o projeto React utilizando Yarn ou npm. Siga os passos abaixo para garantir que tudo esteja configurado corretamente.

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar se ele está instalado executando o seguinte comando no terminal:

```bash
node -v
```

Você pode usar Yarn ou npm para instalar as dependências do projeto.

#### Usando Yarn

1. Instale o Yarn, caso ainda não o tenha:

   ```bash
   npm install --global yarn
   ```

2. Instale as dependências do projeto:

   ```bash
    yarn install
   ```

#### Usando NPM

1. Instale as dependências do projeto:

```bash
npm install
```

### Executando o Projeto

Após instalar todas as dependências, é necessário iniciar o servidor backend antes de executar o frontend.

#### 1. Rodando o servidor backend

Há um arquivo `server.js` incluído no projeto que serve a API para evitar erros de CORS. Para iniciar o backend, siga os passos abaixo:

1. Certifique-se de estar no diretório onde o `server.js` está localizado.
2. Inicie o servidor:

   ```bash
   node server.js
   ```

O servidor backend rodará na porta 3000. Modifique se necessário.

#### 2. Rodando o frontend

Com o backend rodando, inicie o servidor de desenvolvimento do frontend:

##### Usando Yarn:

```bash
yarn dev
```

##### Usando NPM:

```bash
npm run dev
```

O frontend abrirá por padrão na porta 5173.
