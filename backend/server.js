import express from "express"
import dotenv from "dotenv"

dotenv.config();

import db from "./database/connection.js"


const app = express();
const port = process.env.PORT;

db.connect();

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});