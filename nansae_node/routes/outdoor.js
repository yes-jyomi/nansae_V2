var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('outdoor', { title: '외부활동' });
});

module.exports = router;
