"use strict";

let number = Number(prompt("Enter number from 0 to 7"));
const message = "Ваш рівень доступу";

switch (number) {
  case 0:
    console.log(message, "---");
    break;
  case 1:
    console.log(message, "--x");
    break;
  case 2:
    console.log(message, "-w-");
    break;
  case 3:
    console.log(message, "-wx");
    break;
  case 4:
    console.log(message, "r--");
    break;
  case 5:
    console.log(message, "r-x");
    break;
  case 6:
    console.log(message, "rw-");
    break;
  case 7:
    console.log(message, "rwx");
    break;
  default:
    console.log("Не корректне введення");
}
