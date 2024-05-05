"use strict";
const e1 = {
    name: "Max",
    privilages: ["create - server"],
    startDate: new Date(),
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation2(emp) {
    console.log(emp.name);
    if ("privilages" in emp) {
        console.log("privilages: " + emp.privilages);
    }
    if ("startDate" in emp) {
        console.log("privilages: " + emp.startDate);
    }
}
printEmployeeInformation2({ name: "Manu", startDate: new Date() });
class Car {
    drive() {
        console.log("運転中…");
    }
}
class Truck {
    drive() {
        console.log("トラックを運転中…");
    }
    loadCargo(amount) {
        console.log("荷物を載せています…" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVeicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVeicle(v1);
useVeicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("移動速度: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "こんにちは";
}
const errorBag = {
    email: "正しいメールアドレスではありません",
    username: "ユーザ名に記号を含めることはできません",
};
//# sourceMappingURL=app.js.map