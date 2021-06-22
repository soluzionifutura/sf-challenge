module.exports = class Entity {
    // class methods
    constructor(field, x, y) {
        this.field = field
        
        //Already exist an tity at creation choords?
        let test = true
        for(let i=0; i<this.field.entities.length; i++){
            if(this.field.entities[i].x === x && this.field.entities[i].y === y){
                test = false
                break
            }
        }

        //Are choords into the field or out of field
        if(x >= 0 && x < this.field.w && y >= 0 && y < this.field.h && test === true){
            this.x = x
            this.y = y
        }
        else{
            throw new Error()
        }
        
        this.field.entities.push({x : this.x, y: this.y})
        this.countMoves = 0
      }

    move(direction) {
        let newy = this.y
        let newx = this.x
        
        //maxMoves control
        if(this.countMoves >= this.field.maxMoves){
            return "Movimenti terminati"
        }
        
        //Updating choords using directio control
        if(direction === 0){
            newy -= 1
            if(newy < 0){newy += 1}
        }
        else if(direction === 1){
            newx += 1
            if(newx >= this.field.w){newx -= 1}
        }
        else if(direction === 2){
            newy += 1
            if(newy >= this.field.h){newy -= 1}
        }
        else if(direction === 3){
            newx -= 1
            if(newx < 0){newx += 1}
        }
        
        //Updating choords in field
        this.field.entities = this.field.entities.map( e => {
          if(e.x === this.x && e.y === this.y){
            e.x = newx
            e.y = newy  
          }
          return e
        })
        this.x = newx
        this.y = newy
        this.countMoves += 1
    
      }
  }