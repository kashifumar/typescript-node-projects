#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { RandomInt } from "./MyLib.js";

type MyArrType = {
  [key: string]: number;
}

type MyInput = {
  name: string;
  type: string;
  message: string;
  choices?: string[];
}

async function main() {
  console.clear();
  let num: number = 0, randNum: number = 0, choice: string = "";
  let scores: MyArrType = { "won": 0, "lost": 0 };
  let objInput: MyInput = {
    name: "num",
    type: "number",
    message: "Guess A Number between 1-5 : ",
  };

  let objInputChoice: MyInput = {
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
      await inquirer.prompt([objInput])
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
    await inquirer.prompt([objInputChoice])
      .then(data => {
        choice = data.choice;
      });

  } while (choice === "y");

}

main();
