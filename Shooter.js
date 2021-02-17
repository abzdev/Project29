class Shooter {
    constructor(x,y) {
        var options = {
            density: 0.5,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display() {
        image(this.image,this.body.position.x,this.body.position.y,20,20);
    }
}