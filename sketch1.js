var canvas;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
    colorMode(HSB, 255, 100, 100);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1')
}

function draw(){
  clear();
  // background((mouseX/5)%50, 30, 70);
    
}