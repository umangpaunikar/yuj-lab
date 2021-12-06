var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fname, lname, addr) {
        this.firstName = fname;
        this.lastName = lname;
        this.address = addr;
    }
    Person.prototype.getName = function () {
        return "".concat(this.firstName, " - ").concat(this.lastName);
    };
    Person.prototype.greet = function () {
        return "Hello Good Morning ".concat(this.getName());
    };
    return Person;
}());
var umang = new Person('Umang', 'Paunikar', 'Pune');
var message = umang.greet();
console.log(message);
// Inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fname, lastName, address, att, mark, exam) {
        var _this = _super.call(this, fname, lastName, address) || this;
        _this.exam = exam;
        _this.marks = mark;
        _this.attendence = att;
        return _this;
    }
    Student.prototype.takeExam = function () {
        console.log(" ".concat(_super.prototype.getName.call(this), "    taking ").concat(this.exam, " exam"));
    };
    return Student;
}(Person));
var namrata = new Student('Namrata', 'Kale', 'pune', 100, 90, 12);
namrata.takeExam();
