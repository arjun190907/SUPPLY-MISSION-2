class Box {
    constructor(x, y, width, height) {
      var options = {
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
    }
  };