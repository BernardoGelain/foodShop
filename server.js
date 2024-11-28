import axios from "axios";
import express from "express";

const app = express();
const PORT = 3000; // Porta do backend (diferente do frontend)

// Configurações do CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Servir arquivos estáticos do frontend após o build - descomentar se necessário
// app.use(express.static(path.join(__dirname, "dist")));

app.get("/proxy/*", async (req, res) => {
  const targetUrl = `https://cdn-dev.preoday.com/challenge/${req.params[0]}`;

  console.log("Requisição recebida para URL:", targetUrl); // Log da URL de destino

  try {
    const response = await axios.get(targetUrl);

    console.log("Resposta recebida:", response.data); // Log da resposta do servidor de destino

    res.json(response.data); // Retorna a resposta para o frontend
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
