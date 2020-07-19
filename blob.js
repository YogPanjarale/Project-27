class Bob {
    constructor(x, y,w=100) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':0.1,
          
      }
      this.body = Bodies.circle(x, y,w/2, options);
      this.width = width;
      this.height = height;
      this.w = w
 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      
      fill(200,200,0);
      ellipse(0, 0, this.w)
      pop();
    }
  };