const person = {
    name: "Strygwyr",
    age: 19,
    gender: "Male",
    skill:"Rupture"
   }

   //Process and Output
   console.log("Salam alaikum");
   console.log("Name: " + person.name);
   console.log("Age: "  +person.age);
   console.log("Gender: " + person.gender);
   console.log("Skill: " +person.skill);  
   console.log("-------------------------------------");

   //Class named Person
    class Person {

    constructor(name, age, gender, skill) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skill = skill;
    }

    //Solution 1: Display via console.log
    displayInfo() { //Process and Output
        console.log("Name: " + this.name);
        console.log("Age: "  + this.age);
        console.log("Gender: " + this.gender);
        console.log("Skill: " + this.skill);
    }

    //Solution 2: Display via HTML
    displayViaHTML() {
        const personElement = document.getElementById('person1'); 
      personElement.innerHTML = `
        <strong>Name:</strong> ${this.name}<br>
        <strong>Age:</strong> ${this.age}<br>
        <strong>Age:</strong> ${this.gender}<br>
        <strong>Gender:</strong> ${this.skill}
        `;
    }

    
}

    // Create an instance of Person
    const person1 = new Person("Strygwyr", 19, "Male", "Rupture");

    //Calls the method
    person1.displayInfo();

    