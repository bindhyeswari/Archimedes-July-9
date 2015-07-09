var express = require('express'); // external module
var fs = require('fs'); // core module
var uuid = require('uuid');

var router = express.Router();

var jsobject = {
    name: 'info'
};

// Browser --> GET request | verb, url (/data/moreinfo), headers

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function (req, res) {
    res.send('Hello World from /data ... ')
}); // button.addEventListener('event', function (event) {})

router.get('/json', function (req, res) {
   res.status(200).json(jsobject);
});

router.get('/login', function (req, res) {
   res.render('login', {
       message: 'Register here ... '
   });
});

router.post('/login', function (req, res) {
    // Access the details of the request by accessing the body of the request
    console.log(req.body);
    res.render('login', {
        message: 'IMPL_101 Registration ... '
    });
});



module.exports = router;
