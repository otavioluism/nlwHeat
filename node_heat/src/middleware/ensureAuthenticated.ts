import { NextFunction, Request, Response } from "express-serve-static-core";
import { verify } from 'jsonwebtoken';

interface IPayload { 
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) { 
  const authToken = request.headers.authorization;

  if(!authToken) { 
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }

  // desestruturação do token 
  // Bearer dsajdiasud838943989dhsjdhs
  const [ , token ] = authToken.split(" ")

  try { 
    // retorno do id do usuario 
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    request.user_id = sub;

    return next();

  }catch (err) {

    return response.status(401).json({
      errorCode: "token.expired"
    });
    
  }
}