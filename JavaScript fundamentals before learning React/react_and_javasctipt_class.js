class Developer {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullname() {
        return this.firstname + " " + this.lastname;
    }
}

var fullname = new Developer("Alberth", "Ruado");

console.log(fullname.getFullname());