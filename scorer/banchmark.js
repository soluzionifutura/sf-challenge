const SampleField = require("./SampleField")
const SampleEntity = require("./SampleEntity")



// // console.log(f.draw())
// // setInterval(() => {
// //   e.move(0)
// //   console.log(f.draw())
// //   // console.log(f.entities)
// // }, 1000)

// performance.measure("test")
const { PerformanceObserver, performance } = require('perf_hooks');

function test() {
  const f = new SampleField(1000, 1000, 1)
  const e = new SampleEntity(f, 4, 4)
  new SampleEntity(f, 4, 2)  
  f.draw()
}

const wrapped = performance.timerify(test)

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries())
  obs.disconnect()
})

obs.observe({ entryTypes: ['function'] })

// A performance timeline entry will be created
wrapped()