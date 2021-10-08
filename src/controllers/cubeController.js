const express = require('express');

const cubeServise = require('../services/cubeService');

const router = express.Router();

const createCubePage = (req, res) => {

    let cubes = cubeServise.getAll();

    console.log(cubes);

    res.render('create');

};

const createCube = (req, res) => {

    console.log(req.body);

    let { name, description, imageUrl, difficulty } = req.body;

    cubeServise.create(name, description, imageUrl, difficulty)

    res.redirect('/');
};

const cubeDeateils = (req, res) => {

    let cube = cubeServise.getOne(req.params.cubeId);
    res.render('details', { ...cube });

};

router.get('/create', createCubePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDeateils);

module.exports = router;