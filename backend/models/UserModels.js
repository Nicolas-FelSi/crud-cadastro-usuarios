import db from "../database/connection.js"

class UserModels {
    async getAllUsers() {
        try {
            return await db.query("SELECT * FROM usuarios");
        } catch (error) {
            console.log("Erro ao buscar usuários: " + error.stack);
            throw new Error("Erro ao buscar usuários.");
        } finally {
            await db.close();
        }
    }

    async getUserById(id) {
        try {
            return await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        } catch (error) {
            console.log(`Erro ao buscar usuário de ID ${id}: ` + error.stack);
            throw new Error("Erro ao buscar usuário.");
        } finally {
            await db.close();
        }
    }

    async getUserByEmail(email) {
        try {
            
        } catch (error) {
            console.log(`Erro ao buscar usuário de e-mail ${email}` + error.stack);
            throw new Error("Erro ao buscar usuário por e-mail.");
        } finally {
            await db.close();
        }
    }
}

export default new UserModels();