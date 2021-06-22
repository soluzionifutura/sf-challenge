class Entity {
	constructor(field, x, y) {
		this.field = field
		this.x = x
		this.y = y
		this.moves = this.field.maxMoves

		if (this.x < 0 || this.x >= this.field.w || this.y < 0 || this.y >= this.field.h) throw Error ("out of bounds error")
		this.field.entities.forEach(element => {
			if (this !== element && this.x == element.x && this.y == element.y) throw new Error("overlap error")
		});

		this.field.entities.push(this)
	}

	move(option) {
		if (this.moves > 0) {
			this.moves--
			if (option == 0 && this.y > 0) { this.y -= 1 } // up
			else if (option == 1 && this.x < this.field.w-1) { this.x += 1 } // right
			else if (option == 2 && this.y < this.field.h-1) { this.y += 1 } // down
			else if (option == 3 && this.x > 0) { this.x -= 1 } // left
			else this.moves++

			for (let i = 0; i < this.field.entities.length; i++) {
				if (this !== this.field.entities[i] && this.x == this.field.entities[i].x && this.y == this.field.entities[i].y) {
					this.field.entities.splice(i, 1);
					break
				}
			}
		}
	}
}

module.exports = Entity