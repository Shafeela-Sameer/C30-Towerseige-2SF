class Striker{

constructor(x,y,width,height){

var options = {

restituition:0.3,
density:1.0
        
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
this.image = loadImage("Images/IMAGE.png");

}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    
    pop();
}



}