//Left hair piece variables
var hairLeft = 0;
var speed1;
speed1 = Math.floor(Math.random() * 10) + 1;
//hairLeft colors
var r1 = 58;
var g1 = 43;
var b1 = 0;
//Right hair piece variables
var hairRight = 0;
var speed2;
speed2 = Math.floor(Math.random() * 10) + 1;
//hairRight colors
var r2 = 58;
var g2 = 43;
var b2 = 0;
//Left eye pupil variables
var leftEye = 0;
var speed3;
speed3 = Math.floor(Math.random() * 10) + 1;
//Right eye pupil variables
var rightEye = 0;
var speed4;
speed4 = Math.floor(Math.random() * 10) + 1;
//Nose variables
var noseX = 0;
var noseY = 0;
var noseSpeedX;
var noseSpeedY;
noseSpeedX = Math.floor(Math.random() * 10) + 1;
noseSpeedY = Math.floor(Math.random() * 10) + 1;
//Head variables
var headGrowth = 0;
var headGrowthRate = 2;
//Title variables
var titleX = 0;
var titleY = 20;
var titleSize = 20;
var titleSizeChange = -4;

function setup() {
 createCanvas(1000, 1000);

}
var hairLeft = 0;
function draw(){
    background(97,4,147);
 textSize(titleSize);
 text("Title: Me if I had pyramid hair and the Roblox Chad Face",titleX,titleY);
 textSize(20);
 text("By: Ben Nickel",0,40);
 //head + neck
 strokeWeight(1);
 fill(255,234,158);
 quad(442,303,521,303,521,375,442,375)
 ellipse(482,220,150 + headGrowth * 0.75,200 + headGrowth);
 //hair
 fill(r1,g1,b1);
 quad(370 + hairLeft,200,482 + hairLeft,80,482 + hairLeft,140,420 + hairLeft,200);
 fill(r2,g2,b2);
 quad(482 + hairRight,140,482 + hairRight,80,594 + hairRight,200,544 + hairRight,200);
 //Roblox chad face (real)
 strokeWeight(0);
 fill(255,255,255);
 quad(433,220,443,212,458,212,468,220);
 quad(443,228,433,220,468,220,458,228);
 quad(495,220,505,212,520,212,530,220);
 quad(505,228,495,220,530,220,520,228);
 strokeWeight(15);
 point(450,220 + leftEye);
 point(512,220 + rightEye);
 strokeWeight(1);
 line(446,210,466,210);
 line(518,210,498,210);
 line(472,214,476,222);
 line(492,214,488,222);
 strokeWeight(4);
 line(430,202,443,198);
 line(443,198,470,202);
 line(532,202,519,198);
 line(519,198,492,202);
 strokeWeight(3);
 line(445,275,446,288);
 line(445,278,506,276);
 line(506,276,522,268);
 fill(255,234,158);
 curve(618,210,540,247,529,290,523,357);
 strokeWeight(1);
 //nose
 triangle(482+ noseX,235 + noseY,487 + noseX,255 + noseY,477 + noseX,255 + noseY);
 //body
 fill(0,19,142);
 rect(290,375,383,600);
 quad(672,375,1000,586,1000,686,672,475);
 quad(290,375,0,586,0,686,290,475);
 fill(0,0,0);
 quad(290,975,457,975,457,1000,290,1000);
 quad(673,975,505,975,505,1000,673,1000);

if(hairLeft >= 0 || hairLeft <= -370) {
    speed1 *= -1;
}
if(hairLeft <= -370) {
    r1 = random(0, 255);
    g1 = random(0, 255);
    b1 = random(0, 255);
}
hairLeft += speed1;

if(hairRight >= 406 || hairRight < 0) {
    speed2 *= -1;
}

if(hairRight >= 406) {
    r2 = random(0, 255);
    g2 = random(0, 255);
    b2 = random(0, 255);
}

hairRight += speed2;

if(leftEye >= 780 || leftEye <= -220) {
    speed3 *= -1;
}

leftEye -= speed3;

if(rightEye >= 780 || rightEye <= -220) {
    speed4 *= -1;
}

rightEye += speed4;

if(noseX >= 513 || noseX <= -477 || noseY >= 745 || noseY <= -235) {
    noseSpeedX *= -1;
    noseSpeedY *= -1;
}

noseX += noseSpeedX;
noseY += noseSpeedY;

if(headGrowth > 200 || headGrowth < 0) {
    headGrowthRate *= -1;
}

headGrowth += headGrowthRate;

if(titleX <= 0 && titleY < 60) {
    titleY += 2;
}
if(titleX <= 40 && titleY >= 60) {
    titleX += 2;
}
if(titleX >= 40 && titleY >= 20) {
    titleY -= 2;
}
if(titleX > 0 && titleY <= 20) {
    titleX -= 2;
}

if(titleSize <= 20 || titleSize >= 40) {
    titleSizeChange *= -1;
}

titleSize += titleSizeChange;

}
