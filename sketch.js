//main program

//create a fireworks array
var fireworks = [];

//create a gravity variable
var gravity;

//setup
function setup() {
  //create a canvas width = 1350, height = 600
  createCanvas(1350,600);

  //gravity is a vector with x=0, y = 0.2
  gravity = createVector(0,0.2);

  //set color mode as HSB
  colorMode(HSB);

  //set the color
  //stroke(255);

  //set bolder
  //strokeWeight(4);

  //set background
  //background(0);
}

function draw() {
  //change colorMode as RGB
  colorMode(RGB);

  //select background color and alpha for canvas
  //background(0,24,72,50);
  //background(0,51,102,50);
  background(47,79,79,50);

  if(random(1)<0.008)
  {
    fireworks.push(new Firework());
  }

  for(var i = fireworks.length-1; i>=0;i--){
    //update fireworks[i] object
    fireworks[i].update();
    //show fireworks[i] object
    fireworks[i].show();
    //check if fireworks[i] is done yet
    if(fireworks[i].done()){
      fireworks.splice(i,1);
    }
  }
  console.log(fireworks.length);
}
