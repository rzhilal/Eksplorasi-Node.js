const user = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}
// The line below uses destructuring
const { age, location: address } = user
console.log(age) //stored and destructued (user.age)
console.log(address)

