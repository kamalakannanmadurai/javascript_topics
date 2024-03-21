

// Defining object
let person = {
    first_name: 'shashi',
    last_name: 'kanth',
 
    //method
    getFunction  () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object added
    phone_number: {
        mobile: '12345',
        landline: '678910'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);
