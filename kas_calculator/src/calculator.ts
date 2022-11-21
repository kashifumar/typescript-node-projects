
function Calculator(num1: number, num2: number, operator: string): string {
  let strResult: string = "", result: number;
  switch (operator) {
    case "+":
      result = num1 + num2;
      strResult = `${num1} + ${num2} = ${result}`;
      break;

    case "-":
      result = num1 - num2;
      strResult = `${num1} - ${num2} = ${result}`;
      break;

    case "x":
      result = num1 * num2;
      strResult = `${num1} x ${num2} = ${result}`;
      break;

    case "/":
      result = num1 / num2;
      strResult = `${num1} / ${num2} = ${result}`;
      break;

  }

  return strResult;
}

export { Calculator };