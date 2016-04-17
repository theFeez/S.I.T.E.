var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var request = require('request');
var fs = require('fs');
var reqs = request.defaults();
app.use(express.static(__dirname + '/'));

app.get('/',function(req, res){
	res.sendFile(path.join(__dirname+"/student_locator.html"));
});

app.get('/idSearch', function(req,res){
	MongoClient.connect('mongodb://localhost:27017/sampleData', function(err, db){
		if (err){
			throw err;
		}
		console.log(req.query);
		if(req.query.id!=='')
		{
			db.collection('studentdat').find({'ID':parseInt(req.query.id)}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
			});
		}
		else if(req.query.id==='')
		{
			console.log('id undefined');
			if(req.query.last!==''&&req.query.first!==''&&req.query.grade!=='')
			{
			db.collection('studentdat').find({'FirstName':req.query.first,'LastName':req.query.last,'Grade':parseInt(req.query.grade)}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
				console.log(result);
					res.json(result);
				});
			}
			else if(req.query.last!==''&&req.query.first!=='')
			{
				db.collection('studentdat').find({'FirstName':req.query.first,'LastName':req.query.last}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
		});
			}

			else if(req.query.last!==''&&req.query.grade!=='')
			{
				db.collection('studentdat').find({'LastName':req.query.last,'Grade':parseInt(req.query.grade)}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
			});
			}

			else if(req.query.first!==''&&req.query.grade!=='')
			{
				db.collection('studentdat').find({'FirstName':req.query.first,'Grade':parseInt(req.query.grade)}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
			});
			}

			else if(req.query.last!=='')
			{
				db.collection('studentdat').find({'LastName':req.query.last}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
			});
			}

			else if(req.query.first!=='')
			{
				db.collection('studentdat').find({'FirstName':req.query.first}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
			});
			}

			else if(req.query.grade!=='')
			{
				db.collection('studentdat').find({'Grade':parseInt(req.query.grade)}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
			});
			}



		}




		
	});
});

app.get('/firstSearch', function(req,res){
	MongoClient.connect('mongodb://localhost:27017/sampleData', function(err, db){
		if (err){
			throw err;
		}
		db.collection('studentdat').find({'FirstName':req.query.id}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
		});
	});
});

app.get('/lastSearch', function(req,res){
	MongoClient.connect('mongodb://localhost:27017/sampleData', function(err, db){
		if (err){
			throw err;
		}
		db.collection('studentdat').find({'LastName':req.query.id}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
		});
	});
});

app.get('/gradeSearch', function(req,res){
	MongoClient.connect('mongodb://localhost:27017/sampleData', function(err, db){
		if (err){
			throw err;
		}
		db.collection('studentdat').find({'Grade':parseInt(req.query.id)}).toArray(function(err, result){
			console.log(req.query.id);
			if(err){
				throw err;
			}
			console.log(result);
			res.json(result);
		});
	});
});

app.get("/getvar", function(req,res){
	MongoClient.connect('mongodb://localhost:27017/sampleData', function(err, db) {
  if (err) {
    throw err;
  }
  console.log('pressed');
  	db.collection('studentdat').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
    console.log(result);
  });
});
	
});

app.get('/testVisa',function(req,res){


	var options = {
  "acquirerCountryCode": "840",
  "acquiringBin": "408999",
  "amount": "124.02",
  "businessApplicationId": "AA",
  "cardAcceptor": {
    "address": {
      "country": "USA",
      "county": "San Mateo",
      "state": "CA",
      "zipCode": "94404"
    },
    "idCode": "ABCD1234ABCD123",
    "name": "Visa Inc. USA-Foster City",
    "terminalId": "ABCD1234"
  },
  "cavv": "0700100038238906000013405823891061668252",
  "foreignExchangeFeeTransaction": "11.99",
  "localTransactionDateTime": "2016-04-17T03:36:20",
  "retrievalReferenceNumber": "330000550000",
  "senderCardExpiryDate": "2015-10",
  "senderCurrencyCode": "USD",
  "senderPrimaryAccountNumber": "4895142232120006",
  "surcharge": "11.99",
  "systemsTraceAuditNumber": "451001"
};

var data = JSON.stringify(options);
console.log(data);

reqs.post({
    url : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions",
    key: fs.readFileSync('key_testApp.pem'),
    cert: fs.readFileSync('cert.pem'),
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Basic ' + new Buffer('650D5OPNQCVGOIQ8FTQ621cdhnDgKQMGLR1G9fRhn3oT317tY' + ':' + 'QnoUvFdc86vY1').toString('base64')
    },
    body:data},
     function(error, response, body) {
     	res.send(body);
  }
);
});

app.get('/pushVisa',function(req, res){
	var pushData = {
  "acquirerCountryCode": "840",
  "acquiringBin": "408999",
  "amount": "124.02",
  "businessApplicationId": "AA",
  "cardAcceptor": {
    "address": {
      "country": "USA",
      "county": "San Mateo",
      "state": "CA",
      "zipCode": "94404"
    },
    "idCode": "ABCD1234ABCD123",
    "name": "Visa Inc. USA-Foster City",
    "terminalId": "ABCD1234"
  },
  "cavv": "0700100038238906000013405823891061668252",
  "foreignExchangeFeeTransaction": "11.99",
  "localTransactionDateTime": "2016-04-17T12:52:37",
  "retrievalReferenceNumber": "330000550000",
  "senderCardExpiryDate": "2015-10",
  "senderCurrencyCode": "USD",
  "senderPrimaryAccountNumber": "4895142232120006",
  "surcharge": "11.99",
  "systemsTraceAuditNumber": "451001"
};

stuff = JSON.stringify(pushData);
reqs.post({
    url : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions",
    key: fs.readFileSync('key_testApp.pem'),
    cert: fs.readFileSync('cert.pem'),
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Basic ' + new Buffer('650D5OPNQCVGOIQ8FTQ621cdhnDgKQMGLR1G9fRhn3oT317tY' + ':' + 'QnoUvFdc86vY1').toString('base64')
    },
    body:stuff},
     function(error, response, body) {
     	res.send(body);
  }
);	


});





var server = app.listen(9001, function(){

	var host = server.address().address
	var port = server.address().port

	console.log('example app listening at http://%s:%s', host, port);
});