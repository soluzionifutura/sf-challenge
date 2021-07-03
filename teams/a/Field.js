class Field{
    constructor(w, h , maxMoves){
        this.w = w
        this.h = h
        this.maxMoves = maxMoves
        
        this.entities = []
    }

    draw(){
        let str = ""
        
        for(let y = 0; y < this.h; y++){
            
            for(let x = 0; x < this.w; x++){
                let bool = false
                if (this.getEntity(x,y)) {
                    bool = true
                    str += "."
                }
                if (!bool) str += " "
            }
            
            str += "\n"
        }
        return str
    }

    countEntities(){
        return this.entities.length
    }

    getEntity(x, y, self = null){
        for(let k = 0; k < this.entities.length; k++){
            if(this.entities[k].x === x && this.entities[k].y === y && this.entities[k] !== self){
                return this.entities[k]
            }
        }
    }

    checkCoords(x, y){
        if (x < 0 || x >= this.w || y < 0 || y >= this.h) {
            return false
        }
        return true
    }
}

module.exports = Field