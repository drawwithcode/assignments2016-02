/* Ho sbirciato sul libro in bibliografia, ma non sono sicura di cosa sia uscito fuori*/

var angle = 0.0;
var offset = 200;
var scalar = 200;
var speed = 12;

function setup() {
createCanvas(800, 600);
background(50);
}

function draw() {

translate((width/2-200), (height/2-220))

strokeWeight(1);
stroke(lerpColor(color('#aa0057'), color('#00ffff'), ((frameCount%120)/120)));
    
var x = offset + cos(angle) * scalar;
var y = offset + sin(angle) * scalar;
line(x, y, 270, 270);
angle += mouseX;
}