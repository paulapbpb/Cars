var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cars");

var carSchema = new mongoose.Schema({
    make: String,
    model: String,
    parts: Array
});

var Car = mongoose.model("Car", carSchema);

var Dahlia = new Car({
    make: "Lexus",
    model: "IS250",
    parts: ["tire", "engine", "leather"]
});

var Charlotte = new Car({
    make: "Nissan",
    model: "Altima",
    parts: ["radio", "stick shift", "upholseter"]
});

var dream = new Car({
    make: "Tesla",
    model: "model 3",
    parts: ["chargeable enginer", "solar roof", "leather"]
});

var mater = new Car({
    make: "Ford",
    model: "F150",
    parts: ["tire", "engine", "steering wheel"]
});

var cars = [Dahlia, Charlotte, dream, mater];

for (i=0; i < cars.length; i++) {
    cars[i].save(function(err, car) {
        if(err) {
            console.log("Error" + err);
        } else {
            console.log(car);
        }
    })};

Car.find({
    make: "Ford"
}, function(err, cars) {
    if(err) {
        console.log("Error" + err);
    }
    else {
        console.log(cars);
    }
})