let name;
let search;
let firstName;
let lastName;
let id;
let number;

     $('#gay').click(function(){
     	search = $('#inputBox').val();
     	$.get("/getvar", {fag: search}, function(data){
         $.each((data[0]), function(key, value){
         	if(key === 'FirstName'){
         		firstName = value;
         		console.log(firstName);
         	}
         	console.log(key, value);
         });
         console.log(firstName);
         console.log(data[0]);
        
        
      }, 'json');
     });