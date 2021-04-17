const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70)
    box2 = new Box(400,320,70,70)
    pig1 = new Pig(550,320)
    log1 = new Log(550,260,375,PI/2)

    box3 = new Box(700,250,70,70)
    box4 = new Box(400,250,70,70)
    pig2 = new Pig(550,250)
    log2 = new Log(550,200,375,PI/2)

    box5 = new Box(700,180,70,70)
    box6 = new Box(400,190,70,70)
    pig3 = new Pig(550,180)
    log3 = new Log(550,130,375,PI/2)

    box7 = new Box(550,90,70,70)
    log4 = new Log(650,30,170,-PI/7)
    log5 = new Log(500,30,170,PI/7)

    bird = new Bird(0,0,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    box6.display();
    pig3.display();
    log3.display();

    box7.display();
    log4.display();
    log5.display();

    bird.display();
}