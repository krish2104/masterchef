class bob{
    constructor(x,y,r){
     var options={
        isStatic:false,
        restitution:1,
        density:0.8,
        friction:0


    }

    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body)
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop();
}
    
}