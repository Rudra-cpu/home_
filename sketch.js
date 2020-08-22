
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	Roof1 = new roof(400,100,20,80);
	
	bob0 = new Bob(200,600,10);
	bob1 = new Bob(210,600,10);
	bob2 = new Bob(220,600,10);
	bob3 = new Bob(190,600,10);
	bob4 = new Bob(180,600,10);

	rope1 = new rope(Bob.body,Roof1.body-BobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Roof.display();

  bob0.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  drawSprites();
 
}



