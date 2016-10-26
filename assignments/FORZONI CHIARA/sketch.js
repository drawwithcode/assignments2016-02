function setup() {
  createCanvas(520, 400)
  background('#FF9999')
  angleMode(DEGREES)
  frameRate(60)
  noStroke()
}

function draw() {
  //blucircle
  translate(200, 150)
  push()
  rotate(frameCount * 3)
  fill(lerpColor(color('#1D71B8'), color('#FF9999'), (frameCount % 100) / 120))
  arc(-60, 0, 10, 10, 0, 360, PIE)


  pop()
  push()
    //blackcircle
  translate(80, 0)
  rotate(frameCount * 3)
  fill(lerpColor(color('#000000'), color('#FF9999'), (frameCount % 100) / 120))

  arc(-60, 0, 10, 10, 0, 360, PIE)

  pop()

  push()
    //redcircle
  translate(160, 0)
  rotate(frameCount * 3)
  fill(lerpColor(color('#BE0D0D'), color('#FF9999'), (frameCount % 100) / 120))
  arc(-60, 0, 10, 10, 0, 360, PIE)

  pop()

  push()
    //greencircle
  translate(120, 80)
  rotate(frameCount * 3)
  fill(lerpColor(color('#007F3C'), color('#FF9999'), (frameCount % 100) / 120))
  arc(-60, 0, 10, 10, 0, 360, PIE)

  pop()

  push()
    //yelowcircle
  translate(40, 80)
  rotate(frameCount * 3)
  fill(lerpColor(color('#E9D912'), color('#FF9999'), (frameCount % 100) / 120))
  arc(-60, 0, 10, 10, 0, 360, PIE)

  pop()

}