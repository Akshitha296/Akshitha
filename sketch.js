var MrJimmyJoe
var jjimg
var bimg, bsprite
var food = 20;
var gameState = 0;
var s11, s12, s13, s14, s15, s21, s22, s23, s24, s25
var redImg
var whitesusImg
var drag = 0;
var invSpr

function preload()
{
	jjimg = loadImage("jjremainder.png");
	bimg = loadImage("background.png");
	redImg = loadImage("red.png");
	whitesusImg = loadImage("whitesus.png");

}

function setup() {
	createCanvas(displayWidth-50, displayHeight-50);
	bsprite = createSprite((displayWidth-50)/2, (displayHeight-50)/2, displayWidth-50, displayHeight-50)
	bsprite.addImage(bimg);
	bsprite.scale = 15;
	MrJimmyJoe = createSprite(displayWidth/2-50, displayHeight/2-50, 50, 50);
	MrJimmyJoe.addImage(jjimg);
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (food === 0){
	  clear();
	  gameState = 1;
  }

  drawSprites();

  if (gameState === 1){
	  MrJimmyJoe.visible = false;
	  s11 = createSprite(400, 110, 45, 75);
	  s11.addImage(whitesusImg);
	  s11.scale = 0.3;

	  s12 = createSprite(485, 200, 75, 45);
	  s12.addImage("red",redImg);
	  s12.scale = 0.3;

	  s13 = createSprite(585, 300, 75, 45);
	  s13.addImage(whitesusImg);
	  s13.scale = 0.3;

	  s14 = createSprite(450, 540, 75, 45);
	  s14.addImage(whitesusImg);
	  s14.scale = 0.3;

	  s15 = createSprite(450, 405, 45, 75);
	  s15.addImage(redImg);
	  s15.scale = 0.3;

	  s21 = createSprite(890, 110, 45, 75);
	  s21.addImage(whitesusImg);
	  s21.scale = 0.3;

	  s22 = createSprite(805, 200, 75, 45);
	  s22.addImage(redImg);
	  s22.scale = 0.3;

	  s23 = createSprite(705, 300, 75, 45);
	  s23.addImage(whitesusImg);
	  s23.scale = 0.3;

	  s24 = createSprite(840, 540, 75, 45);
	  s24.addImage(whitesusImg);
	  s24.scale = 0.3;

	  s25 = createSprite(840, 405, 45, 75);
	  s25.addImage(whitesusImg);
	  s25.scale = 0.3;

	  console.log("work pls");

	  line(365, 60, 925, 60);

	  line(925, 60, 930, 580);

	  line(930, 580, 365, 580);

	  line(365, 580, 365, 60);

	  gameState = 2;
  }
  textSize(25);
  fill("black");
  if (gameState === 0){
  text("Food Left: " + food, displayWidth/2-120, displayHeight/4);
  }
}

function keyPressed(){
	if(keyCode === 32 && gameState === 0){
		food = food-1;
		MrJimmyJoe.scale = MrJimmyJoe.scale+0.2
	}
}

function mouseClicked(){
	if (gameState === 2){
		console.log(gameState)
		invSpr = createSprite(mouseX, mouseY, 5, 5);
		invSpr.visible = false;
		if (invSpr.isTouching(s12)){
		s12.addImage("white", whitesusImg);
		s12.changeImage("white", whitesusImg);
	}
	}
}