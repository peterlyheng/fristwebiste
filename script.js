document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const responseMessage = document.getElementById('responseMessage');

    responseMessage.textContent = '';

    if (password !== confirmPassword) {
        responseMessage.textContent = 'Passwords do not match!';
        responseMessage.style.color = 'red';
        return;
    }

    responseMessage.textContent = `Successfully registered with completes`;
    responseMessage.style.color = 'green';
});
