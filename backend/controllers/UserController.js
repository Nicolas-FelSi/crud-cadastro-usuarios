import UserModels from "../models/UserModels";

class UserController {
    async list() {
        return await UserModels.getAllUsers();
    }
}