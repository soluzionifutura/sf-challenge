const Entity = require("./Entity.js")
const Field = require("./Field.js")

const field1 = new Field(5, 5, 10)

console.log(field1.draw() + "\n")
console.log(field1.countEntities())