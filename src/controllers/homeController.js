const express = require('express');
const cubeServise = require('../services/cubeService');
const cubeService = require('../services/cubeService');

const router = express.Router();

const home = (req, res) => {

    let cubes = cubeServise.getAll();

    res.render('index', { cubes });
};

router.get('/', home);

module.exports = router;