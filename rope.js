class rope{
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX = offsetX
      this.offsetY = offsetY
  var  Option =  {
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX,y:this.offsetY}
   }
   this.rope = Constraint.create(Option);
   World.add(world,this.rope);
    
}
display()
{

  var pointA = this.rope.bodyA.positon
  var pointB = this.rope.bodyB.positon
  
  strokeWeight(2);

  var Anchor1X = pointA.x
  var Anchor1Y = pointA.y

  var Anchor2X = pointB.x+this.offsetX
  var Anchor2Y = pointB.y+this.offsetY

  line(Anchor1.x,Anchor1.y,Anchor2.x,Anchor2.y);
  

}

}
     
