import { Router } from "express";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';


const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();

const router = Router();

//rota autenticada que devolve um codigo do usuario
router.post('/authenticate', authenticateUserController.handle)

// rota para criação de mensagens, que verifica se o usuário esta logado
router.post('/messages', ensureAuthenticated, createMessageController.handle)

// rota que retorna as 3 ultimas mensagens 
router.get('/messages/last3', getLast3MessagesController.handle);

export { router };