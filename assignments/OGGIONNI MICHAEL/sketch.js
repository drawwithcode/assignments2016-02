function setup() {
  createCanvas(800, 600)
  background(40)
}

function draw() {
  ellipse(width / 2, height / 2, 600, 600)
  noFill()

  translate(width / 2, height / 2)

  if (frameCount <= 60) {

    var alp = PI / 30;

    var x = cos(frameCount * alp);
    var y = sin(frameCount * alp);

    line(300, 0, x * 300, y * 300)
    stroke("#ea0043")


  }

}