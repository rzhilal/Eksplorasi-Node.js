//arrow functio
const square = (x) => {
    return x * x
   }
console.log(square(2)) 

//shorthand

const _suare = (x) => x*x

//binding

const _event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
    console.log('Guest list for ' + this.name)
    
    this.guestList.forEach((guest) => {
    console.log(guest + ' is attending ' + this.name)
    })
    }
   }

_event.printGuestList()

//dipraktekan pada add_remove_notes