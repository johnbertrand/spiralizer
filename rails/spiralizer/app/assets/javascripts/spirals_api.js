function save_spiral(){
	console.log("in function save_spiral()");
	$.post('spirals',{name:"balls"}, function(){alert("made it");});
	
}