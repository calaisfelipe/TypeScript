// index signatures

/*interface TransactionObj {
 readonly [index: string]: number;
}*/

interface TransactionObj {
  readonly [index: string]: number;
  pizza: number;
  books: number;
  job: number;
}

const todayTransactions: TransactionObj = {
  pizza: -10,
  books: -5,
  job: 50,
  felipe: 21,
};

console.log(todayTransactions.pizza);
console.log(todayTransactions["pizza"]);

let prop: string = "pizza";
console.log(todayTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todayTransactions));

/////////////////////////////////////////////

interface Student {
  //[index:string]: number | string | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {

  name: "welington",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student])
} )