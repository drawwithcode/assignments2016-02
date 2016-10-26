function setup() {
  createCanvas(800, 600)
  frameRate(12)
  angleMode(DEGREES)
  background(50)
}

function draw() {
  var f = frameCount
  translate(width / 2, height / 2);
  stroke(1)
  line(100, 0, cos(frameCount * 3) * 100, sin(frameCount * 3) * 100)


  rotate(f * 3)
  noFill()
  stroke(lerpColor(color("#ea0043"), color("#0fefca"), frameCount / 120))
  ellipse(100, 0, 300, 300)
  rotate(-f * 3)

  translate(-width / 4, -height / 4)
  rotate(f * 3)
  ellipse(30, 0, 100, 100)
  rotate(-f * 3)

  translate(width / 2, 0)
  rotate(f * 3)
  ellipse(30, 0, 100, 100)
  rotate(-f * 3)

  translate(0, height / 2)
  rotate(f * 3)
  ellipse(30, 0, 100, 100)
  rotate(-f * 3)

  translate(-width / 2, 0)
  rotate(f * 3)
  ellipse(30, 0, 100, 100)
  rotate(-f * 3)


  if (f == 120) {
    noLoop()
  }
}