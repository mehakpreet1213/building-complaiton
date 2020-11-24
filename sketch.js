const Engine=Matter.Engine;  
const World=Matter.World;  
const Bodies=Matter.Bodies;  
const Constraint=Matter.Constraint;

var engine,world;
var Ground;
function setup(){

createCanvas(3000,800);
engine=Engine.create();
world=engine.world;

Ground=new ground(1500,780,3000,20);
Ball=new ball(3,4,50,50)
string=new slingshot(Ball.body,{x:500,y:100})
//floor1
box1= new Box(700,100,200,200)
box2 =new Box(900,100,200,200)
box3 =new Box(1100,100,200,200)
//floor2
box4= new Box(700,100,200,200)
box5 =new Box(900,100,200,200)
box6 =new Box(1100,100,200,200)
//floor3
box7= new Box(700,100,200,200)
box8 =new Box(900,100,200,200)
box9 =new Box(1100,100,200,200)
//floor4
//box1= new Box(700,100,200,200)
//box2 =new Box(900,100,200,200)
//box3 =new Box(1100,100,200,200)


}

function draw(){
background("yellow")
Engine.update(engine);
Ground.display();


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();


Ball.display();

string.display();
}


function mouseDragged(){
Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}
