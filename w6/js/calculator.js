function checker() {

    // INPUT: There will be 2 input cells for numbers/ 1 for operator/ 1 answer

    let number1 = parseFloat(document.getElementById("number1").value);
    let operator = document.getElementById("operator").value;
    let number2 = parseFloat(document.getElementById("number2").value);
    let answer = document.getElementById("answer").value;
    let message = "Incorrect 😢";
    let answerkey = 0;


    /* PROCESSING:
        The default will be the incorrect value and every time the kid enters the
        wrong value, then it will displat incorrect, otherwise it will be "Correct!"
    */

    switch (operator) {
        case "+":
            answerkey = number1 + number2;
            break;
        case "-":
            answerkey = number1 - number2;
            break;
        case "/":
            answerkey = number1 / number2;
            break;
        case "*":
            answerkey = number1 * number2;
            break;
        default:
            message = "";

    }

    if (answerkey == answer) {
        message = "Correct! 🏆";

    }
        
    

    // OUTPUT: The Message either the result is true or false.

    document.getElementById("output").innerHTML = message

}
