// Classes are templates, models for the objects
// They define how the objects will be sctructured
// Also classes define the behaviour of the objects
// Objects that are created from classes are called instances of that particular class
// Classes have a constructor, which is a special method that is called when we are creating an instance of that class
// in order to define an onject of that class and separate adress in the memory
// The constructor prepares the new object for using
// The constructor can receive parameters and assign those parameters to properties

// Class Declaration
class Student {
    constructor(name, age, address) {
        this.firstName = name;
        this.currentAge = age;
        this.localAddress = address;  
    }

    exercise() {
        console.log(`${this.firstName} is exercising right now!`);   
    }
}

function createAnInstanceOfStudents(name, age, address) {
    const student = new Student(name, age, address);

    console.log(student);
    student.exercise();
}

createAnInstanceOfStudents('Pesho', 24, 'Bulgaria, Veliko Tarnovo');

// this keyword -> used to set a property of the current object to a given value