document.addEventListener('DOMContentLoaded', function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        document.getElementById('profileName').textContent = storedUser.name;
        document.getElementById('profileEmail').textContent = storedUser.email;
        if (storedUser.profilePic) {
            document.getElementById('profilePic').src = storedUser.profilePic;
        } else {
            document.getElementById('profilePic').src = 'default-profile.png'; // Default profile picture
        }
    }

    document.getElementById('editProfileButton').addEventListener('click', function() {
        window.location.href = 'signup.html'; // Redirect to signup page for editing
    });
});
