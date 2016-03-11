$(document).on('ready page:load',function(){
	
	
	


	$("#save_spirals").click(function() {
  	  	var jqxhr = $.ajax({ type:'POST', url:'spirals/',data:{ name: "John", time: "2pm" }})
		.done(function(){
			alert('Spiral Saved');
		});
		
	 });
	
	
 	$("#list_spirals").click(function() {
		console.log("CALLING LIST_SPIRALS");
		var user_id = document.getElementsByTagName("BODY")[0].getAttribute("data-user-id");
 		var jqxhr = $.ajax({ type:'GET', url:'users/'+user_id+'/spirals'})
 		.done(function(){
 			alert('Success');
 		});
		
 	 });
	
	
	
	
   $("#new_user").on("ajax:success", function(e, data, status, xhr){
	   //console.log(xhr.getAllResponseHeaders())})
	   var csrf_param = xhr.getResponseHeader('X-CSRF-Param');
	   var csrf_token = xhr.getResponseHeader('X-CSRF-Token');
		
	   if (csrf_param) {
		   $('meta[name="csrf-param"]').attr('content', csrf_param);
	   }
	   if (csrf_token) {
	      $('meta[name="csrf-token"]').attr('content', csrf_token);
	   }
		
	   make_user_menu();
		
       }).on("ajax:error", function (e, xhr, status, error){
		   console.log("Ajax Error");
	   });
   });
	  
	  
	  

