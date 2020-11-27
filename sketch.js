
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;

var box1, box2;

var ground;


function setup() {
 var canvas = createCanvas(400,400);
  engine =  Engine.create();
  world = engine.world;
  
  ground= new Ground(200,height,400,20);

  box1 = new Box(200, 100, 50, 50);
  box2= new Box(170, 10, 50, 70);

 

}

function draw() {
  background(0); 
  Engine.update(engine);

  box1.display();
  box2.display();

  ground.display();
}

