class Ground {


    constructor(x,y,width,height){
        
      
        var options={
            isStatic :true
        }
        
        this.object = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.object);

    
    }
    
    
    display(){
    
        var pos = this.object.position;
        rectMode(CENTER);
        fill (180);
        rect(pos.x,pos.y,this.width,this.height);
    
    }
}
