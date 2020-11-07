
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground
var score
var bananaGroup

var survivalTime=0


function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
   
  
  
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1;
  
 ground = createSprite(400,350, 900,10);
 
 ground.x=ground.width/2;
 console.log(ground.x)  
}



function draw() {
  background("White")
  
  obstacle();
  banana();
  
  if (keyDown("Space") && monkey.y >= 314) {
    monkey.velocityY=-15;     
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  console.log(monkey.y);
  
stroke("white");
textSize(20);
fill("white");
text("score: "+ score, 500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime = survivalTime+Math.round(getFrameRate()/63);
text("SurvivalTime: "+ survivalTime, 100,50);

 
  
  monkey.collide(ground);
 
  drawSprites();
  
}

function obstacle() {
  if (frameCount % 200 === 0){
  var obstacle=createSprite(400,316,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-5;
  obstacle.scale=0.15
}
}

function banana() {
  if (frameCount % 100 ===0){
    var banana=createSprite(500,220,10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.1;
  }
}











