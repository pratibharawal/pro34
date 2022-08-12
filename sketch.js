var groundObj;
var ball
var basket
var basketImg
var radius=40;
var world

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	basketImg = loadImage("basketball_hoop.png")
}

function setup() {
	createCanvas(1600, 700);

  basket = createSprite(1200,250,100,20);
  basket.addImage("basketImg",basketImg);
  basket.scale=0.4

 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(260,110,20,ball_options);
World.add(world,ball);

groundObj=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObj.display();
  text("Try getting the ball in the hoop",600,350);
  text.scale = 0.7
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-50})
	}
}

