// const names: Array<string> = []; // string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("終わりました！");
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(' ');
// });

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj.age);
