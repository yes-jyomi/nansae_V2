var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('portfolio', { title: '포트폴리오' });
});

module.exports = router;
