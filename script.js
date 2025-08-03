function add(nb1, nb2) {
    return nb1 + nb2;
}

function subtract(nb1, nb2) {
    return nb1 - nb2;
}

function multiply(nb1, nb2) {
    return nb1 * nb2;
}

function divide(nb1, nb2) {
    if (nb2 == 0) return "ERROR";
    else return nb1 / nb2;
}

function operate(nb1, nb2, operator) {
    switch (operator) {
        case "add-operator":
            return add(nb1, nb2);
        case "subtract-operator":
            return subtract(nb1, nb2);
        case "multiply-operator":
            return multiply(nb1, nb2);
        case "divide-operator":
            return divide(nb1, nb2);
        default:
            return "ERROR: Unknown operator";
    }
}

function digitClicked(id) {
    if (id == "decimal") {
        if (!actual.includes(".")) {
            if (actual.length == 0) actual.push("0.");
            else actual.push(".");
        }
    } else if (id == "sign-toggle") {
        if (actual.length != 0) {
            if (actual[0] === "-") actual.shift();
            else actual.unshift("-");
        }
    } else {
        if (actual.length == 1 && actual[0] == "0") actual.pop();
        actual.push(id.charAt(id.length - 1));
    }
    let screen = document.querySelector(".screen");
    screen.textContent = actual.join("");
}

function operatorClicked(id) {
    let screen = document.querySelector(".screen");
    if (id == "equal-operator") {
        if (operator !== "" && actual.length > 0) {
            secondNumber = actual.join("");
            let result = String(operate(+firstNumber, +secondNumber, operator));
            if (result != "ERROR") ans = result;
            screen.textContent = result;
            firstNumber = "";
            secondNumber = "";
            operator = "";
            actual = [];
        }
    } else {
        if (operator !== "" && actual.length > 0) {
            secondNumber = actual.join("");
            let result = String(operate(+firstNumber, +secondNumber, operator));
            if (result != "ERROR") {
                firstNumber = result;
                ans = result;
                operator = id;
            } else {
                firstNumber = "";
                operator = "";
            }
            screen.textContent = result;
            actual = [];
            secondNumber = "";
        } else if (operator !== "" && actual.length == 0) {
            operator = id;
        } else if (operator === "" && actual.length > 0) {
            firstNumber = actual.join("");
            actual = [];
            operator = id;
        }
    }
}

function specialButtonClicked(id) {
    let screen = document.querySelector(".screen");
    switch (id) {
        case "clear":
            actual = [];
            firstNumber = "";
            secondNumber = "";
            operator = "";
            screen.textContent = "";
            break;
        case "delete":
            actual.pop();
            screen.textContent = actual.join("");
            break;
        case "ans":
            actual = ans.split("");
            screen.textContent = actual.join("");
            break;
    }
}


let firstNumber = "";
let secondNumber = "";
let operator = "";
let actual = [];
let ans = "";

let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", e => {
    let classes = e.target.classList;
    if (classes.contains("digit")) {
        digitClicked(e.target.id);
    } else if (classes.contains("operator")) {
        operatorClicked(e.target.id);
    } else if (classes.contains("special-button")) {
        specialButtonClicked(e.target.id);
    }
});