let x=200;
// declare variables here
function setup() {
  createCanvas(500, 500);

  // set background color in grayscale:
  background(150);

 fill(0, 0, 255);

   noStroke();
   fill(100);
   rect(255,0,255);

   stroke(255, 0, 0);
   strokeWeight(10);
   rect(200, 200, 20)
  // draw ellipse
}

function draw() {
  //
background(1);
 rect(x, 200, 80, 80);
 x=x+1;
 if (x>width+20)
  {
    x=-20;
  }
}
