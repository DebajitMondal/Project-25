
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var Paddle1,Paddle2,Paddle3;
var PapperBall;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(600,390,1200,20)
	Paddle1= new Box(1000,370,130,20)
	Paddle2 = new Box(940,330,20,100)
	Paddle3 = new Box(1078,330,20,100)
	PapperBall = new Ball(100,200)
     dustbin = new Dustbin(1010,300)
	keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  Paddle1.display()
  Paddle2.display()
  Paddle3.display()
  PapperBall.display()
  dustbin.display()
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	
	Matter.Body.applyForce(PapperBall.body,PapperBall.body.position,{x:82,y:-82})
	
	
	}
	
	
	
	
	
	
	
	
	}
