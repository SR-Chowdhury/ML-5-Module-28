document.getElementById('withdrawSubmitBtn').addEventListener('click', function() {

    const newWithdraw = getInputFieldValue('withdrawId');

    if (isNaN(newWithdraw) || newWithdraw <= 0) {
        alert('Please enter a valid number!');
        return;
    }

    const prevWithdraw = getTextValue('prevWithdraw');
    const prevTotal = getTextValue('prevTotal');

    if (newWithdraw > prevTotal) {
        alert('Sorry, You have no sufficiant Money!');
        return;
    }

    const currentWithdraw = newWithdraw + prevWithdraw;
    const currentTotal = prevTotal - newWithdraw;

    setValue('prevWithdraw', currentWithdraw);
    setValue('prevTotal', currentTotal);

});