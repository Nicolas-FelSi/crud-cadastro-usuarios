import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const { Pool } = pg;

class Database {
    constructor() {
        this.pool = new Pool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
    }

    async connect() {
        try {
            await this.pool.connect();
            console.log("Banco conectado com sucesso.");
        } catch (error) {
            console.log("Erro de conexão com o banco de dados: " + error.stack);
            throw new Error("Erro de conexão com o banco de dados.");
        }
    }

    async query(sql, params = []) {
        try {
            const result = await this.pool.query(sql, params);
            return result.rows
        } catch (error) {
            console.log("Erro na consulta SQL: " + error.stack);
            throw new Error("Erro na consulta SQL.");
        }
    }
}

export default new Database();