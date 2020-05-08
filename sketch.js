// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var canonball,ball;
var ground;
var tankBody,tankShooter;
var wallLeft,wallRight,roof;

function setup() {
    
    createCanvas(window.innerWidth,window.innerHeight);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(380,70,50);
    ground = new Ground(window.innerWidth/2,528,window.innerWidth,20);
    tankBody = new Tanker(200,120,250,200);
    tankShooter = new TankShooter(325,170,50,100,PI/2);
    wallLeft = new Ground(window.innerWidth,window.innerHeight/2,80,700);
    wallRight = new Ground(0,window.innerHeight/2,50,700);
    roof = new Ground(window.innerWidth/2,10,window.innerWidth,30)
}

function draw() {
Engine.update(engine);
background(255);

ground.display();
tankBody.display();
tankShooter.display();
wallLeft.display();
wallRight.display();
roof.display();
ball.display();
}