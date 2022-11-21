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
import { Calculator } from "./calculator.js";
let num1, num2, op, error = false;
function getInput() {
    return __awaiter(this, void 0, void 0, function* () {
        let num1 = 0, num2 = 0, op = "";
        let objInput = {
            name: "num",
            type: "number",
            message: "Enter Your First Number",
        };
        let objInputOp = {
            name: "operator",
            type: "list",
            message: "Select Your Operation & Press Enter",
            choices: [
                "+", "-", "x", "/",
            ],
        };
        do {
            yield inquirer.prompt([objInput])
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
            yield inquirer.prompt([objInput])
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
        yield inquirer.prompt([objInputOp])
            .then(data => {
            op = data.operator;
            if (op === "/" && num2 === 0) {
                console.clear();
                // console.log(chalk.red(`You have entered 0 and operation chosen in division.There will be a division by zero error resulting in infinity\n`));
            }
        });
        console.log(chalk.bgGreenBright.black(`Result = ${Calculator(num1, num2, op)}`));
    });
}
getInput();
