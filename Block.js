class Block {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction : 0.5
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);
    }
    display() {
        rect(this.body.position.x,this.body.position.y,20,20);
    }
}