// advance javascript2
document.getElementById('deposit-button').addEventListener('click',function(){
    const newDeposit = getInputElementValueById('deposit-field');
    const previousDeposit = getTextElementValueById('old-deposit');
    const totalDeposit = previousDeposit + newDeposit;
    setTextElementValueById('old-deposit', totalDeposit);
    const previousTotalBalance = getTextElementValueById('total-balance');
    const totalBalance = previousTotalBalance + newDeposit;
    setTextElementValueById('total-balance', totalBalance);
})