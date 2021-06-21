const Field = require('./Field.js')
const Entity = require('./Entity.js')

field = new Field(5,5,3)

player = new Entity(field, 0, 0)
enemy = new Entity(field, 1, 1)

let row = ""
    for(let i = 0; i<5; i++){
      for(let j = 0; j<5; j++){
        /*const entity = this.#findEntities(j, i)
        if(entity) row+="."
        else row+=" "*/
        row+="[]"
      }
      console.log("[][][]")
      console.log("\n")
    }