import express from "express";
import "./src/config/database";
import userRoutes from "./src/routes/userRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", userRoutes);
  }
}

export default new App().app;
