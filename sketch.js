const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var box1,box2,box3;

function setup(){
	
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,580,800,20,ground_options);
    World.add(world,ground);

    var ball_options={
		restitution:0.3,
		density:1.2,
		friction:0.5,
		isStatic:false,  
	}

	ball=Bodies.circle(150,480,20,ball_options);
    World.add(world,ball);
    
    

    box1= new Box(670,562,150,12)
    box2= new Box(590,525,10,90);
    box3= new Box(750,525,10,90);
   

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("yellow");
    rect(ground.position.x,ground.position.y,800,20);
    fill ("green");
	circle(ball.position.x,ball.position.y,40);
	
    box1.display();
    box2.display();
    box3.display();
}

function keyPressed(){
    if(keyCode==UP_ARROW&&ball.position.x==150){
        Matter.Body.applyForce(ball,ball.position,{x:55,y:-55});
        
         }
}




