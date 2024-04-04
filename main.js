#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
while (loop) {
    let currency = await inquirer.prompt([
        {
            name: "currentcurrency",
            type: "list",
            message: "Please, Enter the Currency you have!!",
            choices: [
                "PAKISTANI RUPEES",
                "US DOLLAR",
                "JAPANESE YEN",
                "CHINESE YUAN",
            ],
        },
        {
            name: "amount",
            type: "number",
            message: "Please, Enter the Amount!",
        },
        {
            name: "convertcurrency",
            type: "list",
            message: "Please, Enter the Currency you want to Convert!",
            choices: [
                "PAKISTANI RUPEES",
                "US DOLLAR",
                "JAPANESE YEN",
                "CHINESE YUAN",
            ],
        },
    ]);
    let input = currency.currentcurrency;
    let output = currency.convertcurrency;
    let amount = currency.amount;
    if (input === "PAKISTANI RUPEES") {
        if (output === "US DOLLAR") {
            console.log(`Your ${amount} Pakistani rupees After Convert is ${amount / 277.90}`);
        }
        else if (output === "JAPANESE YEN") {
            console.log(`Your ${amount} Pakistani rupees After Convert is ${amount * 0.54}`);
        }
        else if (output === "CHINESE YUAN") {
            console.log(`Your ${amount} Pakistani rupees After Convert is ${amount * 0.026}`);
        }
        else if (input === "PAKISTANI RUPPES") {
            console.log("Invalid currency");
        }
    }
    else if (input === "US DOLLAR") {
        if (output === "PAKISTANI RUPEES") {
            console.log(`Your ${amount} US Dollar after Convert is ${amount * 277.9}`);
        }
        else if (output === "JAPANESE YEN") {
            console.log(`Your ${amount} US Dollar after Convert is ${amount * 151.32}`);
        }
        else if (output === "CHINESE YUAN") {
            console.log(`Your ${amount} US Dollar after Convert is ${amount * 7.23}`);
        }
        else if (input === "US DOLLAR") {
            console.log("Invalid currency");
        }
    }
    else if (input === "JAPANESE YEN") {
        if (output === "PAKISTANI RUPEES") {
            console.log(`Your ${amount} Japanese yen After Convert is ${amount * 1.84}`);
        }
        else if (output === "US DOLLAR") {
            console.log(`Your ${amount} Japanese yen After Convert is ${amount * 0.0066}`);
        }
        else if (output === "CHINESE YUAN") {
            console.log(`Your ${amount} Japanese yen After Convert is ${amount * 0.048}`);
        }
        else if (input === "JAPANESE YEN") {
            console.log("Invalid currency");
        }
    }
    else if (input === "CHINESE YUAN") {
        if (output === "PAKISTANI RUPEES") {
            console.log(`Your ${amount} Chinese yuan After Convert is ${amount * 38.41}`);
        }
        else if (output === "US DOLLAR") {
            console.log(`Your ${amount} Chinese yuan After Convert is ${amount * 0.14}`);
        }
        else if (output === "JAPANESE YEN") {
            console.log(`Your ${amount} Chinese yuan After Convert is ${amount * 20.91}`);
        }
        else if (input === "CHINESE YUAN") {
            console.log("Invalid currency");
        }
    }
    const calculateAgain = await inquirer.prompt({
        name: "calculatemore",
        type: "confirm",
        message: "Do you want to use this app more?",
        default: false,
    });
    if (calculateAgain.calculatemore === false) {
        loop = false;
        console.log("Thankyou for using my app!!");
    }
};
