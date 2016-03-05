$(document).on('ready page:load',function(){
   $("#new_user").on("ajax:success", function(e, data, status, xhr){
	   $("#user_area").html('<li><a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a></li>');
	   console.log("devise hitting back good")
   }).on("ajax:error", function (e, xhr, status, error){
     console.log("devise hitting back bad")
   })
   console.log("INSIDE #new_user");  
})

