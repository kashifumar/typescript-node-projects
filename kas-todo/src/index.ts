#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";

type MyInput = {
  name: string;
  type: string;
  message: string;
  choices?: object[];
}
enum TODOStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
}

type Item = {
  entry: string;
  status: `${TODOStatus}`;
};

let objInputChoice: MyInput = {
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

let objInputTODO: MyInput = {
  name: "todo",
  type: "string",
  message: "Enter Your TODO Item : ",
};
let todoList: Item[] = [];

async function main() {
  // let choice: string = "";
  let choice: number = 0;
  do {
    console.clear();

    if (choice == 1) {
      await inquirer.prompt([objInputTODO])
        .then(data => {
          let item: Item = {
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
      await inquirer.prompt([{
        name: "task_no",
        type: "number",
        message: "Enter Task # to Mark as Complete : ",
      }])
        .then(data => {
          let task_no: number = data.task_no;
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

    await inquirer.prompt([objInputChoice])
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
}

main();