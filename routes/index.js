import express from 'express';
import router from express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).json({
    msg: 'worked'
  })
  // res.send('working');
});


module.exports = router;