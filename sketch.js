var car,wall;

var speed,weght;

function Setup()
{

 createCanvas(400,400);
 
 car=createSprite(50,200,50,50);
car.velocityX = speed;
car.shapeColor="white";

 wall=createSprite(1500,200,60,height/2);
 wall.shapeColor="light gray";

}
function draw()
{
brackground("black");

if(wall.x - car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var defromation=0.5*width * speed * speed/22509;

if(defromation>180)
{
    car.shapeColor=color(255,0,0);
}
if(defromation<180 && defromation>100)
{
    car.shapeColor=color(230,230,0);
}
if(defromation<100)
{
    car.shapeColor=color(0,255,0);
}

}


drawSprites()
}

