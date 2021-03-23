var express = require('express');
var router = express.Router();
var cors = require('cors');
var request = require('request');
/* GET home page. */
router.get('/', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'https://api.jisuapi.com/recipe/search', form:{
    	appkey:'2d002cc53a587931',
    	keyword:req.query.keyword
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

router.get('/weather', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'https://api.jisuapi.com/weather/query', form:{
    	appkey:'2d002cc53a587931',
    	city:req.query.keyword
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

router.get('/news', cors(),function(req, res) {
	console.log(req.query.keyword);
    request.post({url:'https://api.jisuapi.com/news/get', form:{
    	appkey:'2d002cc53a587931',
    	channel:'头条',
    	num:40,
    	start:0
    }}, function (error ,response, body) {
	  // 返回的结果和 GET 一样
	  	res.send({
	  		body:body
	  	})
	})
});

module.exports = router;
