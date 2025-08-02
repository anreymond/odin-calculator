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
        case "+":
            return add(nb1, nb2);
        case "-":
            return subtract(nb1, nb2);
        case "*":
            return multiply(nb1, nb2);
        case "÷":
            return divide(nb1, nb2);
        default:
            return "ERROR: Unknown operator";
    }
}