/* qui c'è la versione SEMPLICE in bianco e nero come mostrato dal disegno


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
  background(255);
    noFill();
    frameRate(12);
}

function draw() {
  
 translate(width/2+150,height/2);
  
  var b = 90-frameCount*2;
  
  line(0,0,-300*cos(b)*cos(b),300*cos(b)*sin(b));
}

*/

//Qui la versione COMPLESSA

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  background(50);
  noFill();
  frameRate(12);
}

function draw() {

  translate(width / 2, height / 2);

  var b = 90 - frameCount * 3;

  stroke(lerpColor(color('#ea1c1c'), color('#1baded'), (frameCount % 120) / 120));
  line(0, 0, -300 * cos(b) * cos(b), 300 * cos(b) * sin(b));
  line(0, 0, 300 * cos(b) * cos(b), -300 * cos(b) * sin(b));

  rotate(90);
  stroke(lerpColor(color('#ffb8cc'), color('#b8f8ff'), (frameCount % 120) / 120));
  line(0, 0, -300 * cos(b) * cos(b), 300 * cos(b) * sin(b));
  line(0, 0, 300 * cos(b) * cos(b), -300 * cos(b) * sin(b));

}