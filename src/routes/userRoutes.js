import { Router } from "express";
import UserController from "../controllers/UserController";
import LoginController from "../controllers/LoginController";

const router = new Router();

router.post("/register", UserController.registerUser);
router.post("/login", LoginController.authenticateUser);
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

export default router;
