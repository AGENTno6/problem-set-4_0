// Update the starter code of this file 

//QUESTION1
const cellphone = {
  phoneNumber: /\d{10}/,
  model: ""
  
};

function makeCellPhone (phoneNumber, model) {
  return{
    phoneNumber: phoneNumber,
    model : model,
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
    deleteContact (nameValue){
        //find the contact we're looking for, put into variable
        //foundContact === index of contact to be deleted 
        const contactIndex = this.contacts.findIndex(contact => contact.name === nameValue);
        //return the contacts array with the deleted contact removed
        // if(nameValue !== this.contacts.name){
          if(contactIndex === -1){
          return "Contact not found.";
          }else{
            this.contacts.splice(contactIndex,1);
            return `${nameValue} successfully deleted.`;
        }
      },
      call (contact){
        this.contacts.forEach(contact => {
          if(this.contacts.name === contact || this.contacts.phoneNumber === contact){
            return `Calling ${contact} at ${this.contacts.phoneNumber}...`;
          }else{
            return "Contact not found.";
          }
        });
      }
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
// console.log(myPhone.deleteContact("Tylers"));
// console.log(myPhone.contacts);
console.log(myPhone.call("Sarah"));












/////////////////////////////////////////////////////////////
module.exports = {
  cellphone,
  makeCellPhone,
};
