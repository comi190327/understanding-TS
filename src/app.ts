type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
  name: "Max",
  privilages: ["create - server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2("Hello", " TypeScript");
result.split(" ");

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation2(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privilages" in emp) {
//     console.log("privilages: " + emp.privilages);
//   }
//   if ("startDate" in emp) {
//     console.log("privilages: " + emp.startDate);
//   }
// }

// printEmployeeInformation2({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("運転中…");
//   }
// }

// class Truck {
//   drive() {
//     console.log("トラックを運転中…");
//   }

//   loadCargo(amount: number) {
//     console.log("荷物を載せています…" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVeicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVeicle(v1);
// useVeicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("移動速度: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById("user-input");
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "こんにちは";
// }

// interface ErrorCOntainer {
//   // {email: '正しいメールアドレスではありません', username: 'ユーザ名に記号を含めることはできません'}
//   [prop: string]: string;
// }

// const errorBag: ErrorCOntainer = {
//   email: "正しいメールアドレスではありません",
//   username: "ユーザ名に記号を含めることはできません",
// };
