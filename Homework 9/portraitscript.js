function setup() {
 createCanvas(1000, 1000);
}

function draw(){
    background(97,4,147);
 textSize(20);
 text("Title: Me if I had pyramid hair and the Roblox Chad Face",0,20 );
 text("By: Ben Nickel",0,40);
 //head + neck
 strokeWeight(1);
 fill(255,234,158);
 quad(442,303,521,303,521,375,442,375)
 ellipse(482,220,150,200);
 fill(58,43,0)
 quad(370,200,482,80,482,140,420,200);
 quad(482,140,482,80,594,200,544,200);
 //Roblox chad face (real)
 strokeWeight(0);
 fill(255,255,255);
 quad(433,220,443,212,458,212,468,220);
 quad(443,228,433,220,468,220,458,228);
 quad(495,220,505,212,520,212,530,220);
 quad(505,228,495,220,530,220,520,228);
 strokeWeight(15);
 point(450,220);
 point(512,220);
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
 triangle(482,235,487,255,477,255);
 //body
 fill(0,19,142);
 rect(290,375,383,600);
 quad(672,375,1000,586,1000,686,672,475);
 quad(290,375,0,586,0,686,290,475);
 fill(0,0,0);
 quad(290,975,457,975,457,1000,290,1000);
 quad(673,975,505,975,505,1000,673,1000);
}
