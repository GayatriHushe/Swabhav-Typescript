"use strict";
//one module
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    Object.defineProperty(Student.prototype, "FullName", {
        get: function () {
            return this.firstname + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
var Address = /** @class */ (function () {
    function Address(location, city) {
        this.location = location;
        this.city = city;
    }
    Object.defineProperty(Address.prototype, "City", {
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
