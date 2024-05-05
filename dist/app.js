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
const result = add2("Hello", " TypeScript");
result.split(" ");
//# sourceMappingURL=app.js.map