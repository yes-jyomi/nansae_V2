var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('license', { title: '자격증' });
});

module.exports = router;
