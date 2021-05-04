var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces
surface1=createSprite(110, 585, 185, 22);
surface1.shapeColor=color("red");

surface2=createSprite(305, 585, 185, 22);
surface2.shapeColor=color("blue");

surface3=createSprite(500, 585, 185, 22);
surface3.shapeColor=color("orange");

surface2=createSprite(695, 585, 185, 22);
surface2.shapeColor=color("green");

//create box sprite and give velocity
box=createSprite(395, 150, 25,25);
box.shapeColor="white";
box.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

box.bounceOff(surface1);
box.bounceOff(surface2);
box.bounceOff(surface3);
box.bounceOff(surface4);

    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="red";
}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="blue";
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="orange";
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="green";
}

    drawSprites();
}
