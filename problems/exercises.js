// Update the starter code of this file 

//QUESTION1
const cellphone = {
  phoneNumber: "6463823862",
//QUESTION2
  model: "iPhone XR",
//QUESTION3
  contacts: [],
//QUESTION5  
  addContact(name, phoneNumber){
//QUESTION4
    this.contacts.push({name:name ,phoneNumber: phoneNumber});
    return `${name} successfully added.`;
  },
  numberOfContacts(){
    return this.contacts.length;
  },
//QUESTION8
  lookUp(name){
    let contact = this.contacts.find(contact => contact.name === name);
      if(!contact){
        return "Contact not found.";
      }else return contact.phoneNumber ;
  },
//QUESTION9
  deleteContact (nameValue){
    const contactIndex = this.contacts.findIndex(contact => contact.name === nameValue);
    if(contactIndex === -1){
          return "Contact not found.";
          }else{
            this.contacts.splice(contactIndex,1);
            return `${nameValue} successfully deleted.`;
        }
  },
//QUESTION10
  call(nameOrNum){
    for(let i = 0; i < this.contacts.length; i++){
      if(nameOrNum == this.contacts[i].name || nameOrNum == this.contacts[i].phoneNumber ){
        return `Calling ${this.contacts[i].name} at ${this.contacts[i].phoneNumber}`;
      } 
    }
      return "Contact not found.";
  }
};
//QUESTION11
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
    call (nameOrNum){
      for(let i = 0; i < this.contacts.length; i++){
        if(nameOrNum == this.contacts[i].name || nameOrNum == this.contacts[i].phoneNumber ){
          return `Calling ${this.contacts[i].name} at ${this.contacts[i].phoneNumber}`;
        } 
      }
      return "Contact not found.";
    }
};
}


// let myPhone = makeCellPhone(6462833862);
// myPhone.addContact("Sarah",3479829094);
// myPhone.addContact("Jake",344929624);
// myPhone.addContact("Tyler",3476429581);
// // console.log(myPhone.contacts)
// // console.log(myPhone.numberOfContacts());
// // console.log(myPhone.deleteContact("Tyler"));
// // console.log(this.foundContact);
// // console.log(myPhone.deleteContact("Tylers"));
// // console.log(myPhone.contacts);
// console.log(myPhone.call("Sarah"));
// console.log(cellphone.addContact("Jessie", 7182417155));
// console.log(cellphone.addContact("Lijah", 7182318125));
// console.log(cellphone.addContact("Alice", 7185427145));
// // console.log(cellphone.numberOfContacts())
// console.log(cellphone.contacts);
// console.log(cellphone.call("Jessie"));

/////////////////////////////////////////////////////////////
module.exports = {
  cellphone,
  makeCellPhone,
};
