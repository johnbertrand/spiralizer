
var image_path = '<%= asset_path 'flower.jpg' %>'

var START_X = 500;
var START_Y = 500;

var canvasID="mainCanvas";

var originalBitmap;

var currentFrame;

var tmp;

var stage;

var spirals = [] ;

var spiral;

var spiralEvents = [];

var startTime;

var tickHandler;

var spiraledJson;

var playbackEvents = [];


if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}




///SpiralEvent Object
function SpiralEvent(imgUrl,x,y,eventTime){
	this.imgUrl = imgUrl;
	this.x = x;
	this.y = y;
	this.eventTime = eventTime;
}



//Image Object
function Spiral(bitmap,x,y){

  this.bitmap = bitmap;
  this.angle = 0 ;
  this.x = x;
  this.y = y;

}


Spiral.prototype.bitmap = function(){
	return this.bitmap;
}

Spiral.prototype.name = function(){
  return this.bitmap.image.src;
}

Spiral.prototype.update = function(){
	//this.bitmap.image.width/2, this.bitmap.image.height/2
	this.bitmap.setTransform(this.x, this.y, this.bitmap.scaleX * .9995, this.bitmap.scaleX * .9995, this.angle-= .14 );
	//console.log (this.bitmap.scaleX +","+this.bitmap.scaleY )
}

Spiral.prototype.getRand=function(){
 return Math.floor(Math.random() * (3)) + 0;
}

///End Image Object



function tick(event) {

	//copy current frame 
	//shrink current frame
	//paste current frame on to self
	//stage.addChild(currentFrame);

	//currentFrame.update();




	var i=0;
	for (i=0;i<spirals.length;i++){
		spirals[i].update();

	}
	stage.update();

}

function playBack(event) {
	var n = new Date();

	if (playbackEvents.length > 0) {
		console.log(playbackEvents[0].eventTime);
		var tx = n.getTime() - startTime;
		console.log("tx: "+ tx);
		if (playbackEvents[0].eventTime < n.getTime() - startTime){
			var pe = playbackEvents.shift();
	
			spirals.push(new Spiral(originalBitmap.clone() ,pe.x, pe.y));
			stage.addChild(spirals[spirals.length-1].bitmap);
		}

	}


	console.log('spirals ');
	console.log(spirals);

	var i=0;
	for (i=0;i<spirals.length;i++){
		spirals[i].update();
	}

	stage.update();

}


function handleFileComplete(ev) {

	originalBitmap =  new createjs.Bitmap(ev.result);

	spirals.push(new Spiral(originalBitmap.clone(),START_X,START_Y));

	spiralEvents.push(new SpiralEvent("DUMMY",START_X,START_Y,0));

	stage.addChild(spirals[length].bitmap);


    tickHandler = createjs.Ticker.on("tick", tick);
    createjs.Ticker.setFPS(60);

	var d = new Date();
	startTime = d.getTime();

}


function exportSpirals(){
	//JSON.stringify(spiralEvents)
	myWindow = window.open();
	myWindow.document.body.innerHTML = JSON.stringify(spiralEvents);
	myWindow.focus( );

}


function resetAll(){
	console.log("Resting");
	createjs.Ticker.off("tick",tickHandler);
	createjs.Ticker.off("tick", playBack);
	stage.removeAllChildren();

	//Clean up
	stage.clear();
	spiralEvents=[];
	spirals=[];

	var d = new Date();
	startTime = d.getTime();

    tickHandler = createjs.Ticker.on("tick", playBack);
    createjs.Ticker.setFPS(60);

}


function importSpirals(){
	console.log("Importing");

	//Kill Old Ticker
	createjs.Ticker.off("tick",tickHandler);
	createjs.Ticker.off("tick", playBack);

	//Clean up
	stage.clear();
	spiralEvents=[];
	spirals=[];


	//Read the json of the spiral evetns from the textbo
	var parsed = JSON.parse(document.getElementById('out').value.trim()); //Change to texst box
	console.log(parsed);

	console.log('looping');
	playbackEvents =parsed;

	//var i = 0;
	//while (i < parsed.length -1 ){
	//    playbackEvents.push(new SpiralEvent(parsed[i].imgUrl,parsed[i].x,parsed[i].y,parsed[i].eventTime))	;
	//	i = i + 1;
//	}


	var d = new Date();
	startTime = d.getTime();

    tickHandler = createjs.Ticker.on("tick", playBack);
    createjs.Ticker.setFPS(60);

}


function exportToBitmap(){
	var canvas = document.getElementById( 'mainCanvas' );
	var bitmap = new createjs.Bitmap( canvas );

	bitmap.cache( 0, 0, canvas.width, canvas.height, 1 );
	var base64 = bitmap.getCacheDataURL();

	myWindow = window.open(base64);
	myWindow.focus();

}

function resetSpirals(){
	resetAll();

}

function init()
{

	canvas = document.getElementById(canvasID);
    canvas.width  = document.body.clientWidth; 
    canvas.height = document.body.clientHeight;

    stage  = new createjs.Stage(canvasID);
	stage.autoClear = false;


    var preload = new createjs.LoadQueue();
    preload.addEventListener("fileload", handleFileComplete);
  	preload.loadFile({ src:image_path, type:createjs.AbstractLoader.IMAGE});

	stage.on("stagemousedown", function(evt) {

    	//console.log("the canvas was clicked at "+evt.stageX+","+evt.stageY);

		spirals.push(new Spiral(originalBitmap.clone() ,evt.stageX,evt.stageY));

		stage.addChild(spirals[spirals.length-1].bitmap);

		var n = new Date();

		spiralEvents.push(new SpiralEvent("DUMMY",evt.stageX,evt.stageY,n.getTime()-startTime));

		console.log(spiralEvents);
    });








}



