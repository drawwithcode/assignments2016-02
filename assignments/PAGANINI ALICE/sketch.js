function setup() {
  createCanvas(800, 600);
  background(40);
  angleMode(DEGREES);
  frameRate(12);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(frameCount * 3);
  noFill();
  stroke(lerpColor(color(90, 180, 46), color(200, 40, 70), (frameCount % 5) / 5));
  rect(10, 50, 250, 250)

  rotate(frameCount * 3);
  noFill();
  stroke(lerpColor(color(40, 100, 100), color(180, 40, 190), (frameCount % 8) / 10));
  ellipse(10, 40, 600, 200)

  rotate(frameCount * 3);
  noFill();
  stroke(lerpColor(color(10, 200, 90), color(160, 40, 190), (frameCount % 8) / 10));
  arc(150, 30, 300, 70, 300, 100, CHORD);
}