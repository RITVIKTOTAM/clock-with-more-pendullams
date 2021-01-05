class Chain {

    constructor(bodyA,bodyB){
      
      
      var options = {
          stiffness : 1,
          'bodyA' : bodyA,
          'bodyB' : bodyB,
          'length' : 130,
                  
        
      }
     
     this.link = Constraint.create(options)
     World.add(world,this.link)    
 
    }
 
   display(){
     
 
       var pointA = this.link.bodyA.position;
       var pointB = this.link.bodyB.position;
       push()
       strokeWeight  (8);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop()    
 
     
    
 
   }
 
 }