var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var conn = require('../data/conn');

var products;



router.get('/', function (req, res, next) {
	var qdata = url.parse(req.url, true);
	var q = qdata.query;
	//console.log(q);
	conn.connect(function (err) {
    if (err) throw err;
    conn.query("SELECT * FROM manufacturer;", function (err, result, fields) {
      if (err) throw err;
      manufacturers = result;
      console.log(result);
      res.render('product', { title: 'Inventory', data: products, success: {add: q.add, delete: q.delete, update: q.update, man: q.man } });
    });
  });
});

module.exports = router;