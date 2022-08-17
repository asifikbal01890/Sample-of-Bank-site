// advance javascript3
document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdraw = getInputElementValueById('withdraw-field');
    const previousWithdraw = getTextElementValueById('old-withdraw');
    const previousTotalBalance = getTextElementValueById('total-balance');
    if (previousTotalBalance >= newWithdraw) {
        const totalWithdraw = previousWithdraw + newWithdraw;
        setTextElementValueById('old-withdraw', totalWithdraw);
        const totalBalance = previousTotalBalance - newWithdraw;
        setTextElementValueById('total-balance', totalBalance);  
    } else{
        alert("Please Chack Your Balance");
    }
})