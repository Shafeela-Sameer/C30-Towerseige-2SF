// creaing matter engine, world,body,bodies,constraint,circle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const circle = Matter.Bodies.circle;

//creating the running engine,world,and all the variables for the boxes,ground,striker,platform 
var engine,world;
var plat1,plat2,plat3;
var striker;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;

function setup() {
  //creating canvas,engine,world
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
//creating the platforms,ground,striker
plat1 = new Ground(500,600,300,5);
plat2 = new Ground(850,400,200,5);
plat3 = new Ground(1200,200,125,5);
ground = new Ground(width/2,680,1500,20);
striker = new Striker(150,200,40,40);

//creating plat1 stage1
b1 = new Block(390,599,30,40);
b2 = new Block(420,599,30,40);
b3 = new Block(450,599,30,40);
b4 = new Block(480,599,30,40);
b5 = new Block(510,599,30,40);
b6 = new Block(540,599,30,40);
b7 = new Block(570,599,30,40);
b8 = new Block(600,599,30,40);
//creating plat1 stage2
b9 = new Block(420,569,30,40);
b10 = new Block(450,569,30,40);
b11 = new Block(480,569,30,40);
b12 = new Block(510,569,30,40);
b13 = new Block(540,569,30,40);
b14 = new Block(570,569,30,40);
//creating plat1 stage3
b15 = new Block(450,539,30,40);
b16 = new Block(480,539,30,40);
b17 = new Block(510,539,30,40);
b18 = new Block(540,539,30,40);
//creating plat1 stage4
b19 = new Block(480,509,30,40);
b20 = new Block(510,509,30,40);
//creating plat1 stage5
b21 = new Block(495,479,30,40);

//creating plat2 stage1
t1 = new Block(770,399,30,40);
t2 = new Block(800,399,30,40);
t3 = new Block(830,399,30,40);
t4 = new Block(860,399,30,40);
t5 = new Block(890,399,30,40);
t6 = new Block(920,399,30,40);
//creating plat2 stage2
t7 = new Block(800,369,30,40);
t8 = new Block(830,369,30,40);
t9 = new Block(860,369,30,40);
t10 = new Block(890,369,30,40);
//creating plat2 stage3
t11 = new Block(830,339,30,40);
t12 = new Block(860,339,30,40);
//creating plat2 stage4
t13 = new Block(845,309,30,40);

//creating plat3 stage1
s1 = new Block(1180,199,30,40);
s2 = new Block(1210,199,30,40);
s3 = new Block(1240,199,30,40);
//creating plat3 stage2
s4 = new Block(1210,169,30,40);
//creating the slingshot
slingShot = new SlingShot(striker.body,{x:150,y:230});
}

function draw() {
  //creating the bg
  background("BLACK");
  //making the engine update automatically,and displaying all the stuff 
  Engine.update(engine); 
  plat1.display();
  plat2.display();
  plat3.display();
  striker.display();
  slingShot.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

t1.display();
t2.display();
t3.display();
t4.display();
t5.display();
t6.display();
t7.display();
t8.display();
t9.display();
t10.display();
t11.display();
t12.display();
t13.display();

s1.display();
s2.display();
s3.display();
s4.display();

}
//making the functions for ths throwing of the striker
function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){

if(keyCode === 32){

  slingShot.attach(striker.body);

}
}