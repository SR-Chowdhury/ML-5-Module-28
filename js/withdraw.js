/**
 * prevDeposit, prevWithdraw, prevTotal, depositId, withdrawId, depositSubmitBtn, withdrawSubmitBtn
 */

document.getElementById('withdrawSubmitBtn').addEventListener('click', function() {

    const newWithdrawField = document.getElementById('withdrawId');
    const newWithdraw = parseFloat(newWithdrawField.value);
    // console.log(newWithdraw); Output: NaN if not a number or empty string

    newWithdrawField.value = '';

    if (isNaN(newWithdraw)) {
        alert('Please enter a valid number!');
        return;
    }

    const prevWithdrawAmount = document.getElementById('prevWithdraw');
    const prevWithdraw = parseFloat(prevWithdrawAmount.innerText);

    const prevTotalAmount = document.getElementById('prevTotal');
    const prevTotal = parseFloat(prevTotalAmount.innerText);

    if (newWithdraw > prevTotal) {
        alert('Sorry, You have no sufficiant Money!');
        return;
    }

    const currentWithdraw = newWithdraw + prevWithdraw;

    const currentTotal = prevTotal - newWithdraw;

    prevWithdrawAmount.innerText = currentWithdraw;
    prevTotalAmount.innerText = currentTotal;

});