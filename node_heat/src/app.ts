import "dotenv/config";
import express from 'express';
import { router } from "./routes";
import cors from 'cors';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: { 
    origin: "*"
  }
});

io.on('connection', socket => {
  console.log(`Usuário conectado no socket ${socket.id}`)
});

app.use(express.json());

app.use(router);


// rota para se autenticar
app.get('/github', (request, response) => { 
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

//rota autenticada que devolve um codigo do usuario, que foi configurada com o GITHUB
app.get('/signin/callback', (request, response) => { 
  const { code } = request.query;

  return response.json(code);
})

export { serverHttp, io }