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
      return (`${name} successfully added.`);
    },
    numberOfContacts() {
      let total = 0;
      this.contacts.forEach(element => total += 1);
      return total;
    },
    lookUp (name){
      let contact = this.contacts.find(contact => contact.name === name);
      if(!contact){
        return "Contact not found";
      }else return contact.phoneNumber ;
    },
    deleteContact (name){
        let foundContact = this.contacts.findIndex(name);
      },
      
    };
  }


let myPhone = makeCellPhone(6462833862);
myPhone.addContact("Sarah",3479829094);
myPhone.addContact("Jake",344929624);
myPhone.addContact("Tyler",3476429581);
// console.log(myPhone.contacts)
// console.log(myPhone.numberOfContacts());
// console.log(myPhone.deleteContact("Tyler"));
// console.log(this.foundContact);














/////////////////////////////////////////////////////////////
module.exports = {
  cellphone,
  makeCellPhone,
};
