document.addEventListener('DOMContentLoaded', function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const welcomeMessage = document.getElementById('welcomeMessage');
    const signupButton = document.getElementById('signupButton');
    const signinButton = document.getElementById('signinButton');
    const profileButton = document.getElementById('profileButton');
    const logoutButton = document.getElementById('logoutButton');

    if (storedUser) {
        welcomeMessage.textContent = `Welcome back, ${storedUser.name}!`;
        signupButton.style.display = 'none';
        signinButton.style.display = 'none';
        profileButton.style.display = 'block';
        logoutButton.style.display = 'block';
    }

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html';
    });

    signinButton.addEventListener('click', function() {
        window.location.href = 'signin.html';
    });

    profileButton.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
});
