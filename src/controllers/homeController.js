const express = require('express');
const cubeServise = require('../services/cubeService');

const router = express.Router();

const home = async (req, res) => {

    let cubes = await cubeServise.getAll();

    res.render('index', { cubes });
};

const about = (req, res) =>{
    res.render('about');
};

const search = (req, res) => {

    let search = req.query.search;
    let from = req.query.from;
    let to = req.query.to;

    let cubes = cubeServise.search(search, from, to);

    res.render('index', {cubes});
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

module.exports = router;