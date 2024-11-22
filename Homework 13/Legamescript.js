//circle parameter arrays
var xX = [];
var yY = [];
var dieIAmAMeter = [];
var redSus = [];
var blueWaffle = [];
var greenMnM = [];
//array generated obstical movement variables
var Xmove = [];
var directionChangeDistanceX = [];
var Ymove = [];
var directionChangeDistanceY = [];

function setup() {
 createCanvas(1000, 1000);

for(o = 0; o < 6; o++) {
    xX[o] = random(0, 1000);
    yY[o] = random(0, 1000);
    dieIAmAMeter[o] = random(150, 300);

    redSus[o] = random(0, 255);
    blueWaffle[o] = random(0, 255);
    greenMnM[o] = random(0, 255);

    Xmove[o] = random(-15,15);
    directionChangeDistanceX[o] = random(100, 900);
    Ymove[o] = random(-15,15);
    directionChangeDistanceY[o] = random(100, 900);
 }
}
//player variables
var circlex = 500;
var circley = 900;
//obstical variables
var randomX1 = 0;
var randomY1 = 500;
var randomX2 = 300;
var randomY2 = 500;
//placable obstical variables
var pointerX;
var pointerY;
function draw(){
background(97,4,147);
//player
createPlayer();
//player controls
playerControls(10,10,10,10);
//walls
walls();
//obstical one and its border and movement mechanics
obsticalOne();
//obstical two and its border and movement mechanics
obsticalTwo();
//placeable obstical
placeableObstical();
//exit + label
exit();
//victory text and detection
victoryText();
//spawns array generated obsticals
arrayObsticalSpawns();
//randomly moves array generated obsticals
arrayObsticalMovement();
}
//placing mechanic
function mousePressed() {
    pointerX = mouseX;
    pointerY = mouseY;
}

function createPlayer () {
fill(34,74,164);
circle(circlex,circley,50);
}

function playerControls (downSpeed, upSpeed, leftSpeed, rightSpeed) {
    if(keyIsDown(87)) {
        circley -= upSpeed;
    }
    else if(keyIsDown(83)) {
        circley += downSpeed;
    }
    if(keyIsDown(65)) {
        circlex -= leftSpeed;
    }
    else if(keyIsDown(68)) {
        circlex += rightSpeed;
    }
}

function walls () {
    if(circlex > 1000 || circlex < 0) {
        if(circlex > 1000) {
        circlex -= 12;
        }
        else {
            circlex += 12;
        }
    }
    else if(circley > 1000) {
        circley -= 12;
    }
    else if(circley < 0) {
        circley += 12;
    }
}

function obsticalOne () {
fill(44,243,89);
triangle(randomX1, randomY1, randomX1 + 240, randomY1 + 240, randomX1, randomY1 + 240);
randomX1 += random(-5,5);
randomY1 += random(-5,5);

if(randomX1 > 1000) {
    randomX1 = 0;
}
else if(randomX1 < 0) {
    randomX1 = 1000;
}
else if(randomY1 > 1000) {
    randomY1 = 0;
}
else if(randomY1 < 0) {
    randomY1 = 1000;
    }
}

function obsticalTwo () {
fill(77,12,178);
rect(randomX2, randomY2, 700, 200)
randomX2 += random(-5,5);
randomY2 += random(-5,5);

if(randomX2 > 1000) {
    randomX2 = 0;
}
else if(randomX2 < 0) {
    randomX2 = 1000;
}
else if(randomY2 > 1000) {
    randomY2 = 0;
}
else if(randomY2 < 0) {
    randomY2 = 1000;
    }
}

function placeableObstical () {
    fill(53,11,235);
    square(pointerX, pointerY, 250);
}

function exit () {
textSize(30);
fill(255,0,0);
text("Exit ->", 350,30)
fill(255,64,187);
rect(450, 0, 100, 50);
}

function victoryText () {
    fill(99,99,99)
    if(circlex > 450 && circlex < 550 && circley > 0 && circley < 50) {
        textSize(60);
        text("VICTORY!!",400,350);
    }
}

function arrayObsticalSpawns () {
    for(p=0;p<6;p++) {
        fill(redSus[p], blueWaffle[p], greenMnM[p]);
        circle(xX[p], yY[p], dieIAmAMeter[p]);
         }
}

function arrayObsticalMovement () {
    for(k=0;k<6;k++) { 
        xX[k] += Xmove[k];
        if(xX[k] <= directionChangeDistanceX[k]) {
          Xmove[k] = random(-15,15);
          directionChangeDistanceX[k] = random(100, 900);
        }
       if(xX[k] > 1000) {
        xX[k] = 0;
       }
       if(xX[k] < 0) {
        xX[k] = 1000;
       }
       yY[k] += Ymove[k];
        if(yY[k] <= directionChangeDistanceY[k]) {
          Ymove[k] = random(-15,15);
          directionChangeDistanceY[k] = random(100, 900);
        }
       if(yY[k] > 1000) {
        yY[k] = 0;
       }
       if(yY[k] < 0) {
        yY[k] = 1000;
      }
     }
}