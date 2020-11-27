
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject

var options={isStatic:false,restitution:0.3,friction:0.5,density:1.2}

var dustpanSideL
var dustpanSideR
var dustpanSideBottom

var floor

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  dustpanSideL = createSprite(770,590,20,130)
  dustpanSideR = createSprite(630,590,20,130)
  dustpanSideBottom = createSprite(700,650,150,20)
  paperObject = ellipse(100, 639, 40, 40,options)
  floor = createSprite(400,670,800,20)
  floor.shapeColor = "black"
  
  
 
    keyPressed();
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    // Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    // Matter.Body.applyForce(paperObject,{x:85,y:-85})
  //  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  Matter.paperObject.applyForce(paperObject, 100,{x:85,y:-85})

	}
}



