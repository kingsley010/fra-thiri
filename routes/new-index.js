
import express from 'express';
import MongoClient from 'mongodb';

const router = express.Router();

const url = "mongodb+srv://king:2nov13@king.tatua.mongodb.net/test?retryWrites=true&w=majority";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
		if (err) throw err;
		const dbo = db.db("test");
		dbo.collection("user").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

export default router;
