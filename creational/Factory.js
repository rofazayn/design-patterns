// a factory IRL is just a building that build/manufactures things
// a factory pattern in programming does exactly the same

// let's say I own a software business and I hire employees
// I have 2 types of employees: developers and testers
// and I want to write a database to keep track of my employees

class Employee {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm a ${this.type}`;
  }
}

class EmployeeFactory {
  createEmployee(name, type) {
    switch (type) {
      case 'Developer':
        return new Employee(name, 'Developer');

      case 'Tester':
        return new Employee(name, 'Tester');

      default:
        throw new Error(`Invalid Employee type: ${type}`);
    }
  }
}

let employeeFactory = new EmployeeFactory();
let ruzo = employeeFactory.createEmployee('Ruzo', 'Developer');
let bob = employeeFactory.createEmployee('Bob', 'Tester');

console.log(ruzo.introduce());
console.log(bob.introduce());
