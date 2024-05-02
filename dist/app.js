"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            this.employees.push(name);
        }
    }
}
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accouting = new AccountingDepartment("d2", []);
accouting.mostRecentReport = "通期会計レポート";
accouting.addReport("Someting");
accouting.printReports();
console.log(accouting.mostRecentReport);
accouting.addEmployee("Max");
accouting.addEmployee("Manu");
accouting.printEmployeeInformation();
//# sourceMappingURL=app.js.map