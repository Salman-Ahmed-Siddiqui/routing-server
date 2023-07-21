import express from 'express';
let router = express.Router()

router.get('/feed', (req, res, next) => {
    console.log('this is login!', new Date());
    res.send('this is feed v1' + new Date());
})

export default router