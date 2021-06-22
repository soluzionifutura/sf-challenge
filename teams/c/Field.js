class Field {
    constructor(w, h, maxMoves) {
        this.h = h
        this.w = w
        this.maxMoves = maxMoves
        this.entities = []
    }

    draw() {
        let res = []
        for (let i = 0; i < (this.w + 1) * this.h; i++) {
            if (i % (this.w + 1) == 0) res.push('\n')
            else res.push(" ")
        }
        this.entities.forEach(element => {
            let index = (element.x + 1) + element.y * (this.w + 1)
            res[index] = "."
        })
        res.shift() // remove first element
        return res.join("") + "\n"
    }

    countEntities() {
        return this.entities.length
    }
}

module.exports = Field