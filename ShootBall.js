class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.body = Bodies.circle(100, 100, 50, options);
        this.radius = radius;
        World.add(world, this.body);
      }
    attach(body){

    }
    shoot(){
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
    }
}
