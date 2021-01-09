

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var paperObjectBody,log1,chain1,paperObjectBody1,paperObjectBody2,paperObjectBody3,paperObjectBody4,chain2,chain3,chain4,chain5;
var log2,log3,log4,log5,log6,paperObjectBody5,chain6;

function preload(){

 
 
}

function setup() {
	var canvas = createCanvas(800,400);

  
   
    
   
    
	engine = Engine.create();
	world = engine.world;
  
  
  paperObjectBody = new Paper(400,185,15);
  paperObjectBody1 = new Paper(370,185,15);
  paperObjectBody2 = new Paper(430,185,15);
  paperObjectBody3 = new Paper(460,185,15);
  paperObjectBody4 = new Paper(490,185,15);
  paperObjectBody5 = new Paper(340,185,15);
  paperObjectBody6 = new Paper(310,185,15);
  


  log1 = new Ground(400,100,200,10);
  log2 = new Ground(370,100,50,10);
  log3 = new Ground(430,100,50,10);
  log4 = new Ground(460,100,50,10);
  log5 = new Ground(490,100,50,10);
  log6 = new Ground(340,100,50,10);
  log7 = new Ground(310,100,50,10);

  

  
  chain1 = new Chain(log1.body,paperObjectBody.body);
  chain2 = new Chain(log2.body,paperObjectBody1.body);
  chain3 = new Chain(log3.body,paperObjectBody2.body);
  chain4 = new Chain(log4.body,paperObjectBody3.body);
	chain5 = new Chain(log5.body,paperObjectBody4.body);
	chain6 = new Chain(log6.body,paperObjectBody5.body);
	chain7 = new Chain(log7.body,paperObjectBody6.body);
  
   
    
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
 paperObjectBody5.display();
 paperObjectBody6.display();

 log1.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
 chain6.display();
 chain7.display();
 
}

function keyPressed(){
  if  (keyDown(UP_ARROW)){
    Matter.Body.applyForce(paperObjectBody4.body,paperObjectBody4.body.position,{x:30,y:-30});
  }
}