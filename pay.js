var temp;


$('#payButton').click(function(){
	console.log('gg');
	$.get('/testVisa',function(data){
		alert("Transaction Identifier: "+data.transactionIdentifier);
	}, 'json');

	$.get('/pushVisa',function(data){
		alert("Transaction Identifier:" +data.transactionIdentifier);
	}, 'json');

});
