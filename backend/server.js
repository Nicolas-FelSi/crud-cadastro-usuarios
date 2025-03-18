import express from "express"
import dotenv from "dotenv"
import db from "./database/connection.js"
import router from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT;

db.connect();

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});