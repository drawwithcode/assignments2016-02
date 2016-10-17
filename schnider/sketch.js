function setup() {
    createCanvas(800,600);
    frameRate(12);
}

function draw() {
    translate(width/2,height/2)

    if(frameCount<=60){
        stroke(255)
    
        var alp = PI/30;
      
        var x = Math.cos(frameCount*alp);
        var y = Math.sin(frameCount*alp);
    
        line(300,0,x*300,y*300)
    }
}