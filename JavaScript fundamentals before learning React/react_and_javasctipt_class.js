class Developer {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullname() {
        return this.firstname + " " + this.lastname;
    }
}

class ReactDeveloper extends Developer {
    getJob() {
        return `React Developer`;
    }
}

var me = new ReactDeveloper("Alberth", "Ruado");

console.log(me.getFullname());
console.log(me.getJob());