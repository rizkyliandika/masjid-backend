import { Router } from 'express';

import controller from '../controller';

export default Router()
    .get('/', controller.auth.validateToken, controller.post.getAll)
    .get('/:id', controller.auth.validateToken, controller.post.getOne)
    .post('/', controller.auth.validateToken, controller.post.post)
    .put('/:id', controller.auth.validateToken, controller.post.put)
    .delete('/:id', controller.auth.validateToken, controller.post.delete)