var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is ".concat(this.model));
    };
    return Car;
}());
var car1 = new Car('Prius', 4, true);
car1.displayMake(); // This car is Prius
