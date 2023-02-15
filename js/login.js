/**
 * emaidId, passwordId, loginId
 *     console.log('loginId clicked');
 */

document.getElementById('loginId').addEventListener('click', function() {

    const emailField = document.getElementById('emaidId');
    const email = emailField.value;
    const passwordField = document.getElementById('passwordId');
    const password = passwordField.value;
   
    if (email != 'example@gmail.com' && password != '12345') {
        alert('Your email or password is not matched. Try again please');
        emailField.value = '';
        passwordField.value = '';
    } else {
        window.location.href = 'home.html';
    }
});