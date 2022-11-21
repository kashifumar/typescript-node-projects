#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import chalk from "chalk";
import { RandomInt } from "./MyLib.js";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        let num = 0, randNum = 0, choice = "";
        let scores = { "won": 0, "lost": 0 };
        let objInput = {
            name: "num",
            type: "number",
            message: "Guess A Number between 1-5 : ",
        };
        let objInputChoice = {
            name: "choice",
            type: "list",
            message: "Do You Want To Try Again(y/n) - Choose and Press Enter",
            choices: [
                "y", "n",
            ],
        };
        do {
            console.clear();
            randNum = RandomInt(1, 5);
            do {
                yield inquirer.prompt([objInput])
                    .then(data => {
                    num = data.num;
                    if (isNaN(num)) {
                        console.clear();
                        console.log(chalk.red("You Must Enter a Number"));
                    }
                });
            } while (isNaN(num));
            console.log(chalk.greenBright(`System Generated : ${randNum}`));
            console.log(chalk.greenBright(`You entered : ${num}`));
            if (randNum === num) {
                scores.won++;
                console.log(chalk.greenBright(`Congratulations You Guessed it right!`));
            }
            else {
                scores.lost++;
                console.log(chalk.red(`Better Luck next Time`));
            }
            console.log(chalk.greenBright(`\nYour Score!`));
            console.log(chalk.greenBright(`Won : ${scores.won}`));
            console.log(chalk.red(`Lost : ${scores.lost}\n`));
            yield inquirer.prompt([objInputChoice])
                .then(data => {
                choice = data.choice;
            });
        } while (choice === "y");
    });
}
main();
