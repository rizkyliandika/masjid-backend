import models from '../db/models/';

var post = {};

post.getAll = async (req, res) => {
    try {
        const post = await models.post.findAll();
        if (post.length > 0) {
            res.status(200).json({
                message: "Data found",
                data: post
            })
        } else {
            res.status(200).json({
                message: "Data not found",
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
}

post.getOne = async (req, res) => {
    try {
        const post = await models.post.findAll({
            where: { id: req.params.id }
        });
        if (post.length > 0) {
            res.status(200).json({
                message: "Data found",
                data: post
            })
        } else {
            res.status(200).json({
                message: "Data not found",
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
}

post.post = async (req, res) => {
    try {
        const post = await models.post.create({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
        })
        res.status(201).json({
            message: 'Success create post',
            data: post
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

post.put = async (req, res) => {
    try {
        await models.post.update({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Success update post'
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

post.delete = async (req, res) => {
    try {
        await models.post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Success delete post'
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export default post;