$.ajax("https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions"){
	 headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Basic ' + new Buffer('650D5OPNQCVGOIQ8FTQ621cdhnDgKQMGLR1G9fRhn3oT317tY' + ':' + 'QnoUvFdc86vY1').toString('base64')
    },
    type: 'GET',
    data{}.
    dataType: 'json',
    success: function(data){console.log(data);}
    
});