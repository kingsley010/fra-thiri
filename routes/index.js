var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).json({
    msg: 'worked'
  })
  // res.send('working');
});


module.exports = router;