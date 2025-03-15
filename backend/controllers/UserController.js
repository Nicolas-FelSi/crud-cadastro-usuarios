import UserModels from "../models/UserModels.js";

class UserController {
  async list(req, res) {
    try {
      return await UserModels.getAllUsers();
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      return await UserModels.getUserById(id);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async create(req, res) {
    const { name, email, password } = req.body;

    try {
      return await UserModels.createUser(name, email, password);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async update(req, res) {
    const { name, email, password } = req.body;
    const { id } = req.params;

    try {
      return await UserModels.updateUser(id, name, email, password);
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
