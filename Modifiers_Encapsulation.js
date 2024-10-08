class Person {

    //Data fields
    #name;
    #age;
    #gender;
    #height;
    #skill;


    constructor(name, age, gender, height, skill) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#height = height;
        this.#skill = skill;
    }

    //getters to return the private data field
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get gender() {
        return this.#gender;
    }
    get height() {
        return this.#height;
    }
    get weight() {
        return this.#skill;
    }

    //Displays output via Console.log
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.skill);
    }
}