$(document).on('ready page:load',function(){
   $("#new_user").on("ajax:success", function(e, data, status, xhr){
	   $("#user_area").html('<li><a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a></li>');
	    console.log("devise hitting back good")
	   var csrf_param = xhr.getResponseHeader('X-Csrf-Param');
	   var csrf_token = xhr.getResponseHeader('X-Csrf-Token');
	   console.log(xhr);
	   console.log("csrf_param: "+csrf_param);
	   console.log("csrf_token: "+csrf_token);
	   var headers = xhr.getAllResponseHeaders().toLowerCase();
	   console.log(headers);
	  
	   
	   if (csrf_param) {
	     $('meta[name="csrf-param"]').attr('content', csrf_param);
	   }
	   if (csrf_token) {
	     $('meta[name="csrf-token"]').attr('content', csrf_token);
	   }
	   
   }).on("ajax:error", function (e, xhr, status, error){
     console.log("devise hitting back bad")
   }).on("ajax:complete", function(e,xhr,status){
	   console.log("in complete");
	   
   });
   
})


