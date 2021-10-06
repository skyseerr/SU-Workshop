const express = require('express');

const cubeServise = require('../services/cubeService');

const router = express.Router();

const createCubePage = (req, res) => {
    res.render('create');
};

const createCube = (req, res) => {

    console.log(req.body);
    
    let {name, description, imageUrl, difficulty} = req.body;

    cubeServise.create(name, description, imageUrl, difficulty)

    res.redirect('/cube/create');
};

router.get('/create', createCubePage);
router.post('/create', createCube);

module.exports = router;