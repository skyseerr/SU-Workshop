const express = require('express');

const cubeServise = require('../services/cubeService');
const cubeAccessoryController = require('./cubeAccessoryController');

const router = express.Router();


const createCubePage = (req, res) => {

    res.render('cube/create');

};

const createCube = async (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body;
    
    try {

        await cubeServise.create(name, description, imageUrl, difficulty)
        res.redirect('/');

    } catch (error) {

        res.status(400).send(error.message).end(0);

    }

};

const cubeDeateils = async (req, res) => {

    let cube = await cubeServise.getOne(req.params.cubeId);
    res.render('cube/details', { ...cube });

};

router.get('/create', createCubePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDeateils);
router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;