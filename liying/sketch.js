function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
  frameRate(10)
}

function draw() {
  stroke(255);
  //var Define variable
  var degree = frameCount*2 % 360;
  var radian = degree * PI / 180;
  var length = 200 * Math.cos(PI / 2 - radian);
  
  translate(width / 2,height / 2);
  rotate(frameCount*2);
  line(0,0,0,length);
    
}