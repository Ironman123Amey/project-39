class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("Rubber.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("purple");
      
      image(this.image,0, 0, this.radius);
      pop();
    }
  }