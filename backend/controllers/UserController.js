import UserModels from "../models/UserModels.js";

class UserController {
  async list(req, res) {
    try {
      const users = await UserModels.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    const errors = [];

    if (isNaN(id)) {
      errors.push("Formato do ID inválido.");
    }
    
    try {
      const user = await UserModels.getUserById(id);

      if (user.length === 0) {
        errors.push("Usuário não encontrado")
      }

      if (errors.length !== 0) {
        res.status(400).json(errors)
        return;
      }
      
      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async create(req, res) {
    const { name, email, password } = req.body;
    const errors = [];

    if (!(name && email && password)) {
      errors.push("Os campos não podem estar vazios.");
    }

    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    if (!email.match(regex)) {
      errors.push("O e-mail não é válido.");
    }

    if (errors.length !== 0) {
      res.status(400).json({ errors });
      return;
    }

    try {
      await UserModels.createUser(name, email, password);
      res.json({ message: "Usuário criado com sucesso." });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async update(req, res) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    const errors = [];
    
    if (isNaN(id)) {
      errors.push("Formato do ID inválido.");
    }

    if (!(name && email && password)) {
      errors.push("Os campos não podem estar vazios.");
    }

    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    if (!email.match(regex)) {
      errors.push("O e-mail não é válido.");
    }

    if (errors.length !== 0) {
      res.status(400).json({ errors });
      return;
    }

    try {
      await UserModels.updateUser(id, name, email, password);
      res.json({ message: "Usuário atualizado com sucesso." })
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      return await UserModels.deleteUser(id);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

export default new UserController();
