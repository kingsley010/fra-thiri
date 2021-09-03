
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://king:2nov13@king.tatua.mongodb.net/test?retryWrites=true&w=majority";


router.get('/users', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("test");
		dbo.collection("user").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;