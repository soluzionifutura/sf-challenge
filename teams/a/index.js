const Field = require('./Field.js')
const Entity = require('./Entity.js')

field = new Field(5,5,3)

player = new Entity(field, 0, 0)
enemy = new Entity(field, 1, 1)

console.log(field.draw())
player.move(2)
console.log(field.draw())
enemy.move(1)
console.log(field.draw())
player.move(1)
console.log(field.draw())
player.move(1)
console.log(field.draw())

console.log(field.countEntities())