import {Response, Request} from "express";
import { GetLast3MessagesService } from '../services/GetLast3MessagesService'

class GetLast3MessagesController { 
  async handle(request: Request, response: Response) { 

    const service = new GetLast3MessagesService()

    const messages = await service.execute();

    return response.json(messages)
  }
}

export { GetLast3MessagesController }