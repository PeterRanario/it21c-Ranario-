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
}
    