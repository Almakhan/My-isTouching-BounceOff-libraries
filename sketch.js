var movingRect,fixRect
var circle,triangle
var alma,atma

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixRect=createSprite(100,200,50,100);
  fixRect.shapeColor="green";
  fixRect.debug=true;
  circle=createSprite(300,200,50,100);
  circle.shapeColor="green";
  circle.debug=true;
  triangle=createSprite(500,200,50,100);
  triangle.shapeColor="green";
  triangle.debug=true;
  alma=createSprite(100,300,50,50);
  alma.velocityX=3;
  atma=createSprite(500,300,50,50);
  atma.velocityX=-3

}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 
  if(isTouching(movingRect,circle)){
    movingRect.shapeColor="red";
    circle.shapeColor="red";
  }
  else if(isTouching(movingRect,fixRect)){
    movingRect.shapeColor="blue";
    fixRect.shapeColor="blue";
  }
  else if(isTouching(movingRect,triangle)){
    movingRect.shapeColor="orange";
    triangle.shapeColor="orange"
  }
  else{
    movingRect.shapeColor="green";
    circle.shapeColor="green";
    fixRect.shapeColor="green";
    triangle.shapeColor="green"
  }

  drawSprites();
}

