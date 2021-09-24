const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var canvas;
var ironMan,ironManImg,thor,thorImg,captain,captainImg,blackpanther,blackpantherImg;
var backgroundImg;
var ultron,ultronImg,hela,helaImg,ronan,ronanImg,killmonger,killmongerImg,thanos,thanosImg;
var ironmanS2,ironmanS1,blackPantherS2;
var ultS1,ultS2;
var ground,playingback;
var repulser,repulserImg;
var repulser1,repulser1Img;
var laser,laserImg;
var repulserGroup,repulser1Group,laserGroup;
var health = 100;
var enemyHealth = 100;
function preload(){
ironManImg = loadImage("images/ironmanS2.1.png");
backgroundImg= loadImage("images/playback.jpg");
ironmanS2 = loadAnimation("images/ironmanS2.2.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png","images/ironmanS2.3.png");
blackpantherImg = loadImage("images/blackPanther.png");
ironmanS1 = loadAnimation("images/ironmanS1.2.png","images/ironmanS1.2.png","images/ironmanS1.3.png","images/ironmanS1.3.png");
repulserImg = loadImage("images/repulser.png");
repulser1Img = loadImage("images/repulser1.png");
blackPantherS2 = loadAnimation("images/blackPantherS2.1.png","images/blackPantherS2.1.png","images/blackPantherS2.2.png","images/blackPantherS2.2.png","images/blackPantherS2.3.png","images/blackPantherS2.3.png","images/blackPantherS2.4.png","images/blackPantherS2.4.png","images/blackPantherS2.5.png","images/blackPantherS2.5.png","images/blackPantherS2.6.png","images/blackPantherS2.6.png","images/blackPantherS2.7.png","images/blackPantherS2.7.png","images/blackPantherS2.8.png","images/blackPantherS2.8.png","images/blackPantherS2.9.png","images/blackPantherS2.9.png");
ultronImg = loadImage("images/ultS1.1.png");
ultS1 = loadAnimation("images/ultS1.1.png","images/ultS1.2.png","images/ultS1.3.png","images/ultS1.3.png","images/ultS1.3.png");
laserImg = loadImage("images/laser.png");
}
function setup(){
canvas = createCanvas(800,600);
ground = createSprite(400,600,800,50);
ground.shapeColor="red";
ground.visible = false;
laserGroup = new Group();
repulserGroup = new Group();
repulser1Group = new Group();
}
function draw(){
background("black");

if(keyWentDown("s")){
  ironMan.changeAnimation("arcoverload",ironmanS2);
}

if(keyWentUp("s")){
  ironMan.changeAnimation("basic");
}
if(keyWentDown(RIGHT_ARROW)){
  ironMan.changeAnimation("repulser");
  repulser = createSprite(105,480,50,50);
  repulser.addImage(repulserImg);
  repulser.scale = 0.2
  repulser.velocityX = 10;
  repulser.lifetime = 60;
  repulser.debug = true;
  repulserGroup.add(repulser);
  
}
if(keyDown("s")){
  repulser1 = createSprite(100,480,50,50);
  repulser1.addImage(repulser1Img);
  repulser1.scale = 0.3;
  repulser1.velocityX = 10;
  repulser1.lifetime = 55;
  repulser1.debug = true;
  repulser1Group.add(repulser1);
}
if(keyWentUp(RIGHT_ARROW)){
  ironMan.changeAnimation("basic");
}
if(keyWentDown(LEFT_ARROW)){
  ultron.changeAnimation("AIlaser");
  laser = createSprite(650,480,10,10);
  laser.addImage(laserImg);
  laser.velocityX = -18;
  laser.scale = 0.5;
  laser.lifetime = 33;
  laser.debug = true;
  laser.setCollider("circle",0,0,40)
  laserGroup.add(laser);
}
if(keyWentUp(LEFT_ARROW)){
  ultron.changeAnimation("Ubasic");
}
if(laserGroup.isTouching(ironMan)){
health -=0.5;
}
if(repulserGroup.isTouching(ultron)){
  enemyHealth -=0.1;
  }
  if(repulser1Group.isTouching(ultron)){
    enemyHealth -=0.1;
    }

drawSprites();
textSize(20);
fill("green");
text("HEALTH :"+health,50,430);

textSize(15);
fill("green");
text("ENEMY HEALTH :"+enemyHealth,600,430);
}
function mouseClicked(){
//background(backgroundImg);
//console.log("ironman")

gameStart();
}
function gameStart(){
  
  playingback = createSprite(800,400);
  playingback.addImage(backgroundImg);
  
  ironMan = createSprite(80,520,10,10);
ironMan.addImage(ironManImg);
ironMan.addAnimation("arcoverload",ironmanS2);
ironMan.addAnimation("basic",ironManImg);
ironMan.addAnimation("repulser",ironmanS1);
ironMan.scale = 0.5;
ironMan.debug = true;

/*blackpanther = createSprite(700,520,10,10);
blackpanther.addImage("blackP",blackpantherImg);
blackpanther.addAnimation("truePanther",blackPantherS2);
blackpanther.scale = 0.6;*/
ironMan.collide(ground);
//ultron.collide(ground);
ultron = createSprite(700,520,10,10);
ultron.addImage("Ubasic",ultronImg);
ultron.addAnimation("AIlaser",ultS1);
ultron.scale = 0.8;
ultron.debug = true;
ultron.setCollider("rectangle",0,0,ultron.width-10,ultron.height-10);

}



