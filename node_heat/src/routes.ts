import { Router } from "express";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const authenticateUserController = new AuthenticateUserController();

const router = Router();

//rota autenticada que devolve um codigo do usuario
router.post('/authenticate', authenticateUserController.handle)


export { router };