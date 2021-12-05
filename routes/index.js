// ################## ES6 ################################
// To use the ES6 codes commented below, uncomment them, then comment the ES5 codes, 
// then add  { type": "module" } in package.json file after description or main tag
// Had to make use of ES5 because the ES6 codes were not rendering well on Azure App Service.


// import express from 'express';
// import router from express.Router();

// /* GET home page. */
// router.get('/users', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   res.status(200).json({
//     msg: 'worked'
//   })
//   // res.send('working');
// });


// export default router;





// ############### ES5 #######################
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
