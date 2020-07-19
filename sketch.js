
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4;
var bobDiameter =100
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	roof = new Roof(400,100,500,30);
	
	bob1 = new Bob(200,500,bobDiameter)
	bob2 = new Bob(300,500,bobDiameter)
	bob3 = new Bob(400,500,bobDiameter)
	bob4 = new Bob(500,500,bobDiameter)
	bob5 = new Bob(600,500,bobDiameter)
	r1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	r2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	r3 = new Rope(bob3.body,roof.body,-bobDiameter*0,0)
	r4 = new Rope(bob4.body,roof.body,-bobDiameter*-1,0)
	r5 = new Rope(bob5.body,roof.body,-bobDiameter*-2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x :-60,y:0})
	}
}


