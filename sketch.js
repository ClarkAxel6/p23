var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(width/2, height-35, width,10);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});

	World.add(world, packageBody);
	
	box1 = new Ground(400, 650, 300, 20);
	box2 = new Ground(240, 610, 20, 100);
	box3 = new Ground(550, 610, 20, 100);

	//Create a Ground
	 var render = Render.create({
		element: document.body, 
		engine: engine, 
		options: { width: 800, height: 700, showAngleIndicator: true }
		}); 
		Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  ground1.display();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
  else if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x = helicopterSprite.x + 20;
	  //packageSprite.x = helicopterSprite.x;
	  Matter.Body.translate(packageBody, {x: 20, y: 0});
  }
  else if(keyCode === LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x - 20;
	  //packageSprite.x = helicopterSprite.x;
	  Matter.Body.translate(packageBody, {x: -20, y: 0});
  }
}