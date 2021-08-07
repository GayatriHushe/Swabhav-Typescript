var Customer = /** @class */ (function () {
    function Customer(id, firstName, lastname) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastname;
    }
    Object.defineProperty(Customer.prototype, "Id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "LastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var c1 = new Customer(101, "abc", "pqr");
console.log(c1.Id); //c1.getId()
console.log(c1.FirstName); //c1.getFirstName()
c1.FirstName = "ABC";
console.log(c1.FirstName);
console.log(c1.LastName); //c1.getLastName()
