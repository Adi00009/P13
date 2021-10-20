// declare all variables
var background, bow, arrow;
var bowImg, arrowImg, backgroundImg;

/* Whjr version to declare all coloured balloons
var blue, red, green, pink;
var blueImg, redImg, greenImg, pinkImg;
*/

// my version to declare a single, generic balloon variable
var balloon;

var score = 0;


function preload()
{
  // load all images
  backgroundImg = loadImage("background.png");
  bowImg = loadImage("bow.png");
  arrowImg = loadImage("arrow.png");

  /* Whjr version to load all separate coloured balloon images
  blueImg = loadImage("blue_balloon.png");
  redImg = loadImage("red_balloon.png");
  greenImg = loadImage("green_balloon.png");
  pinkImg = loadImage("pink_balloon.png");
  */
}


function setup()
{
  // create a 400 * 400 canvas 
  createCanvas(400, 400);
  
  // create background, add image and scale it
  background = createSprite(0, 0, 400, 400);
  background.addImage(backgroundImg);
  background.scale = 2.5;
  
  // create bow and add image
  bow = createSprite(380, 200, 20, 50);
  bow.addImage(bowImg);
}


function draw()
{
  // scroll ground horizontally leftwards
  background.velocityX = -3 

  // reset ground from centre when escapes canvas
  if (background.x < 0){
    background.x = background.width/2;
  }
  
  // move bow vertically with mouse pointer
  bow.y = World.mouseY
  
   // create and release arrow when space key pressed
  if (keyDown("space")) {
    createArrow();
  }

  /* Whjr version to spawn random coloured balloon
  
  // select a random balloon colour number from 1 to 3
  var select_balloon_number = Math.round(random(1, 3));

  // spawn balloon in every 100 frame counts
  // appear slightly before the previous balloon disappears (in 400/3 or 133.333 frame counts))
  if (World.frameCount % 100 == 0) {
  // spawn a random coloured ballon based on the random colour number created
    if (select_balloon == 1) {
      blueBalloon();
    } else if (select_balloon == 2) {
      redBalloon();
    } else if (select_balloon == 3) {
      greenBalloon();
    } else {
      pinkBalloon();
    }
  }
  */

  // my version to spawn a random coloured balloon
  spawnBalloon();

  // draw sprites
  drawSprites();

  // display score on canvas
  text("Score: "+ score, 300, 50);
}


function createArrow() {
  // create arrow vertically aligned with bow, add image and scale it
  arrow = createSprite(360, bow.y, 60, 10);
  arrow.addImage(arrowImg);
  arrow.scale = 0.3;

  // shoot arrow horizontally leftwards
  arrow.velocityX = -4;

  /*
  destroy arrow after 100 frame counts

  speed = distance/time
  hence, time = distance/speed
        = canvas width (px) / velocity (px per frame)
        = 400 px / 4 px/frame
        = 100 frames

  thus, an obstacle would take 100 frame counts to reach the left edge and must be destroyed then
  */
  arrow.lifetime = 100;
}

// my version to spawn a random coloured balloon
function spawnBalloon() {
  // create balloon once in every 100 frame counts
  // appear slightly before the previous balloon disappears (in 400/3 or 133.333 frame counts))
  if (World.frameCount % 100 == 0) {
    // create a balloon colours array to pick a random one
    var select_balloon_array = ["blue", "red", "green", "pink"];

    // choose a random balloon olour from the colours array
    var select_balloon = select_balloon_array[Math.round(random(0, 3))];
    
    // create balloon at a random vertical position, add image and scale it
    balloon = createSprite(0, random(30, 370), 10, 10);
    balloon.addImage(loadImage(select_balloon+"_balloon.png"));
    balloon.scale = 0.1;

    if (select_balloon == "pink") {
      balloon.scale = 1.3;
    }

    // move balloon horizontally rightwards
    balloon.velocityX = 3;

    /*
    destroy balloon after 400/3 or 133.333 frames

    speed = distance/time
    hence, time = distance/speed
          = canvas width (px) / velocity (px per frame)
          = 400 px / 3 px/frame
          = 400/3 or 133.333 frames

    thus, an obstacle would take 400/3 or 133.333 frame counts to reach the left edge and must be destroyed then
    */
    balloon.lifetime = 400/3;
  }
}

/* Whjr version

function blueBalloon() {
  // create blue ballon at random vertical position, add image and scale it
  var blue = createSprite(0, Math.round(random(30, 370)), 10, 10);
  blue.addImage(blueImg);
  blue.scale = 0.1;

  // move horizontally rightwards
  blue.velocityX = 3;

  // destroy balloon after 400/3 or 133.333 frame counts
  // calculation explained in spawnBalloon function above
  blue.lifetime = 400/3;
}

function redBalloon() {
  // create red ballon at random vertical position, add image and scale it
  var red = createSprite(0, Math.round(random(30, 370)), 10, 10);
  red.addImage(redImg);
  red.scale = 0.1;

  // move horizontally rightwards
  red.velocityX = 3;

  // destroy balloon after 400/3 or 133.333 frame counts
  // calculation explained in spawnBalloon function above
  red.lifetime = 400/3;
}

function greenBalloon() {
  // create green ballon at random vertical position, add image and scale it
  var green = createSprite(0, Math.round(random(30, 370)), 10, 10);
  green.addImage(greenImg);
  green.scale = 0.1;

  // move horizontally rightwards
  green.velocityX = 3;

  // destroy balloon after 400/3 or 133.333 frame counts
  // calculation explained in spawnBalloon function above
  green.lifetime = 400/3;
}

function pinkBalloon() {
  // create pink ballon at random vertical position, add image and scale it
  var pink = createSprite(0, Math.round(random(30, 370)), 10, 10);
  pink.addImage(pinkImg);
  pink.scale = 0.1;

  // move horizontally rightwards
  pink.velocityX = 3;

  // destroy balloon after 400/3 or 133.333 frame counts
  // calculation explained in spawnBalloon function above
  pink.lifetime = 400/3;
}

*/

