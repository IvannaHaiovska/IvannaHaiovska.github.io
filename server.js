var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

app.use(function (req, res, next) {
  res.header({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    'access-control-allow-credentials': true,
  });
  // update to match the domain you will make the request from
  next();
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.set('port', 8080);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

var smtpTransport = nodemailer.createTransport(smtpTransport({

  service: 'gmail',
  auth: {
    user: 'ivanochkafundytus@gmail.com',
    pass: 'mpgaqrrgahrnqoxc'
  }
}));

app.post('', function (req, res) {
  var mailOptions = {
    from: '"Node js" <nodejs@example.com>',
    to: 'ivanochkafundytus@gmail.com',
    subject: 'Message from customer',
    text: `You have received a new car repair order:
  marks: ${req.body.marks},
  models: ${req.body.models},    
  years: ${req.body.years},     
  description1: ${req.body.description1},
  categories: ${req.body.categories},
  subcategories: ${req.body.subcategories},
  emirates: ${req.body.emirates},
  areas: ${req.body.areas},
  towTruck: ${req.body.towTruck},
  carPickup: ${req.body.carPickup},
  customParts:${req.body.customParts},
  orderDate: ${req.body.orderDate},
  description2:${req.body.description2}`

  };
  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
});
