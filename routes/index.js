var express = require('express');
var router = express.Router();
var request = require('ajax-request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sessionid', function(req,res, next){
console.log('desde sessionid');


 request({
   url: 'https://api.sandbox.ebay.com/ws/api.dll',
   method: 'POST',
   headers: {
   
    'X-EBAY-API-APP-NAME':"AngelHol-josephtr-SBX-1df6f4b63-bca9862b",
    "X-EBAY-API-DEV-NAME": "8bf0732d-22fa-48cb-8170-21a40a7634d0", 
    "X-EBAY-API-CERT-NAME": "SBX-df6f4b632921-877e-45eb-ac6c-f986",
    "X-EBAY-API-SITEID": 0,
    "X-EBAY-API-COMPATIBILITY-LEVEL": 967,
    "X-EBAY-API-CALL-NAME": 'GetSessionID',
    "Content-Type": "application/x-www-form-urlencoded"}
   ,
   data: '<?xml version="1.0" encoding="utf-8"?><GetSessionIDRequest xmlns="urn:ebay:apis:eBLBaseComponents"> <RuName>Angel_Holgado-AngelHol-joseph-qeuwlvsi</RuName></GetSessionIDRequest>'
 }, function(err, res1, body) {
  res.send(res1 + err);
 });


  });


module.exports = router;

