function findStudent(id, last, first, grade)
{
	console.log(last);
$.get('/idSearch',{id:id,last:last,first:first,grade:grade}, function(data){
				var x = document.getElementById('table2');
				x.innerHTML = " ";
				x.insertAdjacentHTML('afterbegin','<thead class = "greyheading"><tr><th>#</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Grade</th></tr></thead>');
				for(i in data){
					
					document.getElementById("table2").insertAdjacentHTML('beforeend',"<tr> <td> " + i+ "</td> <td> " +  data[i].FirstName + " </td> <td> " + data[i].LastName + "</td> <td> " + data[i].ID + "</td> <td> " + data[i].Grade + " </td> </tr>");
				}


	
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
