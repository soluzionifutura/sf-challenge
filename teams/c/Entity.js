module.exports = Entity

class Entity {
	constructor(field, x, y) {
		this.field = field
		this.x = x
		this.y = y
		this.moves = this.field.maxMoves
		this.index = this.field.entities.length()
		this.field.entities.push(this)

		if (this.x < 0 || this.x > this.field.w || this.y < 0 || this.y > this.field.h) throw Error
		this.field.entities.forEach(element => {
			if (this.x == element.x && this.y == element.y) throw new Error()
		});
	}

	move(option) {
		
		if (this.moves > 0) {
			this.moves -= 1
			if (option == 0 && this.y > 0) { this.y -= 1 }
			else if (option == 1 && this.x < this.field.w) { this.x += 1 }
			else if (option == 2 && this.y < this.field.h) { this.y += 1 }
			else if (option == 3 && this.x > 0) { this.x -= 1 }
		}	
		for (let index = 0; index < this.field.entities.length; index++) {
			const element = this.field.entities[index];
			if (index != this.index && this.x == element.x && this.y == element.y) {
				this.field.entities.splice(index, 1)
				return
			}
		}
	}
}

