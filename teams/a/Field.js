class Field{
    constructor(w, h , maxMoves){
        this.w = w
        this.h = h
        this.maxMoves = maxMoves

        this.entities = []
    }

    draw(){
        let str = ""
        
        for(let i = 0; i < this.h; i++){
            for(let j = 0; j < this.w; j++){
                let bool = false
                for(let k = 0; k < this.entities.length; k++){
                    if(this.entities[k].x === j && this.entities[k].y === i){
                        str += "."
                        bool = true
                        break
                    }
                }
                if(!bool){
                    str += " "
                }
            }
            str += "\n"
        }
        return str
    }

    countEntities(){
        return this.entities.length
    }
}

module.exports = Field