import { Router } from "express";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();

const router = Router();

//rota autenticada que devolve um codigo do usuario
router.post('/authenticate', authenticateUserController.handle)

// rota para criação de mensagens, que verifica se o usuário esta logado
router.post('/messages', ensureAuthenticated, createMessageController.handle)


export { router };