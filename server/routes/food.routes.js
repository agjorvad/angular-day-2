const express = require('express');
const router = require('express').Router();
const Food = require('../models/food.schema');


router.get('/', (req, res) =>{
    Food.find({})
    .then((databaseResults) => {
        //good things happened
        res.send(databaseResults);
    })
    .catch((error) => {
        console.log('errorfind', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) =>{
    const foodToAdd = req.body;
    console.log(foodToAdd);
    Food.create(foodToAdd)
    .then((databaseResults) => {
        //good things happened
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error find', error);
        res.sendStatus(500);
    });
});

router.put('/', (req, res )=>{
    Food.findByIdAndUpdate(req.params.foodId, req.body, {new: true})
    .then((databaseResults) => {
        //good things happened
        res.send(databaseResults);
    })
    .catch((error) => {
        console.log('error find', error);
        res.sendStatus(500);
    });
});

module.exports = router;