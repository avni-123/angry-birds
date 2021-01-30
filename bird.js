class Bird {
    constructor(x, y, weight, height) {
      
      this.body = Bodies.rectangle(x, y, weight,height);
      this.weight = weight;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      bird.x = World.mouseX;
        bird.y = World.mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2.6);
      stroke("yellow");
      fill("red");
      rect(0, 0, this.weight, this.height);
      pop();
    }
  }
  