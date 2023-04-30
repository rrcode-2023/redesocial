import "reflect-metadata";
import "express-async-errors";
import app from "./app";
// Importando o arquivo data-source.ts para estabelecer a conexão com o banco de dados
import "./data-source";

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
