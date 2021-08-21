var car,carImg;
var car2,car2Img;
var road,roadImg;
var runner,runnerImg;
var score = 0;
var germImg1,germImg2;

function preload(){
carImg = loadImage("car.png");
car2Img = loadImage("car2.png");
roadImg = loadImage("Road1.png");
germImg1 = loadImage("3.png");
germImg2 = loadImage("ger1.png");
runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup() {
  // 800,400
  createCanvas(800,400);
// creating sprites
road = createSprite(300,300,30,30);
road.addImage(roadImg);
road.velocityY = -8;
}

function draw() {
  background("lightblue");

// moving the road
 if(road.x<0 ){
  road.x = road.x;
}
   



drawSprites();
}