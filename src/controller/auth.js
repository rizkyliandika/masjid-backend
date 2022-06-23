import controller from '.';
import { validatePassword } from './user';

var jwt = require('jsonwebtoken');

var auth = {};

auth.generateToken = (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    let data = {
        id: req.body.id,
        username: req.body.username
    }

    const token = jwt.sign(data, jwtSecretKey, { expiresIn: '30m' });
    res.send(token);
}

auth.validateToken = (req, res, next) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);

        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return next();
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
}

export default auth;