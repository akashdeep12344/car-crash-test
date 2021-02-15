var car,wall;

var speed,weight;

function setup() {
  createCanvas(800,400);
  

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,100,20);
  wall=createSprite(400,200,20,100);
}

function draw() {
  background(255,255,255);

    car.velocityX=speed;

      if(0.5*weight*speed*speed/2250<100){
          wall.shapeColor="green";
      }
      
      if(0.5*weight*speed*speed/2250<100&&
          0.5*weight*speed*speed/225<180){
          wall.shapeColor="yellow";
          }
      
      if(0.5*weight*speed*speed/2250>180){
          wall.shapeColor="red";
  }
      
if(car.x-wall.x<wall.width/2+car.width/2&&
  
wall.x-car.x<=wall.width/2+car.width/2 &&
              
car.y-wall.y<wall.height/2+car.height/2&&
              
wall.y-car.y<=wall.height/2+car.height/2
){

car.velocityX=0

            }
      

  drawSprites();


}