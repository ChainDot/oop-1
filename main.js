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
alice.mostSkilledDev(charlie)
console.log('########')
alice.mostSkilledDev(bob)
console.log('########')
charlie.mostSkilledDev(bob)




// Point.js

// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)
// p2 est une autre instance de Point
const p3 = new Point(1, 2)

console.log(`###################`)
console.log(`Start from Point.js`)
console.log(`###################\n`)

// result from function distance

console.log(`distance between ${p1.distance(p3)}`)
console.log(`distance between ${p1.distance(p2)}`)