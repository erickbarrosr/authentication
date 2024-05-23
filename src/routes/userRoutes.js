import { Router } from "express";
import UserController from "../controllers/UserController";

const router = new Router();

router.post("/register", UserController.registerUser);

export default router;
