var iss, issIMG;
var  spaceIMG;
var spcaeCraft1, spcaeCraft1IMG;
var spcaeCraft2, spcaeCraft2IMG;
var spcaeCraft3, spcaeCraft3IMG;
var spcaeCraft4, spcaeCraft4IMG;
var spaceCraft
var hasDocked = false;


function preload(){
  spaceCraft1IMG = loadImage("spacecraft1.png");
  spaceCraft2IMG = loadImage("spacecraft2.png");
  spaceCraft3IMG = loadImage("spacecraft3.png");
  spaceCraft4IMG = loadImage("spacecraft4.png");
  spaceIMG = loadImage("spacebg.jpg");
  issIMG = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400,200,100,100);
  iss.addImage(issIMG);
  spaceCraft = createSprite(450,350,100,100);
  spaceCraft.addImage(spaceCraft1IMG);
  spaceCraft.scale = 0.25
  
}

function draw() {
  background(spaceIMG);  
if(!hasDocked){
  spaceCraft.x = spaceCraft.x + random(-1,1);
  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y-2;
    spaceCraft.addImage(spaceCraft2IMG);
  }
  if(keyDown("DOWN_ARROW")){
    spaceCraft.y = spaceCraft.y+2;
    spaceCraft.addImage(spaceCraft2IMG);
  }
  if(keyDown("LEFT_ARROW")){
    spaceCraft.x = spaceCraft.x-2;
    spaceCraft.addImage(spaceCraft3IMG);
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x = spaceCraft.x+2;
    spaceCraft.addImage(spaceCraft4IMG);
  }
}
if(spaceCraft.y<=iss.y+93 && spaceCraft.x<=iss.x-52){
  spaceCraft.addImage(spaceCraft1IMG);
  hasDocked = true;
  fill("red");
  textSize(25);
  text("Mission Docking Succesful", 500,200);
}

  drawSprites();
}