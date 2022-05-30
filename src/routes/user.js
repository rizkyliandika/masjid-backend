import { Router } from 'express';
import controller from '../controller';

export default Router()
    .get('/', controller.user.getAll)
    .get('/:id', controller.user.getOne)
    .post('/', controller.user.post)
    .put('/:id', controller.user.put)
    .delete('/:id', controller.user.delete)

