// ############## FOR ES6 ##############################################
// To use the ES6 codes commented below, uncomment them, then comment the ES5 codes, 
// then add  { type": "module" } in package.json file after description or main tag
// Had to make use of ES5 because the ES6 codes were not rendering well on Azure App Service.

// import express from 'express';
// import MongoClient from 'mongodb';

// const router = express.Router();

// const url = "process.env.MONGODB_URI";


// router.get('/', (req, res, next) => {
// 	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
// 		if (err) throw err;
// 		const dbo = db.db("test");
// 		dbo.collection("user").find({}).toArray(function(err, result) {
// 			if (err) throw err;
// 			console.log('Mongo data coming in hot')
//     		console.log(result);
//     		res.json(result)
//     		db.close();
//     	});
// 	}); 
// });

// export default router;




// ############### ES5 ###########################################
let express = require('express');
let router = express.Router();
let dotenv = require('dotenv');
dotenv.config();

let MongoClient = require('mongodb').MongoClient;
let url = process.env.MONGODB_URI;


router.get('/', (req, res, next) => {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
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
