import express from 'express';
let router = express.Router()

router.get('/post', (req, res, next) => {
    console.log('this is login!', new Date());
    res.send('this is post v1' + new Date());
})

export default router