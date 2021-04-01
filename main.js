const { Point } = require('./point')
const { Human } = require('./classInfo')


//classInfo.js

// instance of Human
const alice = new Human('Alice', 'Liddell', 28, ['JavaScript', 'Python'])
const bob = new Human('Bob', 'Lemon', 30, ['JavaScript','Haskell'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Solidity','Rust','Substrate','Cadence' ])


// classInfo.js
console.log(`###################`)
console.log(`Start from classInfo.js`)
console.log(`###################\n`)
console.log(`this is ${alice.firstName} details :`)
alice.printInfo()
alice.canVote()
console.log('########')
console.log(`this is ${bob.firstName} details :`)
bob.printInfo()
bob.canVote()
console.log('########')
console.log(`this is ${charlie.firstName} details :`)
charlie.printInfo()
charlie.canVote()
console.log(alice.mostSkilledDev(charlie))
console.log('########')
console.log(alice.mostSkilledDev(bob))
console.log('########')
console.log(charlie.mostSkilledDev(bob))

// Point.js

// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)
// p3 est une autre instance de Point
const p3 = new Point(1, 2)

console.log(`###################`)
console.log(`Start from Point.js`)
console.log(`###################\n`)

console.log(p1.show())
console.log(p2.show())
console.log(`###################\n`)
console.log(p1.isEqual(p2))
console.log(p1.isEqual(p3))
// result from function distance
console.log(`###################\n`)
console.log(`distance between ${p1.distance(p3)}`)
console.log(`distance between ${p1.distance(p2)}`)