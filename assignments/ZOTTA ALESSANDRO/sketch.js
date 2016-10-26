function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  background(3,36,56);
  frameRate(24);
}

function draw() {
  if(frameCount<=120){
    if(frameCount<60){
      
  
  translate(width/2,height/2);
  rotate(frameCount*3);
  colorMode(HSB);

  //azzurro #00aad1
  //rosso #ff006e
  
  stroke(lerpColor( color("#00aad1"),color("#ff006e"),(frameCount%60)/60));
  noFill();
  rect(50,0,140,140);
  }
  if(frameCount>59){
      
  
  translate(width/2,height/2);
  rotate(frameCount*3);
  colorMode(HSB);

  //azzurro #00aad1
  //rosso #ff006e
 
  
  stroke(lerpColor( color("#ff006e"),color("#00aad1"),(frameCount%60)/60));
  console.log((frameCount%60) + " " + ((frameCount%60)/60));
  noFill();
  rect(50,0,140,140);
  }
  if(frameCount==120){
  stroke("#00aad1");
  noFill();
  rect(50,0,140,140);
  }}
  
}