const errcode = require("err-code")
const { join } = require("path")
const { Test, Tester } = require("./index")
const SampleField = require("./SampleField")
const SampleEntity = require("./SampleEntity")

void(async () => {
  // const folder = join(__dirname, "../solution")
  const folder = join(process.cwd(), process.argv[2])
  console.log(folder)
  const tester = new Tester(folder)

  const _requireClasses = solutionPath => {
    try {
      return {
        Field: require(join(solutionPath, "Field.js")),
        Entity: require(join(solutionPath, "Entity.js"))
      }
    } catch(err) {
      if (err.code === "MODULE_NOT_FOUND") {
        throw errcode(new Error(err.message), "TEST_FAILED")
      } else {
        throw err
      }
    }
  }
  
  tester.addTest(new Test("test class files", 1, solutionPath => {
    _requireClasses(solutionPath)
  }))

  tester.addTest(new Test("test Field constructor", 1, solutionPath => {
    const { Field } = _requireClasses(solutionPath)
    const w = 3
    const h = 3
    const maxMoves = 1
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)

    if (field.w !== sampleField.w || field.h !== sampleField.h || field.maxMoves !== sampleField.maxMoves) {
      throw errcode(new Error("Wrong constructor"), "TEST_FAILED")
    }
  }))

  tester.addTest(new Test("test Entity constructor", 1, solutionPath => {
    const { Entity, Field } = _requireClasses(solutionPath)
    const w = 3
    const h = 3
    const maxMoves = 1
    const x = 0
    const y = 0
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)
    const sampleEntity = new SampleEntity(sampleField, x, y)
    const entity = new Entity(field, x, y)
    
    if (entity.x !== sampleEntity.x || entity.y !== sampleEntity.y) {
      throw errcode(new Error("Wrong constructor"), "TEST_FAILED")
    }
    
  }))

  tester.addTest(new Test("test Draw function (empty field)", 1, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = 3
    const maxMoves = 1
    const x = 1
    const y = 1
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)

    field.draw()
    if (field.draw().replace(/\r\n/g, "\n") !== sampleField.draw().replace(/\r\n/g, "\n")) {
      throw errcode(new Error("Wrong draw result"), "TEST_FAILED")
    }
  }))

  tester.addTest(new Test("test Draw function (not empty field)", 1, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = w
    const maxMoves = 1
    const x = 0
    const y = 0
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)

    for (let i = 0, l = w; i < l; i++) {
      new SampleEntity(sampleField, x+i, y+i)
      new Entity(field, x+i, y+i)
    }
    
    if (field.draw().replace(/\r\n/g, "\n") !== sampleField.draw().replace(/\r\n/g, "\n")) {
      throw errcode(new Error("Wrong draw result"), "TEST_FAILED")
    }
  }))
  
  tester.addTest(new Test("test countEntities function", 1, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = w
    const maxMoves = 1
    const x = 0
    const y = 0
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)

    for (let i = 0, l = w; i < l; i++) {
      
      new SampleEntity(sampleField, x+i, y+i)
      new Entity(field, x+i, y+i)

      if (field.countEntities() !== sampleField.countEntities()) {
        throw errcode(new Error("Wrong count result"), "TEST_FAILED")
      }
    }
  }))

  tester.addTest(new Test("test move function", 1, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = w
    const maxMoves = 1
    const x = 0
    const y = 0
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)
    const sampleEntities = []
    const entities = []

    for (let i = 0, l = w; i < l; i++) {
      sampleEntities.push(new SampleEntity(sampleField, x+i, y+i))
      entities.push(new Entity(field, x+i, y+i))
    }

    sampleEntities[0].move(2)
    entities[0].move(2)
    
    if (field.draw().replace(/\r\n/g, "\n") !== sampleField.draw().replace(/\r\n/g, "\n")) {
      throw errcode(new Error("Wrong draw result"), "TEST_FAILED")
    }
  }))

  tester.addTest(new Test("test max moves constraint", 1, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = w
    const maxMoves = 1
    const x = 0
    const y = 0
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)
    const sampleEntities = []
    const entities = []

    for (let i = 0, l = w; i < l; i++) {
      sampleEntities.push(new SampleEntity(sampleField, x+i, y+i))
      entities.push(new Entity(field, x+i, y+i))
    }

    for (let i = 0, l = maxMoves + 1; i < l; i++) {
      sampleEntities[0].move(2)
      entities[0].move(2)
    }
    
    if (field.draw().replace(/\r\n/g, "\n") !== sampleField.draw().replace(/\r\n/g, "\n")) {
      throw errcode(new Error("Wrong draw result"), "TEST_FAILED")
    }
  }))

  tester.addTest(new Test("test field limits constraint", 2, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 4
    const h = 4
    const maxMoves = 10
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)
    const sampleEntities = [
      new SampleEntity(sampleField, 0, 0),
      new SampleEntity(sampleField, 0, h-1),
      new SampleEntity(sampleField, w-1, 0),
      new SampleEntity(sampleField, w-1, h-1)
    ]
    const entities = [
      new Entity(field, 0, 0),
      new Entity(field, 0, h-1),
      new Entity(field, w-1, 0),
      new Entity(field, w-1, h-1)
    ]

    sampleEntities[0].move(0)
    entities[0].move(0)

    sampleEntities[1].move(3)
    entities[1].move(3)
    
    sampleEntities[2].move(2)
    entities[2].move(2)

    sampleEntities[3].move(1)
    entities[3].move(1)
    
    if (field.draw().replace(/\r\n/g, "\n") !== sampleField.draw().replace(/\r\n/g, "\n")) {
      throw errcode(new Error("Wrong draw result"), "TEST_FAILED")
    }
  }))

  tester.addTest(new Test("test entity collision", 2, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = w
    const maxMoves = 10
    const x = 0
    const y = 0
    const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)
    const sampleEntities = []
    const entities = []

    for (let i = 0, l = w; i < l; i++) {
      sampleEntities.push(new SampleEntity(sampleField, x+i, y+i))
      entities.push(new Entity(field, x+i, y+i))
    }
    
    entities[1].move(3)
    entities[1].move(0)
    sampleEntities[1].move(3)
    sampleEntities[1].move(0)

    console.log(field.draw())
    if (field.countEntities() !== sampleField.countEntities() || field.draw().replace(/\r\n/g, "\n") !== sampleField.draw().replace(/\r\n/g, "\n")) {
      throw errcode(new Error("Wrong draw result"), "TEST_FAILED")
    }
  }))

  tester.addTest(new Test("test entity overlapping", 2, solutionPath => {
    const { Field, Entity } = _requireClasses(solutionPath)
    const w = 3
    const h = w
    const maxMoves = 10
    const x = 0
    const y = 0
    // const sampleField = new SampleField(w, h, maxMoves)
    const field = new Field(w, h, maxMoves)
    new Entity(field, x, y)

    let crashed
    try {
      new Entity(field, x, y)
      crashed = false
    } catch(err) {
      crashed = true
    }

    if (!crashed) {
      throw errcode(new Error("Should have been crashed"), "TEST_FAILED") 
    }
  }))
  
  console.dir(await tester.execute(), { depth: null })
})()
  .catch(console.error)

