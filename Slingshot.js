class Slingshot {
    constructor(bodyA, pointX, pointY) {
        var options = {
            bodyA: bodyA,
            length: 100,
            pointB: {x: pointX,y: pointY}
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display() {
        stroke(255);
        strokeWeight(4);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y);
    }
}