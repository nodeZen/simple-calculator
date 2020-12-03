const defaultResult = 0;

var currentResult = defaultResult;
const logEntryList = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function calcDescription(operator,previousResult,enteredvalue){
    return `${previousResult}${operator}${enteredvalue}`
}

function calculateResult(calculationType){

    

    let enteredNumber = getUserNumberInput();
    let previousResult = currentResult;
    let operator;

    if(!enteredNumber)
    return;

    if(calculationType === 'ADD'){
        operator = '+'
        currentResult += enteredNumber;
        
    }else if(calculationType === 'SUBTRACT'){
        operator = '-'
        currentResult -= enteredNumber;
    }else if(calculationType === 'MULTIPLY'){
        operator = '*'
        currentResult *= enteredNumber;
    }else if(calculationType === 'DIVIDE'){
        operator = '/'
        currentResult /= enteredNumber;
    }
    outputResult(currentResult, calcDescription(operator,previousResult,enteredNumber));    
    logEntries(calculationType,previousResult,enteredNumber,currentResult);
}

function logEntries(optn,prevResult,entdNumber,res){

    let entry = {
        operation : optn,
        previousResult : prevResult,
        enteredNumber : entdNumber,
        result: res
    }

    logEntryList.push(entry);
    console.log(logEntryList);
    
}

function add(){    

    calculateResult('ADD');

}

function subtract(){    

    calculateResult('SUBTRACT');
}


function multiply(){    

    calculateResult('MULTIPLY');

}

function divide(){    

    calculateResult('DIVIDE');

}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);