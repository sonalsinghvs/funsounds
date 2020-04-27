var volhistory = [];

function preload() {
  sounda = loadSound('sounds/a.wav');
  soundb = loadSound('sounds/b.wav');
  soundc = loadSound('sounds/c.wav');
  soundd = loadSound('sounds/d.wav');
  sounde = loadSound('sounds/e.wav');
}

function setup() {
  createCanvas(1800, 200);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0, 0, 0);
  let level = amplitude.getLevel();
  volhistory.push(level);
  stroke(255);
  noFill();
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(3 * volhistory[i], 0, 1, 100, 0);
    vertex(i, y);
  }
  endShape();
  if (volhistory.length > width) {
    volhistory.splice(0, 1);
  }
}

function playA() {
  if (sounda.isPlaying()) {
    sounda.stop();
  } else {
    sounda.play();
  }
}
function playB() {
  if (soundb.isPlaying()) {
    soundb.stop();
  } else {
    soundb.play();
  }
}
function playC() {
  if (soundc.isPlaying()) {
    soundc.stop();
  } else {
    soundc.play();
  }
}
function playD() {
  if (soundd.isPlaying()) {
    soundd.stop();
  } else {
    soundd.play();
  }
}
function playE() {
  if (sounde.isPlaying()) {
    sounde.stop();
  } else {
    sounde.play();
  }
}