var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var conn = require('../data/conn');

var products;

conn.connect(function (err) {
	if (err) throw err;
});

router.get('/', function (req, res, next) {
	var qdata = url.parse(req.url, true);
	var q = qdata.query;
	//console.log(q);
	conn.query("SELECT * FROM product", function (err, result, fields) {
		if (err) throw err;
		products = result;
		console.log(result);
		res.render('product', { title: 'Inventory', data: products, success: {add: q.add, delete: q.delete, update: q.update, prod: q.prod } });
	});
});

module.exports = router;
