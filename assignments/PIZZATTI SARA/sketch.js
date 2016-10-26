function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(12);
  background(50);
}

function draw() {
  translate(width/2,height/2);
  rotate(100);
  stroke(lerpColor(color('#ea0043'),color('#0fefca'),(frameCount%360)/360));
  line(200,0,200*cos(frameCount),200*sin(frameCount))
}