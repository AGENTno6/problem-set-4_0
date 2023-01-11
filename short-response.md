### Short Response Section
Answer short response questions directly in this markdown file. Answer questions in 2 - 3 sentences. Be sure to format your responses appropriately.

**1. What is encapsulation? In JavaScript, why do we use it?**
> Encapsulation is the idea that we keep our functions and their data bundled in one object. In JavaScript, we use encapsulation to create privacy for the important data held within our programs. 
>

**2. How do JavaScript objects encapsulate state? How do they encapsulate behavior?**
> JavaScript objects encapsulates state by allowing access to state only through certain getter and setter methods.  

**3. What are factory functions and why are they useful?**
> Factory functions are functions that returns objects with the same structure, comprised of a particular set of methods and properties.  
> Factory functions are a useful tool because essentially, they're a helper function that simplifies code and commands; they make it 
> easier to create multiple objects with the same properties easily and this results in dry code, or lack of repetition. 

**4. Write a code snippet in which you create a Person factory function with at least two data properties. Then, in that same code snippet, use your factory function to create a _Person_ object.**

```js
const personFactory = (name, age) => {
    this.name: name,
    this.age: age,
    printPerson: function (name,age){
        console.log(`This is ${name}, age:${age}.`)
    };
};

let des = personFactory("Des", 22); 

```