const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['JavaScript', 'Python']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['JavaScript','Haskell']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Solidity','Rust','Substrate','Cadence' ],
}

const printInfo = (id) => {
  console.log(`firstname: ${id.firstName}`)
  console.log(`Lastname: ${id.lastName}`)
  console.log(`Age: ${id.age}`)
  console.log(`Language: ${id.language}`)
  console.log('########')
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)


// Can Vote function
const canVote = (id) => {
  console.log(`can vote answer of ${id.firstName}`)
  if(id.age >= 18){
    console.log(true)
  } else {
    console.log(false)
  }
  console.log('########')
}

canVote(alice)
canVote(bob)
canVote(charlie)

// Most skilled Dev function
const mostSkilledDev = (id1, id2) =>{
  console.log(`${id1.firstName} VS ${id2.firstName}`)
  if((id1.language).length > (id2.language).length){
    console.log(`\t${id1.firstName} knows more language than ${id2.firstName}`)
  } else if ((id1.language).length < (id2.language).length){
    console.log(`\t${id2.firstName} knows more language than ${id1.firstName}`)
  } else {
    console.log(`\tit's a draw`)
  }
}

mostSkilledDev(alice, bob)
mostSkilledDev(charlie, bob)
mostSkilledDev(bob, alice)

