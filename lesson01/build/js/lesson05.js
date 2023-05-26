"use strict";
// index signatures
const todayTransactions = {
    pizza: -10,
    books: -5,
    job: 50,
    felipe: 21,
};
console.log(todayTransactions.pizza);
console.log(todayTransactions["pizza"]);
let prop = "pizza";
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
const student = {
    name: "welington",
    GPA: 3.5,
    classes: [100, 200],
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
