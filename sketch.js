var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle;

var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState= "start";
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill ("white");
 text("Score : "+score,20,30);
 
 textSize(30);
 fill("white");
 text(" 500 ",10,510);
 text(" 500 ",90,510);
 text(" 500 ",170,510);
 text(" 500 ",250,510);
 text(" 100 ",320,510);
 text(" 100 ",400,510);
 text(" 100 ",480,510);
 text(" 200 ",570,510);
 text(" 200 ",640,510);
 text(" 200 ",720,510);
 
  Engine.update(engine);
 
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
    console.log("hi"+particle);
   if(particle!==null)
   {
    console.log("hi1"+particle);
     particle.display();
     if(particle.body.position.x>760);
     {
       if(particle.body.position.x<300)
       {
         score=score+500;
         particle = null;
         if(count>=5)gameState = "end"; 
       }
       
     }
   }
   strokeWeight(7);
   stroke("yellow")//line(x1,y1,x2,y2)
   line (width/2,height/2,width,10);
  }

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX,10,10);
    console.log(particle);
  }
}