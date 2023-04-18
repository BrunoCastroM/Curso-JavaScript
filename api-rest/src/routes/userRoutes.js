import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

/* O index e o show não deveriam existir:
router.get('/', userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário
*/
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> Lista todos os usuários -> GET
store ou create -> Cria um novo usuário -> POST
delete -> Apaga um usuário -> DELETE
show -> Mostra um usuário -> GET
update -> Atualiza um usuário -> PATCH ou PUT
*/
