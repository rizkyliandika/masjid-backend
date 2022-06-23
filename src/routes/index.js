import express from 'express';
import UserRoute from './user';
import PostRoute from './post';
import AuthRoute from './auth';
// import Security from '../middleware/security.mdw';



export default express.Router()
    // .use(Security)
    .use('/user', UserRoute)
    .use('/post', PostRoute)
    .use('/auth', AuthRoute)
    .use((req, res, nex) => {
        res.status(404).json({ message: 'Not found.' });
    })
