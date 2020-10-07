/*

Author : Sandhya Ammasi
Purpose : WhitehatJR PRO C24 template

*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	//create a dustbinObj & paperObject
	groundObject=new ground(800,670,1600,20);

	Engine.run(engine);
 
}

function draw() {
  rectMode(CENTER);
  background(0);

 //display the dustbin & paperobject
  groundObject.display();
  

}

/* function keyPressed() is an inbuilt function like function draw()
 function keyPressed is read by the computer over & over to keep checking if 
 anyone has pressed any key
*/
function keyPressed() {

	//write code ,that if you press up arrow, the paper ball moves up
	//hint : use apply force code
	// Matter.Body.applyForce(body, position, force)
	//body here is ----paperObject.body
	//position here is ----paperObject.body.position
	//force here is ----{x:85,y:-85}
	
	
}


















































/*	dustbinObj=new dustbin(1200,600,10,100);
	paperObject=new paper(200,450,40);
	*/




/*
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-85});
    
	  }
	  */