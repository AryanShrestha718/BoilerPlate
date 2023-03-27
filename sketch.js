const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, canvas;
var back, ground, towerImg, tower;

function preload(){
back = loadImage( "./assets/background.gif");
towerImg = loadImage("./assets/tower.png");
}
function setup(){
canvas = createCanvas(1200,600);
engine = Engine.create();
world = Engine.world;

var Options = {isStatic: true}

tower = Bodies.rectangle(160, 350, 160, 310, Options); 
World.add(world, tower);
ground = Bodies.rectangle(0,height-1,width*2,1,Options);
World.add(world,ground);
}
function draw(){
//background(250);
image(back,0,0,1200,600);
Engine.update(engine);
rect(ground.position.x,ground.position.y,width*2,1);

push();
imageMode(CENTER);
image(towerImg, tower.positon.x, tower.position.y, 160, 310);
pop();

}