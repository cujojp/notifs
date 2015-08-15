var express = require('express');
var _ = require('lodash');
var router = express.Router();
var Firebase = require('../gulp/utils/firebase-node');
var FirebaseTokenGenerator = require("../gulp/utils/firebase-token-generator");
var firebase = new Firebase('https://cujojp.firebaseio.com');

/* GET Home page. */
router.get('/', function(req, res) {
  firebase.once('value', function(snap) {
    req.db = snap.val();
    req.db.headerClasses = 'fixed themed';

    res.render('index', { data: req.db });
  });
});

router.get('/portfolio', function(req, res) {
  firebase.once('value', function(snap) {
    req.db = snap.val();
    req.db.headerClasses = 'fixed themed';
    var params = req.params.name;

    res.render('portfolio-landing.jade', { data: req.db });
  });
});

router.get('/work/:name', function(req, res) {
  firebase.once('value', function(snap) {
    req.db = snap.val();
    var params = req.params.name;
    var item = _.filter(req.db.work, function(item) { 
      return item.slug.id === params;
    });

    if (item) {
      item[0].headerClasses = 'fixed themed';
      res.render('work-item', {
        db: req.db,
        data: item[0]
      });
    } else {
      res.render('error.jade', {title: '404: File Not Found'});
    }

    //res.render('index', { data: req.db });
  });
});

module.exports = router;
