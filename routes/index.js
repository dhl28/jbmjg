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
router.get('/a5', function(req, res, next) {
    res.render('a5', { title: 'Express' });
});
router.get('/6', function(req, res, next) {
    res.render('6', { title: 'Express' });
});
//产品展示 - 子路由 - start
router.get('/2/:page', function(req, res, next) {
    res.render('2/'+req.params.page, { title: 'Express' });
});
//产品展示 - 子路由 - end

//工程案例 - 子路由 - start
router.get('/3/:page', function(req, res, next) {
    res.render('3/'+req.params.page, { title: 'Express' });
});
//工程案例 - 子路由 - end

//新闻资讯 - 子路由 - start
router.get('/4/:page', function(req, res, next) {
    res.render('4/'+req.params.page, { title: 'Express' });
});

//新闻资讯 - 子路由 - end

module.exports = router;
