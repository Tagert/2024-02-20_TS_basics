"use strict";
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
// variables in TS
var userName = "Pikachu";
console.log(userName);
var userLastName = "Pokemon";
var userAge = 26;
console.log(userName, userLastName, userAge);
// combine two types
var year = 20;
// arrays in TS
var carsArray = ["Audi", "BMW", "Mercedes"];
var carDetails = ["Audi", "A7", "diesel;", 5604];
var info = [{ name: "Andrew", age: 27 }, "student", true];
// objects in TS
var employee1;
employee1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Surveyor",
};
var employee2 = {
    firstName: "Tom",
    lastName: "Moe",
    age: 29,
    jobTitle: "Geodesist",
};
// functions in TS
var findNumber = function (n1, n2, n3) {
    return Math.max(n1, n2, n3);
};
console.log(findNumber(7, 10, 5));
// classes in TS
var Cars = /** @class */ (function () {
    function Cars(b, m, e, y) {
        this.brand = b;
        this.model = m;
        this.engine = e;
        this.year = y;
    }
    Cars.prototype.format = function () {
        return "Your car is ".concat(this.brand, " ").concat(this.model, " ").concat(this.engine, " and it's production year is ").concat(this.year);
    };
    return Cars;
}());
var Houses = /** @class */ (function () {
    function Houses(city, size, price, description) {
        this.city = city;
        this.size = size;
        this.price = price;
        this.description = description;
    }
    Houses.prototype.format = function () {
        return "City: ".concat(this.city, ", size: ").concat(this.size, " sq. m., price: ").concat(this.price, " Eur, description: ").concat(this.description);
    };
    return Houses;
}());
var Sites = /** @class */ (function (_super) {
    __extends(Sites, _super);
    function Sites(city, size, price, description) {
        return _super.call(this, city, size, price, description) || this;
    }
    Sites.prototype.getSquarePerMeter = function () {
        var squarePerMeter = Math.round(this.price / this.size);
        return "Your price square per meter is ".concat(squarePerMeter, " Eur / m2");
    };
    return Sites;
}(Houses));
var carNo1 = new Cars("VW", "Golf", "1.9 TDI", 2012);
var houseNo1 = new Houses("Kaunas", 120, 125000, "A spacious home has been placed in the city.");
var siteNo1 = new Sites("Vilnius", 135, 230000, "A spacious home has been placed in the city.");
console.log(carNo1);
console.log(carNo1.format());
console.log(houseNo1);
console.log(houseNo1.format());
console.log(siteNo1.getSquarePerMeter());
