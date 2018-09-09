const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Getting the questions'
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'The question has been posted succesfully'
    });
});

router.get('/:questionId', (req,res, next) =>{
    const id = req.params.questionId;
    if (id == 'special') {
        res.status(200).json({
            message: 'Your question was retrieved successfully'
        });
        
    } else{
        res.status(200).json({
            message: 'You passeda wrong question identifier'
        })
    }
});

router.patch('/:questionId', (req,res, next) =>{
    res.status(200).json({
        message:'Question has been updated'
    });
});

router.delete('/:questionId', (req,res, next) =>{
    res.status(200).json({
        message:'The question has been deleted'
    });
});
module.exports = router;