var totalBudget = 0;
var totalExpense = 0;
var totalBalance = 0;
var id = 0;


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

const dataTable = document.querySelector(".data-table");

calcBtn.addEventListener('click', () =>{
    budgetCalc();
   
});

expenseBtn.addEventListener('click', () =>{
    expenseCalc();
});

function budgetCalc(){
    totalBudget = budgetInput.value;

    budgetInput.style.borderColor = 'lightgray'
    
    if(isNumber(totalBudget) && totalBudget != 0){
        budget.classList.add("green");
        budget.textContent = "$ " + budgetInput.value;
        totalBalance = totalBudget - totalExpense;
        balance.textContent = "$ " + totalBalance;
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
        budgetInput.style.borderColor = "red"
        return;
    }
    

};

function expenseCalc(){
    var expenseType = expenseTypeInput.value;
    var currExpense = 0;
    var currExpense = parseInt(expenseAmtInput.value);
    console.log(currExpense);
    if(expenseType === ""){
        expenseType = "Undefined";
    }
    expenseTypeInput.style.borderColor = 'lightgray';
    expenseAmtInput.style.borderColor = 'lightgray';

    if(isNumber(currExpense)){

        expense.setAttribute('class', 'red');
        totalExpense  = totalExpense + currExpense;
 
        expense.textContent = "$" + totalExpense;
        totalBalance = totalBudget - totalExpense;
        balance.textContent = "$ " + totalBalance;


        var newExpense = document.createElement('h4'); 
        var caps1 = expenseType.toUpperCase();
        newExpense.innerText = "- " + caps1;
        newExpense.classList.add('red');
        
        var expAmount = document.createElement('h4');
        expAmount.innerText  = "- " + currExpense;
        expAmount.classList.add("red");


        addRow(newExpense, expAmount);


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
    expenseTypeInput.value = "";
    expenseAmtInput.value = "";

}

function isNumber(value){
    if(isNaN(value)){
        return false;
    }
    else{
        return true;
    }
}

//need to create table wi

function addRow(expTitle, expAmount){
    var editImg = document.createElement('img');
    var delImg = document.createElement('img');
    editImg.src = "/images/edit.png";
    delImg.src = "/images/delete.png";  
    delImg.setAttribute('id', 'icon-buttons');
    editImg.setAttribute('id', 'icon-buttons');
    editImg.setAttribute('onclick', 'editExpense(this)');
    delImg.setAttribute('onclick', 'removeRow(this)');

    var rowCount = dataTable.rows.length;
    var tr = dataTable.insertRow(rowCount);

    for(let i = 0; i<3; i++){
        var td = document.createElement("td");
        td = tr.insertCell(i);

        if(i==0){
            td.append(expTitle);
        }
        if(i==1){
            td.append(expAmount);
        }
        if(i==2){
            td.append(editImg, delImg)
        }
    }

    
    
}

function removeRow(e){
    var rowIndex = e.parentNode.parentNode.rowIndex;

    var removeExpense = parseInt(dataTable.rows[rowIndex].cells[1].innerText.substr(2));
    totalBalance += removeExpense;
    totalExpense -= removeExpense;

    if(totalBalance > 0){
        balance.setAttribute('class', 'green');
    }
    if(totalBalance < 0){
        balance.setAttribute('class', 'red');
    }
    if(totalBalance == 0){
        balance.setAttribute('class', 'black');
    }
    if(totalExpense == 0){
        expense.setAttribute('class', 'black');
    }

    balance.textContent = "$ " + totalBalance;
    expense.textContent = "$ " + totalExpense;


    dataTable.deleteRow(e.parentNode.parentNode.rowIndex);

}
function editExpense(e){
    var rowIndex = e.parentNode.parentNode.rowIndex;

    var removeExpense = parseInt(dataTable.rows[rowIndex].cells[1].innerText.substr(2));
    totalBalance += removeExpense;
    totalExpense -= removeExpense;

    if(totalBalance > 0){
        balance.setAttribute('class', 'green');
    }
    if(totalBalance < 0){
        balance.setAttribute('class', 'red');
    }
    if(totalBalance == 0){
        balance.setAttribute('class', 'black');
    }
    if(totalExpense == 0){
        expense.setAttribute('class', 'black');
    }


    balance.textContent = "$ " + totalBalance;
    expense.textContent = "$ " + totalExpense;

    expenseTypeInput.focus();

    dataTable.deleteRow(e.parentNode.parentNode.rowIndex);



}

