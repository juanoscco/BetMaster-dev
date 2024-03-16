import { Request, Response } from "express";
import { User } from "../entity/User";
import * as jwt from "jsonwebtoken";

const config = {
  jwtSecret: "secreto_para_generar_el_token_jwt",
};

class UserController {
  async register(req: Request, res: Response) {
    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "El usuario ya está registrado" });
      }

      // Guardar el nuevo usuario en la base de datos
      const newUser = User.create({ username, email, password });
      await newUser.save();

      res.json({ message: "Usuario registrado correctamente" });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      res
        .status(500)
        .json({ message: "Ocurrió un error al registrar usuario" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email, password } });
      if (!user) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: "1h" });
      res.json({ user, token });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).json({ message: "Ocurrió un error al iniciar sesión" });
    }
  }
}

export default UserController;
