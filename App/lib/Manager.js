const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);    
        this.officeNumber = officeNumber;
           
    }

    getRole(){
        return "Manager";
    }

}

module.exports = Manager;

// const grace = new Manager('Grace', 30, "GraceTame@gmail.com", 20);

// console.log(grace.officeNumber);