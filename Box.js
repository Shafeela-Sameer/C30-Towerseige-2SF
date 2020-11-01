class Block {
  constructor(x, y, width, height){
    
  var options = {

    'restitution':0.9,
    'friction':1.2,
    'density':1.0
  }

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.visibility = 255;
World.add(world,this.body);

}
display(){
if(this.body.speed<6){
var pos = this.body.position;
push()
translate(pos.x,pos.y);
rectMode(CENTER);
fill(rgb(251, 156, 0))
rect(0,0,this.width,this.height);
pop()
}else{

  World.remove(world,this.body);
  push()
  this.visibility = this.visibility-5
  tint(255,this.visibility)
  pop()
  
}
}
}
