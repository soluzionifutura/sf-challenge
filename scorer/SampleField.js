module.exports = class SampleField {
  constructor(w, h, maxMoves) {
    this.h = h
    this.w = w
    this.maxMoves = maxMoves 
    this.entities = {}
  }

  draw() {
    let field = ""
    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        field += this.getEntity(x, y) ? "." : " "
      }
      field += "\n"
    }
    return field
  }

  countEntities() {
    return Object.keys(this.entities).length
  }

  addEntity(entity) {
    this.entities[`${entity.x}.${entity.y}`] = entity
  }

  getEntity(x, y) {
    return this.entities[`${x}.${y}`]
  }

  removeEntity(entity) {
    delete this.entities[`${entity.x}.${entity.y}`]
  }

  isCoordsInField(x, y) {
    return x >= 0 && x < this.w && y >= 0 && y < this.h
  }
}
