class Human {
  constructor(firstName, lastName, age, language){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  
  printInfo(){
    return (
    `firstname: ${this.firstName}\nLastname: ${this.lastName}\nAge: ${this.age}\nlanguage: ${this.language}`)
  }
  
  canVote(){
    if(this.age >= 18){
      return (`Is ${this.firstName} can vote ?\n${true}`)
      } else {
      return(`Is ${this.firstName} can vote ?\n${false}`)
      }
  }
  
  mostSkilledDev(name){
  if((this.language).length > (name.language).length){
    return(`${this.firstName} VS ${name.firstName}\n\t${this.firstName} knows more language than ${name.firstName}`)
  } else if ((this.language).length < (name.language).length){
    return(`${this.firstName} VS ${name.firstName}\n\t${name.firstName} knows more language than ${this.firstName}`)
  } else {
    return(`${this.firstName} VS ${name.firstName}\n\tit's a draw`)
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