const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message:'answers were fetched'
    });
});

router.post('/', (req,res,next) =>{
    res.status(201).json({
        message:'answer was posted'
    });
});

router.get('/:answerId', (req,res,next) =>{
    res.status(200).json({
        message:'answer details',
        answerId: req.params.answerId
    });
});

router.delete('/:answerId', (req,res,next) =>{
    res.status(200).json({
        message:'order deleted',
        answerId: req.params.answerId
    });
});
module.exports = router;