class User {

    // constructor works like all other languages
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    sayHi() {
        return `Hi there ${this.firstName}`;
    }

    sayHello() {
        return `Hello ${this.firstName}. Your last name is ${this.lastName}.`;
    }
}

export default User;
