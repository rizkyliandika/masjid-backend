const bcrypt = require('bcrypt');
import models from '../db/models/';

var user = {};

export const beforeCreate = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt)
}

export const validatePassword = (password, checkPassword) => {
    return bcrypt.compareSync(password, checkPassword)
}

user.getAll = async (req, res) => {
    try {
        const user = await models.user.findAll({
            include: [
                { model: models.post }
            ]
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
    let password = beforeCreate(req.body.password)
    try {
        const user = await models.user.create({
            username: req.body.username,
            fullname: req.body.fullname,
            password: password,
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
            username: req.body.username,
            fullname: req.body.fullname,
            password: req.body.password,
            age: req.body.age,
            address: req.body.address,
            role: req.body.role,
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