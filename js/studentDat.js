
/*var app = angular.module('app', []);

app.controller('studentCtrl',function($scope){
	$scope.submitFunc = function(){
		console.log("running");

		findStudent($('#ID').value(),$('#last').value(),$('#first').value(),$('#grade').value());
	}

});


*/

function findStudent(id, last, first, grade)
{
	console.log(last);
$.get('/idSearch',{id:id,last:last,first:first,grade:grade}, function(data){
				console.log(data);


	
});
}

var first;
var last;
var id;
var grade;


function boo(){
	first = $('#first').val();
	last = $('#last').val();
	id = $('#id').val();
	grade = $('#grade').val();

	console.log(first);
	findStudent(id, last, first, grade);
}