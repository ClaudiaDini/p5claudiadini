function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  const s = 100;

  rect(0, 0, s, s);
  rect(0, height - s, s, s);
  rect(width - s, 0, s, s);
  rect(width - s, height - s, s, s);

  textSize(50);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign("center");
  text("Claudia Dini", width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
