class Person {

    //Private Data Fields
    #name;
    #age;
    #gender;
    #nickname;

    //constructor with parameters
    constructor(name, age, gender, nickname) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
    this.nickname = nickname;
    }

    //getters method
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get gender() {
        return this.#gender;
    }

    get nickname() {
        return this.#nickname;
    }

     //Method that Displays output via console.log
     displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Nickname: " + this.nickname);

    }

    //Method that Displays output via HTML
    displayInfoViaHTML() {
        const personElement = document.getElementById('person1');
        personElement.innerHTML = `
          <strong>Name: </strong> ${this.name} <br>
          <strong>Age: </strong> ${this.age} <br>
          <strong>Age: </strong> ${this.gender} <br>
          <strong>Gender: </strong> ${this.nickname} 
        `;
    }

}

        class student extends Person {

             //Constructor
             constructor(name, age, gender, nickname, year, degree) {
                super(name, age, gender, nickname);
                this.year = year;
                this.degree = degree; 
            }

            //Overriding the displayInfo method from Person class
            displayInfo() {
                super.displayInfo();
                console.log("Year: " + this.year);
                console.log("Degree: " + this.degree);
            }

            displayInfoViaHTML() {
                super.displayInfoViaHTML();
                const personElement = document.getElementById('person1');
                personElement.innerHTML += `
                <br> <strong> Year: </strong> ${this.year} <br>
                <strong> Degree: </strong> ${this.degree}
                `;
            }
        }