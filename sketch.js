const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var option = {
    restitution: 0.9
  }
  ball = Bodies.circle (200,200,20,option)
  World.add (world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse (ball.position.x, ball.position.y, 20,20)
  if(keyIsDown(UP_ARROW)){
    vforce();
  }
if(keyIsDown(RIGHT_ARROW)){
  hforce();
}
}
function hforce (){
Matter.Body.applyForce (ball,{x:0, y:0},{x:0.00010, y:0})
}

function vforce (){
  Matter.Body.applyForce (ball,{x:0, y:0},{x:0, y:-0.00010})
  }

