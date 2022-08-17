// Basic javascript

document.getElementById('deposit-button').addEventListener('click',function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);
    
    const depositAmount = document.getElementById('old-deposit');
    const previousDepositAmountString = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const totalBalance = parseFloat(previousTotalBalanceString);

    const totalAmount = totalBalance + newDeposit;
    previousTotalBalance.innerText = totalAmount;
    
    const totalDeposit = previousDepositAmount + newDeposit;
    depositAmount.innerText = totalDeposit;

    depositField.value = ''; 
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawAmount = document.getElementById('old-withdraw');
    const previousWithdrawAmountString = withdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const totalBalance = parseFloat(previousTotalBalanceString);

    
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withdrawAmount.innerText = totalWithdraw;

    const totalBalanceAfterWithdraw = totalBalance - newWithdrawAmount;
    previousTotalBalance.innerText = totalBalanceAfterWithdraw;

    withdrawField.value = '';
})