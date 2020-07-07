var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('outdoor', { title: '외부활동' });
});

router.get('/detail', function(req, res, next) {
    res.render('outdoor_detail', { title: '외부활동' });
});

router.get('/add', function(req, res, next) {
    res.render('outdoor_add', { title: '외부활동' });
});

module.exports = router;
