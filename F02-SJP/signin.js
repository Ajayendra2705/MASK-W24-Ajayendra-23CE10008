document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        errorMessage.textContent = "Invalid email or password.";
        return;
    }

    window.location.href = 'profile.html';
});
