import { Router } from "express"
import UserController from "../controllers/UserController.js"

const router = Router();

router.get("/usuarios", UserController.list);
router.get("/usuarios/:id", UserController.getById);
router.post("/usuarios", UserController.create);
router.put("/usuarios/:id", UserController.update);
router.delete("/usuarios/:id", UserController.delete);

export default router;