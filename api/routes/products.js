const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    })
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    
    if (id === 'special') {
        res.status(200).json({
            message: 'You found the special id!',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an id to GET',
        })
    }
});

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID;
        res.status(200).json({
            message: 'id modified with PATCH',
        })
});

router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
        res.status(200).json({
            message: 'id DELETED',
        })
});


module.exports = router;