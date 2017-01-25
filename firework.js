function Firework(){

  //create a property hu random from 0 to 255
  this.hu = random(255);

  //create a firework which is a Particle object with following default
  this.firework = new Particle(random(width),height, this.hu, true);

  //create a exploded property
  this.exploded = false;

  //create a particles array
  this.particles = [];

  //check if a firewok object is done or not
  this.done = function(){
    //if exploded is true and particles length is 0, then true
    if(this.exploded && this.particles.length === 0){
      return true;
    }else{
      return false;
    }
  }

  //update the firework
  this.update = function(){
    //if exploded == false
    if(this.exploded==false){
      //apply force for firework
      this.firework.applyForce(gravity);
      //update firework object
      this.firework.update();
      //if y axis of vel > 0
      if(this.firework.vel.y>= 0)
        {
          //the set exploded = true
          this.exploded = true;
          //run explode() method
          this.explode();
        }
    }

    for(var i = this.particles.length-1; i >= 0; i-- ){
      //apply gravity for particles[i]
      this.particles[i].applyForce(gravity);
      //update particles[i]
      this.particles[i].update();
      if(this.particles[i].done()){
        //remove particles[i] from array
        this.particles.splice(i,1);
      }
    }
  }

  //explode function: create 100 small particles and add them into array particles[]
  this.explode= function(){
    for(var i = 0; i <100; i++ ){
      var p = new Particle(this.firework.pos.x, this.firework.pos.y,this.hu,false);
      this.particles.push(p);
    }
  }

  //show method
  this.show = function(){
    if(this.exploded==false){
      //show object firework
      this.firework.show();
    }
    //show particles object
    for(var i = 0; i <this.particles.length; i++ ){
      this.particles[i].show();
    }
  }
}
