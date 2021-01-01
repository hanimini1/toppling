  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

var engine;
var world;
var ball;
var ground;
var box1;
var box2;



function setup() {
 var canvas = createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;


 box1 = new Box(200,200,50,50);
  box2 = new Box(180,100,50,100);
 
  
  ground=new Ground(200,height,400,20);
  

}

function draw() {
  background("red");
  
Engine.update(engine);
rectMode(CENTER);
 box1.display();
box2.display();
ground.display();
}