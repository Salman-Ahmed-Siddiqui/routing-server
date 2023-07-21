import express from 'express';
let router = express.Router()

router.get('/comment', (req, res, next) => {
    console.log('this is login!', new Date());
    res.send('this is comment v2' + new Date());
})

export default router