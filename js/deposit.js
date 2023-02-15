document.getElementById('depositSubmitBtn').addEventListener('click', function() {

    const newDeposit = getInputFieldValue('depositId');

    if (isNaN(newDeposit) || newDeposit <= 0) {
        alert('Please enter a valid number!');
        return;
    }

    const prevDeposit = getTextValue('prevDeposit');
    const prevTotal = getTextValue('prevTotal');

    const currentDposit = newDeposit + prevDeposit;
    const currentTotal = prevTotal + newDeposit;

    setValue('prevDeposit', currentDposit);
    setValue('prevTotal', currentTotal);

});