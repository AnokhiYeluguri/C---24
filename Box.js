class Box {
    constructor(x,y,width,height){
        var boxoptions={
            restitution:0.8,
            friction:0.3,
            density:1.0
           }
          this.boxbody = Bodies.rectangle(x,y,width,height,boxoptions)
          World.add(world,this.boxbody)
          this.width = width
          this.height = height
    }
    display(){
        var pos = this.boxbody.position
        var angle = this.boxbody.angle
         push()
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
         pop()
    }

}