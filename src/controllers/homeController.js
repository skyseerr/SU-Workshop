const express = require('express');
const cubeServise = require('../services/cubeService');
const cubeService = require('../services/cubeService');

const router = express.Router();

const home = (req, res) => {

    let cubes = cubeServise.getAll();

    res.render('index', { cubes });
};

const about = (req, res) =>{
    res.render('about');
};

router.get('/', home);
router.get('/about', about);
module.exports = router;