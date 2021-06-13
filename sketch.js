var bgimg,bgimg2,bg;

var plane,planeimg,planeimg2;

var edges;

var wall;

function preload(){

    bgimg=loadImage("images/bg1.jpg");

    //bgimg2=loadAnimation("images/bluemoon.png");

    planeimg=loadAnimation("images/plane1.png");

    planeimg2=loadAnimation("images/plane2.png");

}

function setup(){

    createCanvas(displayWidth,displayHeight);

    plane=createSprite(200,displayHeight/2+300,20,20);

    plane.addAnimation("plane1",planeimg);

    plane.addAnimation("plane2",planeimg2);

    plane.scale=0.2;

    bg=createSprite(0,0,displayWidth*2,displayHeight*2);

    bg.addImage(bgimg);

    //bg.addImage(bgimg2);

    bg.scale=4.5;

    edges=createEdgeSprites();
    
    wall=createSprite(displayWidth/2,displayHeight/2+300,displayWidth,20)

    wall.shapeColor="red";

    wall.visible=false;

}

function draw(){

    background(0);

    bg.velocityX=5;

    if(bg.x>400){

        bg.x=300;
    }

    if(keyDown("up")){

        plane.velocityY=plane.velocityY-2;

    }

    if(keyDown("down")){

        plane.velocityY=plane.velocityY+2;

    }

    if(keyDown("right")){

        plane.velocityX=plane.velocityX+2;

    }

    if(keyDown("left")){

        plane.velocityX=plane.velocityX-2;

    }

    if(keyCode === 13){

        plane.changeAnimation("plane2",planeimg2);

        plane.scale=0.4;

        //bg.addImage("bg2" ,bgimg2);
               
    }

    if(keyCode === 32){

        plane.changeAnimation("plane1",planeimg);

        plane.scale=0.2;

        //bg.addImage("bg" ,bgimg);

    }

    plane.collide(edges[2]);

    plane.collide(edges[3]);

    plane.collide(wall);

    plane.depth=bg.depth;

    plane.depth=plane.depth+1;

    drawSprites();

}