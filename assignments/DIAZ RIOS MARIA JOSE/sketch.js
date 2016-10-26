function setup() {
  createCanvas(800, 600)
  noFill()
  angleMode(DEGREES)
  frameRate(12)
  background(40)
}

function draw() {

  translate(width / 2, height / 2)
  rotate(frameCount * 3)

  //shapes

  stroke(lerpColor(color("#ea0043"), color("#0fefca"), (frameCount % 12) / 12))
  noFill()
  triangle(0, 0, 200, 0, 0, 200)

  stroke(lerpColor(color("#ea0043"), color("#0fefca"), (frameCount % 5) / 5))
  noFill()
  ellipse(0, 100, 100, 100)

  stroke(lerpColor(color("#ea0043"), color("#0fefca"), (frameCount % 12) / 12))
  noFill()
  triangle(0, 0, 0, 100, 0, 100)

  stroke(lerpColor(color("#ea0043"), color("#0fefca"), (frameCount % 10) / 10))
  noFill()
  ellipse(0, 300, 200, 200)

  stroke(lerpColor(color("#ea0043"), color("#0fefca"), (frameCount % 10) / 10))
  noFill()
  triangle(0, 0, 1000, 0, 0, 1000)


}