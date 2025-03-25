function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  const s = 100;

  rect(0, 0, s, s);
  rect(0, height - s, s, s);
  rect(width - s, 0, s, s);
  rect(width - s, height - s, s, s);

  rotateY(frameCount / 30);
  text("Claudia Dini", 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
