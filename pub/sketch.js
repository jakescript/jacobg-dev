
let font;
let bounds;
let pts;
let size = 150;
let name = "jacob g";
let len = 10
function preload(){
  font = loadFont("Poppins-Regular.ttf");
}

function setup() {
  let c = createCanvas(800, 250);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  pts = font.textToPoints(name, 0,0, size);
  bounds = font.textBounds(name,0,0,size);
  textFont(font);
  c.parent("sketch-holder");
}

let color;
function draw() {
  background("#0C4A60");
  strokeWeight(3);
  beginShape()
  for(let i = 0; i < pts.length; i++){
    // colorMode(HSL)
    stroke("#EF6C33 ");
    
    let pt = pts[i]
    push()
    translate(width / 2 + bounds.x, height / 2);
    line(pt.x - len, pt.y - len, pt.x + len, pt.y + len);
    pop()
  }
  endShape()
  
  len += sin(frameCount / 15) * 0.2
}

//Responsive Logo
function rescale(x) {
  if (x.matches) { // If media query matches
    size = 90;
    len = 5;
  } else {
    size = 150;
  }
}

var x = window.matchMedia("(max-width: 700px)")
rescale(x) // Call listener function at run time
x.addListener(rescale) // Attach listener function on state changes
