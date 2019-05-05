import { name } from 'faker';
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // Using `public` arguments creates `this.firstName = firstName;`, etc., in the js
        this.fullName = firstName + " " + (middleInitial && middleInitial) + " " + lastName;
    }
    Student.prototype.yes = function () {
        return this.fullName;
    };
    return Student;
}());
var greeter = function (person) {
    return "hello " + person.firstName + " " + person.lastName + "!";
};
var user = new Student(name.firstName(), name.firstName(), name.lastName());
console.log(user.yes());
//# sourceMappingURL=tacker.js.map