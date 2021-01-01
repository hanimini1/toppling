class Box {


constructor(x,y,width,height){
    
    var options = {
   'restitution':0.8,
   'density': 1.0,
   'friction': 0.3
    }

   
    this.object = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.object);

}


display(){

    var pos = this.object.position;
    var angle = this.object.angle;
    push();
    rotate(angle);
    translate(pos.x , pos.y);
    
   
    rectMode(CENTER);
    fill (255);
    rect(0,0,this.width,this.height);
     pop();
}






}

