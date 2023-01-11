// Update the starter code of this file 

//QUESTION1
const cellphone = {
  phoneNumber: "/\d\d\d\d\d\d\d\d\d\d/",
  model: ""
  
};

function makeCellPhone (phoneNumber) {
  return{
    phoneNumber: phoneNumber,
    model : " ",
    contacts: [],
    addContact(name, phoneNumber){
      this.contacts.push({name: name, phoneNumber: phoneNumber});
      console.log(`${name} successfully added.`);
    },
    numberOfContacts() {
      function sum (a,b){
        let total = 0;
        total = a + b 
        console.log(total);
      };
      this.contacts.forEach(sum);
    };
  };
}

let myPhone = makeCellPhone(6462833862);
myPhone.addContact("Sarah",3479829094);
myPhone.addContact("Jake",344929624);
myPhone.addContact("Tyler",3476429581);
// console.log(myPhone.contacts)
contacts.numberOfContacts

/////////////////////////////////////////////////////////////
module.exports = {
  cellphone,
  makeCellPhone,
};
