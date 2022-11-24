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
import chalkAnimations from "chalk-animation";
var TODOStatus;
(function (TODOStatus) {
    TODOStatus["PENDING"] = "PENDING";
    TODOStatus["COMPLETED"] = "COMPLETED";
})(TODOStatus || (TODOStatus = {}));
let objInputChoice = {
    name: "choice",
    type: "list",
    message: "Make a Choice? Choose and Press Enter : ",
    choices: [
        {
            value: 1,
            name: 'Enter New TODO',
        },
        {
            value: 2,
            name: 'Update TODO',
        },
        {
            value: 3,
            name: 'View TODO',
        },
        {
            value: 4,
            name: 'Exit',
        },
    ],
};
let objInputTODO = {
    name: "todo",
    type: "string",
    message: "Enter Your TODO Item : ",
};
let todoList = [];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // let choice: string = "";
        let choice = 0;
        do {
            console.clear();
            if (choice == 1) {
                yield inquirer.prompt([objInputTODO])
                    .then(data => {
                    let item = {
                        entry: data.todo, status: "PENDING"
                    };
                    todoList.push(item);
                });
                console.clear();
            }
            else if (choice == 2) {
                console.clear();
                //get input to mark as completed      
                chalkAnimations.rainbow("**************TODO LIST***********************");
                console.log(`Sr# - TASK - Status`);
                chalkAnimations.rainbow("**************TODO LIST***********************");
                for (const [index, todoItem] of Object.entries(todoList)) {
                    console.log(`${(Number(index) + 1)} - ${todoItem.entry} = ${todoItem.status}`);
                }
                yield inquirer.prompt([{
                        name: "task_no",
                        type: "number",
                        message: "Enter Task # to Mark as Complete : ",
                    }])
                    .then(data => {
                    let task_no = data.task_no;
                    if (task_no > todoList.length) {
                        console.log("Enter a Valid Task Number");
                    }
                    else {
                        if (todoList[task_no - 1].status === "COMPLETED") {
                            console.log(`Task "${todoList[task_no - 1].entry}" is already completed`);
                        }
                        else {
                            todoList[task_no - 1].status = "COMPLETED";
                        }
                    }
                });
            }
            else if (choice == 3) {
                console.clear();
                let rainbow = chalkAnimations.rainbow("**************TODO LIST***********************");
                rainbow.start();
                // console.log("**************TODO LIST***********************");
                console.log(`Sr# - TASK - Status`);
                todoList.forEach((todoItem) => {
                    console.log(`${todoItem.entry} = ${todoItem.status}`);
                });
            }
            // for (const [entry, status] of Object.entries(todoList)) {
            //   console.log(``);
            // }
            yield inquirer.prompt([objInputChoice])
                .then(data => {
                choice = data.choice;
            });
            // console.clear();
        } while (choice != 4);
        console.clear();
        console.log("**************TODO LIST***********************");
        console.log(`Sr# - TASK - Status`);
        todoList.forEach((todoItem) => {
            console.log(`${todoItem.entry} = ${todoItem.status}`);
        });
        console.log("**************THANK YOU***********************");
    });
}
main();
