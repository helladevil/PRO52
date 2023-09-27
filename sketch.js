var path,lechak,dogfood;
var pathImg,lechakImg,dogfoodImg;
var PLAY=1;
var END=0;
var gameState=1;
function preload(){
  pathImg = loadImage("suelo-de-madera.png");
  lechakImg = loadImage("lechak1.png");
  dogfoodImg = loadImage("dog-food.png");

}
function setup(){
 createCanvas(windowWidth,windowHeight);
path=createSprite(width/2,height/2);
path.addImage(pathImg);
path.velocityY = 4;
path.y = height/2
lechak = createSprite(width/2,height-20,50,20);
lechak.addAnimation("lechak1",lechakImg);
dogfoodGroup=new Group();
}
function draw() {

  if(gameState===PLAY){
  background(0);
  lechak.x = World.mouseX;
    edges= createEdgeSprites();
  lechak.collide(edges);
    if(path.y > height ){
    path.y = height/2;
  }
    createdogfood();
      
      if(dogfoodGroup.isTouching(lechak)) {
        gameState=END;
        dogfoodGroup.destroyEach();        
        dogfoodGroup.setVelocityYEach(0);
     
    }
  }
    drawSprites();
  }
function createdogfood(){
  if (World.frameCount % 530 == 0) {
     var dogfood = createSprite(Math.round(random(650, 2020),40, 10, 10));
    dogfood.addImage(dogfoodImg);
    dogfood.scale=0.1;
    dogfood.velocityY = 4;
    dogfood.lifetime = 300;
    dogfoodGroup.add(dogfood);
  }
}
