var mySound1;
var mySound2;
var mySound3;

function preload() {
  mySound1 = loadSound('assets/Cartoon-running-sound.mp3');
  mySound2 = loadSound('assets/Tawny-owl-call.mp3');
  mySound3 = loadSound('assets/Cartoon-eye-blink-sound-effect.mp3');
}

function setup() { 
  mySound1.setVolume(0.1);
  mySound2.setVolume(0.1);
  mySound3.setVolume(0.1);
  createCanvas(100, 100);
}

function draw() {
    background(120);
}

function keyPressed() {
 
  if (key == 'R') {
     mySound1.play();
  } else if (key == 'G') {
    mySound2.play();
  } else if (key == 'B') {
    mySound3.play();
 
  }
}

function mousePressed() {
  mySound1.play();
}
