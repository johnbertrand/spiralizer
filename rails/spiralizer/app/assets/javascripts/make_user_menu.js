function make_user_menu(){
   $("#user_area").html('<li><a rel="nofollow"  data-method="delete" href="/users/sign_out" id="#logout">Logout</a></li>');
   
   $("#logged_in_menu").className="dropdown";
   
   $("#logged_in_menu").html('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> User Menu <span class="caret"></span></a>'+
   '<ul class="dropdown-menu">'+
   '<li><a href="#">List Spirals</a></li>'+
   '<li><a href="#">Save Spiral</a></li>'+
   '</ul>');
	
}


			