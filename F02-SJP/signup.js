document.addEventListener('DOMContentLoaded', function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // If editing, populate form with existing data
    if (storedUser) {
        document.getElementById('name').value = storedUser.name;
        document.getElementById('email').value = storedUser.email;
        document.getElementById('password').value = storedUser.password;
        document.getElementById('formTitle').textContent = 'Edit Profile';
    }

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const profilePic = document.getElementById('profilePic').files[0];
        const errorMessage = document.getElementById('errorMessage');

        // Basic Validation
        if (!name || !email || !password) {
            errorMessage.textContent = "All fields are required.";
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = "Please enter a valid email address.";
            return;
        }

        let user = { name, email, password };

        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function() {
                user.profilePic = reader.result; // Save profile picture as Base64
                saveUser(user);
            };
            reader.readAsDataURL(profilePic);
        } else {
            // Keep previous profile picture if not changed
            if (storedUser && storedUser.profilePic) {
                user.profilePic = storedUser.profilePic;
            }
            saveUser(user);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function saveUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'profile.html';
    }
});
