import { Router } from 'express';

import controller from '../controller';

export default Router()
    .get('/', controller.post.getAll)
    .get('/:id', controller.post.getOne)
    .post('/', controller.post.post)
    .put('/:id', controller.post.put)
    .delete('/:id', controller.post.delete)