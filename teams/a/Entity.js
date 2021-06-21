class Entity{
    constructor(field, x, y){
        if (x < 0 || x >= field.w || y < 0 || y >= field.h) {
            throw new Error("Entità posta fuori dal field")
        }
        
        if(field.entities.length > 0){
            field.entities.forEach(e => {
                if(e.x === x && e.y === y){
                    throw new Error("Entità posta in una casella già occupata")
                }
            })
        }
        

        this.field = field
        this.x = x
        this.y = y
        this.moves = 0

        this.field.entities.push(this)
    }

    move(direction) {
        switch(direction) {
            case 0:
                if(this.y - 1 >= 0 && this.moves < this.field.maxMoves){
                    this.y--   
                    this.moves++
                    let index = -1
                    for(let i = 0; i < this.field.countEntities(); i++){
                        if(this.field.entities[i] == this) continue
                        if(this.field.entities[i].x === this.x && this.field.entities[i].y === this.y){
                           index = i 
                        }
                    }
                    
                    if (index !== -1) {
                        this.field.entities.splice(index, 1)
                    }
                }      
                break
            case 1:
                if(this.x + 1 < this.field.w && this.moves < this.field.maxMoves){
                    this.x++   
                    this.moves++
                    let index = -1
                    for(let i = 0; i < this.field.countEntities(); i++){
                        if(this.field.entities[i] == this) continue

                        if(this.field.entities[i].x === this.x && this.field.entities[i].y === this.y){
                           index = i 
                        }
                    }
                    
                    if (index !== -1) {
                        this.field.entities.splice(index, 1)
                    }
                }
                break
            case 2:
                if(this.y + 1 < this.field.h && this.moves < this.field.maxMoves){
                    this.y++   
                    this.moves++
                    let index = -1
                    for(let i = 0; i < this.field.countEntities(); i++){
                        if(this.field.entities[i] == this) continue

                        if(this.field.entities[i].x === this.x && this.field.entities[i].y === this.y){
                           index = i 
                        }
                    }
                    
                    if (index !== -1) {
                        this.field.entities.splice(index, 1)
                    }
                }
                break
            case 3:
                if(this.x - 1 >= 0 && this.moves < this.field.maxMoves){
                    this.x--   
                    this.moves++
                    let index = -1
                    for(let i = 0; i < this.field.countEntities(); i++){
                        if(this.field.entities[i] == this) continue
                        if(this.field.entities[i].x === this.x && this.field.entities[i].y === this.y){
                           index = i 
                        }
                    }
                    
                    if (index !== -1) {
                        this.field.entities.splice(index, 1)
                    }
                }
                break
        }
    }

}

module.exports = Entity