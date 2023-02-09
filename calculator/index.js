// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDivision = document.getElementById('buttonDivision');

// buttonOperation = [buttonPlus, buttonMinus, buttonMultiply, buttonDivision];

var buttonOperation = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');


function makeOperation(operationCode){
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    if(operationCode ==='+'){
        var result = num1 + num2;
    }else if(operationCode ==='-'){
        var result = num1 - num2;
    }else if(operationCode ==='*'){
        var result = num1 * num2;
    }else if(operationCode ==='/'){
        var result = num1 / num2;
    }
    input3.value=result;
}


function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);

}



    for (let i = 0; i < buttonOperation.length; i++) {
        buttonOperation[i].addEventListener('click',onOperationButtonClick);
        
    }

