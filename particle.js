//Create a Particle object with 4 properties: x, y, hu and firework
function Particle(x,y,hu,firework){

  //variable pos
  this.pos = createVector(x,y);

  //variable firework
  this.firework = firework;

  //variable lifespan
  this.lifespan = 255;

  //variable hu
  this.hu = hu;

  //check if firework exists
  if(this.firework == true){
    //create variable vel (velocity) which is a vector, has initial x = 0 and initial y = random(-16,-12)
    this.vel = createVector(0,random(-16,-12));
  }else{//else if firework == false
    //vel is random
    this.vel = p5.Vector.random2D();
    //multiply vel for creating exlosion
    this.vel.mult(random(5,13));
  }

  //create acc (acceleration) start at (0,0)
  this.acc = createVector(0,0);

  // this.applyForce = function(force){
  //   this.acc.add(force);
  // }

  //apply force for acceleration
  Particle.prototype.applyForce = function (force) {
    this.acc.add(force);
  };

  //update method
  this.update = function(){
    //if firework = false then
    if(this.firework==false){
      //multiply vel by 0.9
      this.vel.mult(0.9);
      //decrease lifespan
      this.lifespan -= 1.5;
    }
    //add acceleration into velocity
    this.vel.add(this.acc);
    //add velocity into position
    this.pos.add(this.vel);
    //the set acceleration weight = 0
    this.acc.mult(0);
  }

  //check if a particle is done or not
  this.done = function(){
    //if lifespan < 0 --> done
    if(this.lifespan < 0){
      return true;
    }else{//else not done
      return false;
    }
  }

  //method to show particle
  this.show = function(){
    //set color mode as HSB
    colorMode(HSB);

    if(this.firework==false){
      //set the thickness of particle
      strokeWeight(2);
      //stroke(v1,[v2],[v3],[a])
      //[v1],[v2],[v3] is color mode
      //[a] is opacity
      stroke(hu,255,255,this.lifespan);
    }else{//else set particle thickness = 4
      strokeWeight(4);
      //set color mode
      stroke(hu,255,255);
    }
    //display the current position
    point(this.pos.x, this.pos.y);
  }

}
