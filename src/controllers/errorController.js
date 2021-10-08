const express = require('express');

const router = express.Router();

const errorPage = (req, res) => {

    res.render('404');
};


router.get('*', errorPage);

module.exports = router;