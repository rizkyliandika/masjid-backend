import { Router } from 'express';
import UserService from '../services/user';

const userService = new UserService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const item = await userService.findAll();
            res.json({ item });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const findId = await userService.findOne(id);
            if (findId) {
                res.status(200).json({
                    'item': findId
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .post('/', async (req, res) => {
        try {
            const item = await userService.save(req.body);
            console.log('user: ', item);
            if (item) {
                res.status(200).json({
                    'message': 'CREATE USER SUCCESS',
                    'item': item
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .put('/', async (req, res) => {
        try {
            const item = await userService.update(req.body);
            if (item) {
                res.status(200).json({
                    'message': 'UPDATE USER SUCCES',
                    'item': item
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .delete('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const findId = await userService.findOne(id);
            if (findId) {
                const item = await userService.delete(req.body);
                res.status(200).json({
                    'message': 'DELETE ITEM SUCCESS',
                    'item': item
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
