import { Router } from 'express';
import PostService from '../services/post';

const postService = new PostService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const item = await postService.findAll();
            res.json({ item });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .get('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const findId = await postService.findOne(id);
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
            const item = await postService.create(req.body);
            if (item) {
                res.status(200).json({
                    'message': 'CREATE POST SUCCESS',
                    'item': item
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
    .put('/', async (req, res) => {
        try {
            const item = await postService.update(req.body);
            if (item) {
                res.status(200).json({
                    'message': 'UPDATE POST SUCCES',
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
            const findId = await postService.findOne(id);
            if (findId) {
                const item = await postService.delete(req.body);
                res.status(200).json({
                    'message': 'DELETE ITEM SUCCESS',
                    'item': item
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
