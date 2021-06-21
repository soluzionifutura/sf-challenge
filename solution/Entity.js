module.exports = class SampleEntity {
  constructor(field, x, y) {
    if (!field.isCoordsInField(x, y)) {
      throw new Error("Coords out of field")
    }

    if (field.getEntity(x, y)) {
      throw new Error("Cell not empty")
    }

    this.field = field
    this.x = x
    this.y = y

    this.field.addEntity(this)
    this.moves = 0
    // this.field.entities[`${x}.${y}`] = this
  }

  move(direction) {
    if (this.moves === this.field.maxMoves) {
      return
    }

    let futureX = this.x, 
        futureY = this.y

    switch (direction) {
      case 0:
        futureY--
        break
      case 1:
        futureX++
        break
      case 2:
        futureY++
        break
      case 3:
        futureX--
        break
    }

    if (this.field.isCoordsInField(futureX, futureY)) {
      this.field.removeEntity(this)
      this.x = futureX
      this.y = futureY
      this.field.addEntity(this)
      this.moves++
    }
  }
}