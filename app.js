var totalBudget = 0;
var totalExpense = 0;
var totalBalance = 0;



// green widget input and button DOM assignment
const budgetInput = document.querySelector("#budget-input");
const calcBtn = document.querySelector(".calculate-btn");

// red widget input and button DOM assignment
const expenseTypeInput = document.querySelector("#expense-type");
const expenseAmtInput = document.querySelector("#expense-amount");
const expenseBtn = document.querySelector(".expense-btn");

const budget = document.querySelector("#budget");
const expense = document.querySelector("#expense");
const balance = document.querySelector("#balance");

const expDataTitle = document.querySelector("#title");
const expDataAmt = document.querySelector("#amount");

calcBtn.addEventListener('click', () =>{
    budgetCalc();
   
});

expenseBtn.addEventListener('click', () =>{
    expenseCalc();
});

function budgetCalc(){
    totalBudget = budgetInput.value;
    budgetInput.style.borderColor = 'lightgray'
    
    if(isNumber(totalBudget)){
        budget.classList.add("green");
        budget.textContent = "$ " + budgetInput.value;
        totalBalance = totalBudget - totalExpense;
        balance.textContent = "$ " + totalBalance;
        if(totalBalance > 0){
            console.log(totalBalance);
            balance.setAttribute('class', 'green');
    
        }
        if(totalBalance < 0){
            balance.setAttribute('class', 'red');
    
    
        }
        if(totalBalance == 0){
            balance.setAttribute('class', 'black');
        }

    }else{
        budgetInput.style.borderColor = "red"
        return;
    }
    

};

function expenseCalc(){
    var expenseType = expenseTypeInput.value;
    totalExpense = expenseAmtInput.value;
    if(expenseType === ""){
        expenseType = "Undefined";
    }
    expenseTypeInput.style.borderColor = 'lightgray';
    expenseAmtInput.style.borderColor = 'lightgray';

    if(isNumber(totalExpense)){

        expense.textContent = "$" + totalExpense;
        totalBalance = totalBudget - totalExpense;
        balance.textContent = "$ " + totalBalance;

        var newExpense = document.createElement('h4'); 
        newExpense.innerText = "- " + expenseType;
        newExpense.classList.add('red');
        expDataTitle.append(newExpense);

        var expAmount = document.createElement('h4');
        expAmount.innerText  = "- " + totalExpense;
        expAmount.classList.add("red");
        expDataAmt.append(expAmount);


        expense.classList.add("red");

        if(totalBalance > 0){
            balance.setAttribute('class', 'green');
        }
        if(totalBalance < 0){
            balance.setAttribute('class', 'red');
        }
        if(totalBalance == 0){
            balance.setAttribute('class', 'black');
        }
    }else{
        expenseAmtInput.style.borderColor = "red";
        return;
    }

}

function isNumber(value){
    if(isNaN(value)){
        return false;
    }
    else{
        return true;
    }
}

