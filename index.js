
var app = angular.module('myApp', []);
var counter = 0;
var temp=[];


app.controller('myCtrl',function($scope){
$scope.items =[];
  $scope.tFunc = function(){
  	search = $('#text').val();
     	$.get("/getvar", {input: search}, function(data){
     		$scope.$apply(function(){
     			for(x in data)
     			{
     				temp.push(data[x].FirstName.concat("\t" + data[x].LastName).concat("\t" + data[x].StudentId).concat("\t" + data[x].Phone));
     			}
			$scope.items.push(temp);
     		},500);
        
      }, 'json');
  }

});






