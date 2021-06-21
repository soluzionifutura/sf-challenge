module.exports = class Entity {
    // class methods
    constructor(field, x, y) {
        this.field = field
        //Manca il controllo se presente altra entità
        let test = true
        
        this.field.entities.forEach(element => {
            if(element.x === x && element.y === y){test = false}
        })

        if(x >= 0 && x < this.field.w && y >= 0 && y < this.field.h && test === true){
            this.x = x
            this.y = y
        }
        else{
            throw error = {
                id: 25,
                message: "Non puoi creare entity fuori dal campo o in una cella piena"
            }
        }
        
        this.field.entities.push({x : this.x, y: this.y})
        this.countMoves = 0
      }

    move(direction) {
        let y = this.y
        let x = this.x
        //Aggiorno coordinate in base alla direzione
        if(direction === 0){
            y -= 1
            if(y < 0){y += 1}
        }
        else if(direction === 1){
            x += 1
            if(x > this.field.w){x -= 1}
        }
        else if(direction === 2){
            y += 1
            if(y > this.field.h){y -= 1}
        }
        else if(direction === 3){
            x -= 1
            if(x < 0){x += 1}
        }
        
        //Aggiorno coordinate nel campo
        this.field.entities = this.field.entities.map( e => {
          if(e.x === this.x && e.y === this.y){
            e.x = x
            e.y = y  
          }
          return e
        })
        this.x = x
        this.y = y
        this.countMoves += 1
        //Ridisegno il campo
        this.field.draw()
      }
  }