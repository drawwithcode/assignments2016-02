function setup() {
  createCanvas(800, 600);
  background(50);
  angleMode(DEGREES);
  
  frameRate(12);
}

function draw() {
  translate(width/2,height/2);
 
  noFill();
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), (frameCount%180)/180));
  line(width/4, 0, width/4*cos(frameCount*2), height/4*sin(frameCount*2));
 // line(-width/4,0,width/4*cos(frameCount*2),height/4*sin(frameCount*2));
  
}

