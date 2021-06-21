module.exports = Field

class Field {
    constructor(h, w, maxMoves) {
        this.h = h
        this.w = w
        this.maxMoves = maxMoves
        this.entities = []
    }

    draw() {
        let res = (" ".repeat(this.w) + "\n").repeat(this.h)
        this.entities.forEach(element => {
            let index = element.x + element.y * (this.w + 1)
            res[index] = '.'
        });
        return res
    }

    count_entities() {
        return this.entities.length
    }
}
