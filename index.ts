#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 5000
const myPin = 2004

console.log(`Your current balance is: ${myBalance}`);

let enterPin = await inquirer.prompt(
    [
        {
            name: "enteredPin",
            message: "Enter your pin please: ",
            type: "number"
        }
    ]
)

if(enterPin.enteredPin === myPin) {
    let operations = await inquirer.prompt(
        [
            {
                name: "choice",
                message: "Please select an option",
                type: "list",
                choices: ["Withdraw", "Check Balance"]
            }
        ]
    )
    if(operations.choice === "Withdraw") {
        let amountWithdraw = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter Amount",
                    type: "number"
                }
            ]
        )
        if (amountWithdraw.amount > myBalance) {
            console.log("You don't have enough funds to withdraw.")
            console.log("Your current balance is ", myBalance)
        } else {
            myBalance -= amountWithdraw.amount
            console.log(`Now your current balance is ${myBalance}`)
            console.log(`You withdrawed ${amountWithdraw.amount}`)
        }
    } else if (operations.choice === "Check Balance") {
        console.log("Your balance is", myBalance)
    }
} else {
    console.log("Incorrect Pin...")
}