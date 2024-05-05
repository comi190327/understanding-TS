"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let desctriptionText = "値がありません。";
    if (element.length > 0) {
        desctriptionText = "値は" + element.length + "個です。";
    }
    return [element, desctriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
//# sourceMappingURL=app.js.map