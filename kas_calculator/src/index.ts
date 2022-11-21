#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { Calculator } from "./calculator.js";

let num1: number, num2: number, op: string, error: boolean = false;

type MyInput = {
  name: string;
  type: string;
  message: string;
  choices?: string[];
}
async function getInput() {
  let num1: number = 0, num2: number = 0, op: string = "";
  let objInput: MyInput = {
    name: "num",
    type: "number",
    message: "Enter Your First Number",
  };

  let objInputOp: MyInput = {
    name: "operator",
    type: "list",
    message: "Select Your Operation & Press Enter",
    choices: [
      "+", "-", "x", "/",
    ],
  };

  do {
    await inquirer.prompt([objInput])
      .then(data => {
        num1 = data.num;
        if (isNaN(num1)) {
          console.clear();
          console.log(chalk.red("You Must Enter a Number"));
        }
        else {
          console.log(chalk.greenBright(`You entered : ${num1}`));
        }
      });

  } while (isNaN(num1));

  objInput.message = "Enter Your Second Number";
  do {
    await inquirer.prompt([objInput])
      .then(data => {
        num2 = data.num;
        if (isNaN(num2)) {
          console.clear();
          console.log(chalk.red("You Must Enter a Number"));
        }
        else {
          console.log(chalk.greenBright(`You entered : ${num2}`));
        }
      });
  } while (isNaN(num2));

  await inquirer.prompt([objInputOp])
    .then(data => {
      op = data.operator;
      if (op === "/" && num2 === 0) {
        console.clear();
        // console.log(chalk.red(`You have entered 0 and operation chosen in division.There will be a division by zero error resulting in infinity\n`));
      }
    });

  console.log(chalk.bgGreenBright.black(`Result = ${Calculator(num1, num2, op)}`));

}

getInput();
