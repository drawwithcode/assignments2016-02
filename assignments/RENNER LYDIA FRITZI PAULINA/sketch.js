function setup() {
  createCanvas(800, 600)
  noFill()
  angleMode(DEGREES);
  frameRate(12)
  background(40)
}

function draw() {
  translate(width / 2, height / 2)
  rotate(frameCount * 3)
  stroke(lerpColor(color(255, 0, 0), color(0, 0, 255), (frameCount % 120) / 120))
  if (mouseIsPressed) {
    fill(125, 82, 205);
  } else {
    fill(77, 243, 217);
    ellipse(100, 0, 250, 250)

  }
}