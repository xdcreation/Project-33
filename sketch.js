var snow1,snow2,snow3,snowflake1,snowflake2,snowflake1_img,snowflake2_img;


function setup() {
  createCanvas(800,400);

}


function preload(){
  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
  snow3 = loadImage("snow3.jpg");
  snowflake1_img = loadImage("snow4.webp");
  snowflake2_img = loadImage("snow5.webp");
}

function draw() {
  background(snow2);  
  drawSprites();
  
  snowflake1 = createSprite(random(800,400));
  snowflake1.addImage(snowflake1_img)
  snowflake1.scale = 0.1;
  snowflake1.velocityY = 3;
  
  
}