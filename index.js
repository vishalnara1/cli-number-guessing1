#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Campare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
console.log(answers);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
