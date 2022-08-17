document.getElementById('submit-button').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if (email === 'asifikbal@gmail.com' && password === 'Asif4080') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You are not in our database');
    }
    emailField.value = '';
    passwordField.value = '';
    
})