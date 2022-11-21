function Calculator(num1, num2, operator) {
    let strResult = "", result;
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
