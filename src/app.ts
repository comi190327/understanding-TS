const names: Array<string> = []; // string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("終わりました！");
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  // data.split(' ');
});
