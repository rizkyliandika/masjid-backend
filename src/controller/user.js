import models from '../db/models/';

var user = {};

user.getAll = async (req, res) => {
    try {
        const user = await models.user.findAll();
        if (user.length > 0) {
            res.status(200).json({
                message: "Data found",
                data: user
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

user.getOne = async (req, res) => {
    try {
        const user = await models.user.findAll({
            where: { id: req.params.id }
        });
        if (user.length > 0) {
            res.status(200).json({
                message: "Data found",
                data: user
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

user.post = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            password: req.body.password,
            age: req.body.age,
            address: req.body.address,
            role: req.body.role
        })
        res.status(201).json({
            message: 'Success create user',
            data: user
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

user.put = async (req, res) => {
    try {
        const user = await models.user.update({
            name: req.body.name,
            password: req.body.password,
            age: req.body.age,
            address: req.body.address,
            role: req.body.role
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Success update user'
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

user.delete = async (req, res) => {
    try {
        const user = await models.user.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: 'Success delete user'
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export default user;