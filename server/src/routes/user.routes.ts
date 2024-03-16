import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Ruta para registrar un nuevo usuario
router.post('/register', userController.register.bind(userController));

// Ruta para iniciar sesión
router.post('/login', userController.login.bind(userController));

export default router;