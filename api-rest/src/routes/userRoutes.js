import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> Lista todos os usuários -> GET
store ou create -> Cria um novo usuário -> POST
delete -> Apaga um usuário -> DELETE
show -> Mostra um usuário -> GET
update -> Atualiza um usuário -> PATCH ou PUT
*/
