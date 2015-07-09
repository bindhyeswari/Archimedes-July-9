var express = require('express'); // external module
var fs = require('fs'); // core module
var uuid = require('uuid');
var request = require('request');

var router = express.Router();

var users = {
    amy: {
        password: '',
        email: ''
    }
}; // key: username, value: { password: '', email: '' }

var events = [];
var valid_api_call = false;

/**
 * Meetup API Code
 * */
/*===========Start Meeetup API Code===========*/
// todo: Update API Key
request('https://api.meetup.com/2/events?group_id=18560637&key=22', function (err, response, body) {
    console.log(response.statusCode);
    if (response.statusCode === 200) {
        var response_object = JSON.parse(body);
        valid_api_call = true;
        events = response_object.results;
    } else {
        valid_api_call = false;
    }
});

/*===========End Meeetup API Code===========*/

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

router.get('/register', function (req, res) {
   res.render('register', {
       message: 'Register here ... '
   });
});

router.post('/register', function (req, res) {
    // Access the details of the request by accessing the body of the request
    console.log(req.body.username);
    res.render('register', {
        message: 'IMPL_101 Registration ... '
    });
});

router.get('/meetup', function (req, res) {
   res.render('meetup');
});

router.get('/meetup/events', function (req, res) {
    if (valid_api_call) {
        res.status(200).json(events);
    } else {
        res.status(500).json({
            message: 'Havent got the events data from meetup yet!'
        });
    }
});



module.exports = router;
