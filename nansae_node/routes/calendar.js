var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('calendar', { title: '캘린더' });
});

module.exports = router;
