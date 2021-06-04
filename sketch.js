
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneSprite,planeSprite,hammerSprite,rubberSprite,backgroundImg;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function preload(){
	backgroundImg = loadImage("garage.jpg");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 stoneSprite = new Stone(200,500,100,100,90);
	 planeSprite = new Plane(750,690,1500,10);
	 hammerSprite = new Hammer(500,300,100,50);
	 rubberSprite = new Rubber(1200,685,60);
	 sand1 = new Sand(800,500,20);
	 sand2 = new Sand(795,500,20);
	 sand3 = new Sand(885,500,20);
	 sand4 = new Sand(880,500,20);
	 sand5 = new Sand(870,500,20);
	 sand6 = new Sand(875,500,20);
	 sand7 = new Sand(860,500,20);
	 sand8 = new Sand(865,500,20);
	 sand9 = new Sand(890,500,20);
	 sand10 = new Sand(855,500,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  stoneSprite.display();
  planeSprite.display();
  hammerSprite.display();
  rubberSprite.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();


  
  drawSprites();
 
}



