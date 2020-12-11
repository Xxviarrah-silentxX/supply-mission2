var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box,boxpart,boxpart2,boxpart3,boxBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

	//boxpart=createSprite(width/2-50,610,20,100);
	//boxpart.shapeColor = "red";

   // boxpart2=createSprite(width/2,650,100,20);
	//boxpart2.shapeColor = "red";


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    
	engine = Engine.create();
	world = engine.world;


	box = new Box();
	
boxBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
    World.add(world, boxBody);

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	

     //boxBody = box;   



	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box.x = boxBody.position.x
  box.y = boxBody.position.y


  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 

  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



