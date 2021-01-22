var fixedRect , movingRect,germany,austria;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
 germany = createSprite(300,200,10,10);
 austria = createSprite(800,100,10,10);
 


}

function draw() {
  background(0,0,0);  
  germany.x = mouseX;
  germany.y = mouseY;
  
  if(collision(germany,austria))
  { germany.shapeColor = "red";
    austria.shapeColor = "pink"; 
  
}
 else{
 germany.shapeColor =  "yellow";
 austria.shapeColor = "blue";

 } 



BounceOff(movingRect,fixedRect);
  
  drawSprites();
}

