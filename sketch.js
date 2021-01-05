

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var paperObjectBody,log1,chain1,paperObjectBody1,paperObjectBody2,paperObjectBody3,paperObjectBody4,chain2,chain3,chain4,chain5;
var log2,log3,log4,log5;

function preload(){

 
 
}

function setup() {
	var canvas = createCanvas(800,400);

  
   
    
   
    
	engine = Engine.create();
	world = engine.world;
  
  
  paperObjectBody = new Paper(200,185,15);
  paperObjectBody1 = new Paper(208,185,15);
  paperObjectBody2 = new Paper(216,185,15);
  paperObjectBody3 = new Paper(224,185,15);
  paperObjectBody4 = new Paper(236,185,15);

  log1 = new Ground(400,100,200,10);
  

  
  chain1 = new Chain(log1.body,paperObjectBody.body);
  chain2 = new Chain(log1.body,paperObjectBody1.body);
  chain3 = new Chain(log1.body,paperObjectBody2.body);
  chain4 = new Chain(log1.body,paperObjectBody3.body);
	chain5 = new Chain(log1.body,paperObjectBody4.body);
  
   
    
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
 
  
 

 
 paperObjectBody.display();
 paperObjectBody1.display();
 paperObjectBody2.display();
 paperObjectBody3.display();
 paperObjectBody4.display();
 log1.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

 
}

function keyPressed(){
  if  (keyDown(UP_ARROW)){
    Matter.Body.applyForce(paperObjectBody.body,paperObjectBody.body.position,{x:29,y:-29});
  }
}