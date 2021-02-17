const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var shooter, shooterImage;

var platform1, platform2, platform3;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9, block10, block11, block12;
var slingshot;

function preload() {
    shooterImage = loadImage('polygon.png');
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    shooter = Bodies.rectangle(100,600,20,20, {isStatic: false});

    block1 = new Block(200,200);

    slingshot = new Slingshot(shooter,150,500);

    platform1 = new Ground(width/2,height-20,width,40);
    platform2 = new Ground(600,height/2+200,300,20);
    platform3 = new Ground(1000,height/2,300,20);

    World.add(world,[shooter,block1]);
}

function draw() {
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    background(0);
    
    image(shooterImage,shooter.position.x,shooter.position.y,40,40);
    //console.log(shooter.position.y);

    slingshot.display();
    block1.display();

    platform1.display();
    platform2.display();
    platform3.display();
}