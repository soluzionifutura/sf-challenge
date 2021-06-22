class Entity{
    constructor(field, x, y){
        if (!field.checkCoords(x,y)) {
            throw new Error("Entità posta fuori dal field")
        }
        
        if(field.getEntity(x,y)){
            throw new Error("Entità posta in una casella già occupata")
        }
        

        this.field = field
        this.x = x
        this.y = y
        this.moves = 0

        this.field.entities.push(this)
    }

    move(direction) {
        if(this.moves >= this.field.maxMoves) return 

        let newX = this.x
        let newY = this.y

        switch(direction) {
            case 0:
                newY--   
                break
            case 1:
                newX++
                break
            case 2:
                newY++
                break
            case 3:
                newX--
                break
        }

        if(this.field.checkCoords(newX,newY) && this.moves < this.field.maxMoves){
            this.x = newX
            this.y = newY
            this.moves++

            let entity = this.field.getEntity(this.x,this.y,this)

            if(entity) this.field.entities.splice(this.field.entities.indexOf(entity),1)
            
        }

        
    }

}

module.exports = Entity