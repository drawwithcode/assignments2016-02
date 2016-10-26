function setup() {
  createCanvas(800, 600)
  noFill()
  angleMode(DEGREES)

  frameRate(12) //1 sec = 12 frames , 10 secs = 120 frames 
  background(40)
}

function draw() {
  translate(width / 2, height / 2)
  rotate(frameCount * 3) //1 sec = 
    // Red color #ea0043
    // Blue color #0fefca
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), (frameCount % 120) / 120))
  ellipse(100, 0, 250, 250)


}