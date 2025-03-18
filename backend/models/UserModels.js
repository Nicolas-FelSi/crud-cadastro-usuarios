import db from "../database/connection.js"
// import bcrypt from "bcrypt"

class UserModels {
    async getAllUsers() {
        try {
            return await db.query("SELECT * FROM usuarios"); 
        } catch (error) {
            console.log("Erro ao buscar usuários: " + error.stack);
            throw new Error("Erro ao buscar usuários.");
        }
    }

    async getUserById(id) {
        try {
            return await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        } catch (error) {
            console.log(`Erro ao buscar usuário de ID ${id}: ` + error.stack);
            throw new Error("Erro ao buscar usuário.");
        }
    }

    async getUserByEmail(email) {
        try {
            
        } catch (error) {
            console.log(`Erro ao buscar usuário de e-mail ${email}` + error.stack);
            throw new Error("Erro ao buscar usuário por e-mail.");
        }
    }

    async createUser(name, email, password) {
        // const hashedPassword = bcrypt.hash(password, 10);
        
        try {
            const result = await db.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
            console.log("model: "+result)
        } catch (error) {
            console.log("Erro ao criar usuário: " + error.stack);
            throw new Error("Erro ao criar usuário.");
        }
    }

    async updateUser(id, name, email, password) {
        try {
            return await db.query("UPDATE usuarios SET name=$1, email=$2, password=$3 WHERE id = $4 RETURNING *", [name, email, password, id]);
        } catch (error) {
            console.log(`Erro ao atualizar usuário de ID ${id}: ` + error.stack);
            throw new Error("Erro ao atulizar usuário.");
        }
    }

    async deleteUser(id) {
        try {
            return await db.query("DELETE FROM usuarios WHERE id = $1 RETURNING *", [id]);
        } catch (error) {
            console.log("Erro ao deletar usuário de ID ${id}" + error.stack);
            throw new Error("Erro ao deletar usuário.");
        }
    }
}

export default new UserModels();