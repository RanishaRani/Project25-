
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ground1,box1,box2,box3,paper1;
function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  
ground1 = new ground(400,695,1000,10);
paper1 = new paper(200,690,15);

box2 = new dustbin(550,680,10,90);
box1 = new dustbin(600,694,100,10);
box3 = new dustbin(650,680,10,90);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box2.display();
  box3.display();
  paper1.display();
  drawSprites();
 
}




function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:25,y: -35});
}}