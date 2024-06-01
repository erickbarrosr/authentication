import User from "../models/User";
import bcrypt from "bcrypt";

import createUserToken from "../utils/create-user-token";

class LoginController {
  async authenticateUser(req, res) {
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.status(422).json({ message: "O email é obrigatório." });
      }

      if (!password) {
        return res.status(422).json({ message: "A senha é obrigatória." });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "Usuário não cadastrado." });
      }

      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.status(400).json({ message: "Senha incorreta." });
      }

      const token = await createUserToken(user);

      res.cookie("token", token, {
        domain: process.env.BASE_URL, // Set your domain here
        path: "/", // Cookie is accessible from all paths
        expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
        secure: true, // Cookie will only be sent over HTTPS
        httpOnly: true, // Cookie cannot be accessed via client-side scripts
        sameSite: "None", // Allows the cookie to be sent in requests between sites with credentials
      });

      res.json({ message: "Usuário autenticado com sucesso!", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Falha ao fazer login." });
    }
  }
}

export default new LoginController();
