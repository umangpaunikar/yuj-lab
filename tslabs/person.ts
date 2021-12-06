class Person {
  firstName: any;
  lastName: any;
  address: any;

  constructor(fname: any, lname: any, addr: any) {
    this.firstName = fname;
    this.lastName = lname;
    this.address = addr;
  }

  getName() {
    return `${this.firstName} - ${this.lastName}`;
  }

  greet() {
    return `Hello Good Morning ${this.getName()}`;
  }
}

let umang = new Person('Umang', 'Paunikar', 'Pune');
let message = umang.greet();
console.log(message);

// Inheritance

class Student extends Person {
  attendence: any;
  marks: any;
  exam: any;

  constructor(
    fname: any,
    lastName: any,
    address: any,
    att: any,
    mark: any,
    exam: any
  ) {
    super(fname, lastName, address);
    this.exam = exam;
    this.marks = mark;
    this.attendence = att;
  }

  takeExam() {
    console.log(` ${super.getName()}    taking ${this.exam} exam`);
  }
}

let namrata = new Student('Namrata', 'Kale', 'pune', 100, 90, 12);

namrata.takeExam();
