const express = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const errorController = require('./controllers/errorController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);
router.use(errorController);


module.exports = router;