class Test {
  constructor(name, score, resolver) {
    this.name = name
    this.resolver = resolver
    this.passed = false
    this.error = null
    this.score = score
  }

  async execute(solutionPath) {
    try {
      await this.resolver(solutionPath, this)
      this.passed = true
    } catch(error) {
      this.passed = false
      this.error = error
    }
    // if (this.score > this.maxScore) {
    //   this.score = this.maxScore
    //   console.warn("MAX SCORE OVERFLOW")
    //   // TODO add notification
    // }
    // this.passed = this.score === this.maxScore
    // this.error = err
    // this.passed = false
  }
}

class Tester {
  constructor(solutionPath) {
    this.tests = []
    this.solutionPath = solutionPath
  }

  addTest(test, score) {
    this.tests.push(test)
  }

  async execute() {
    await Promise.all(this.tests.map(test => test.execute(this.solutionPath, this)))
    
    return { 
      tests: this.tests,
      ...this.tests.reduce((acc, { passed, name, error, score }) => {
        if (passed) {
          acc.score += score
        }

        acc.maxScore += score

        acc.tests.push({
          name,
          passed,
          score,
          error: error ? {
            code: error.code,
            // message: error.message,
            stack: error.stack
          } : null
        })
        
        return acc
      }, { score: 0, maxScore: 0, tests: [] })
    }
  }
}

module.exports = {
  Test,
  Tester
}