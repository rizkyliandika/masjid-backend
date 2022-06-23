import { Router } from 'express';
import controller from '../controller';

export default Router()
    .get('/', controller.auth.validateToken, controller.user.getAll)
    .get('/:id', controller.auth.validateToken, controller.user.getOne)
    .post('/', controller.auth.validateToken, controller.user.post)
    .put('/:id', controller.auth.validateToken, controller.user.put)
    .delete('/:id', controller.auth.validateToken, controller.user.delete)

