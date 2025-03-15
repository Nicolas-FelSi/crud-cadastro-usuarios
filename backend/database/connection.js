import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const { Client } = pg;

class Database {
    constructor() {
        this.client = new Client({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Banco conectado com sucesso.");
        } catch (error) {
            console.log("Erro de conexão com o banco de dados: " + error.stack);
            throw new Error("Erro de conexão com o banco de dados.");
        }
    }

    async query(sql, params = []) {
        try {
            await this.client.query(sql, params);
        } catch (error) {
            console.log("Erro na consulta SQL: " + error.stack);
            throw new Error("Erro na consulta SQL.");
        }
    }

    async close() {
        await this.client.end();
    }
}

export default new Database();