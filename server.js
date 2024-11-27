import express from "express";
import routes from "./src/routes/postsRoutes.js";

//
const app = express();
app.use(express.static("uploads")); //Para configurar acesso externo à pasta uploads
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor online...");
});