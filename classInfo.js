class Human {
  constructor(firstName, lastName, age, language){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  
  printInfo(){
    console.log(`\tfirstname: ${this.firstName}`)
    console.log(`\tLastname: ${this.lastName}`)
    console.log(`\tAge: ${this.age}`)
    console.log(`\tlanguage: ${this.language}`)
  
  }
  
  canVote(){
    console.log(`Is ${this.firstName} can vote ?`)
      if(this.age >= 18){
      console.log(true)
      } else {
      console.log(false)
      }
      console.log('########')
  }
  
  mostSkilledDev(name){
    return(`${this.firstName} VS ${name.firstName}`)
  if((this.language).length > (name.language).length){
    return(`\t${this.firstName} knows more language than ${name.firstName}`)
  } else if ((this.language).length < (name.language).length){
    return(`\t${name.firstName} knows more language than ${this.firstName}`)
  } else {
    return(`\tit's a draw`)
  }
  }

}

exports.Human = Human

/* // instance of Human
const alice = new Human('Alice', 'Liddell', 28, ['JavaScript', 'Python'])
const bob = new Human('Bob', 'Lemon', 30, ['JavaScript','Haskell'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Solidity','Rust','Substrate','Cadence' ])


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
 */