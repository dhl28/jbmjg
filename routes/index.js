var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/1', function(req, res, next) {
    res.render('1', { title: 'Express' });
});
router.get('/2', function(req, res, next) {
    res.render('2', { title: 'Express' });
});
router.get('/3', function(req, res, next) {
    res.render('3', { title: 'Express' });
});
router.get('/4', function(req, res, next) {
    res.render('4', { title: 'Express' });
});

module.exports = router;
