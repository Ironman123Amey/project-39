class Hammer {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("hammer.jpg");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.y = mouseY;
      pos.x = mouseX;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      // rotate(angle);
      imageMode(CENTER);
      fill("orange");
      
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
  