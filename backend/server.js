import express from "express"
import dotenv from "dotenv"
import database from "./database/connection.js"

dotenv.config();

const app = express();
const port = process.env.PORT;

database.connect();

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});