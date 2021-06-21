 module.exports = class Field {
  // class methods
  constructor(w, h, maxMoves) { 
    this.w = w
    this.h = h
    this.maxMoves = maxMoves
    this.entities = []
   }
  draw() { 
    for(let i = 0; i<this.h; i++){
      for(let j = 0; j<this.w; j++){
        /*const entity = this.#findEntities(j, i)
        if(entity) console.log(".")
        else console.log("x")*/
        console.log("[]")
      }
      console.log("\n")
    }
   }

  countEntities(){ 
    return this.entities.length
  }

  #findEntities(x, y){
    let entity = false
    for(let i = 0; i<this.entities.length; i++){
      if(this.entities[i].x === x && this.entities[i].y === y){
        if(entity) {
          this.entities.splice(i, 1)
        } else {
          entity =  true
        }
      }
    }
    return entity
  }

}

