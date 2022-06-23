import { Router } from 'express';
import controller from '../controller';

export default Router()
    .post('/generateToken', controller.auth.generateToken)
    .get('/validateToken', controller.auth.validateToken);