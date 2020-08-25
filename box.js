//blueprint
class Box {
  //used for intializing an object
  constructor(x, y, width, height) {
    var options = {
      //bounciness of an object
        'restitution':0.8,
        //the opisite force which applies on the object
        'friction':0.3,
        //total mass/total weight of an object
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
    //its going to adjust the different position of an object
    push();
    //changing the position
    translate(pos.x, pos.y);
    //when they collide, they bounce off each other and are different angles.
    rotate(angle);
    //for placing the rectangle in the middle of the canvas
    rectMode(CENTER);
    //the canvas is white
    fill(255);
    //the rectangles width/height
    rect(0, 0, this.width, this.height);
    //for reseting all the settings.
    pop();
  }
};
