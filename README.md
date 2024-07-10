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

Após instalar todas as dependências, você pode iniciar o servidor de desenvolvimento.

#### Usando Yarn

```bash
yarn dev
```

### Tratando Erros de CORS

Se você encontrar erros de CORS (Cross-Origin Resource Sharing), pode utilizar a seguinte configuração no arquivo `axios.ts`:

```typescript
const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/cdn-dev.preoday.com/challenge/",
});
```
