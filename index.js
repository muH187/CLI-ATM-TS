import inquirer from "inquirer";
let myBalance = 5000;
const myPin = 1234;
console.log(`Your current balance is: ${myBalance}`);
let enterPin = inquirer.prompt([
    {
        name: "Ask for Pin",
        message: "Enter your pin please: ",
        type: "number"
    }
]);
