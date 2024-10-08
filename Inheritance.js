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

}