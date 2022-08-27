const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
   }
const bookJSON = JSON.stringify(book)

const bookObject = JSON.parse(bookJSON)

const person = {
    name : 'Adin',
    planet : 'Mars',
    age : '53'
}

const personJSON = JSON.stringify(person)
const personObject = JSON.parse(personJSON)

console.log(personObject) 