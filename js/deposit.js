/**
 * prevDeposit, prevWithdraw, prevTotal, depositId, withdrawId, depositSubmitBtn, withdrawSubmitBtn
 */

document.getElementById('depositSubmitBtn').addEventListener('click', function() {

    const newDepositField = document.getElementById('depositId');
    const newDeposit = parseFloat(newDepositField.value);
    // console.log(newdeposit); Output: NaN if not a number or empty string

    newDepositField.value = '';

    if (isNaN(newDeposit)) {
        alert('Please enter a valid number!');
        return;
    }

    const prevDepositAmount = document.getElementById('prevDeposit');
    const prevDeposit = parseFloat(prevDepositAmount.innerText);

    const prevTotalAmount = document.getElementById('prevTotal');
    const prevTotal = parseFloat(prevTotalAmount.innerText);

    const currentDposit = newDeposit + prevDeposit;

    const currentTotal = prevTotal + newDeposit;

    prevDepositAmount.innerText = currentDposit;
    prevTotalAmount.innerText = currentTotal;

});