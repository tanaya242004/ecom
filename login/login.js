const user_id = "samir123";
const password = "12345";

function pass_check(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Get input values
    const usernameInput = document.querySelector('.user-name input');
    const passwordInput = document.querySelector('.pass input');
    
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === user_id && enteredPassword === password) {
        // Redirect to home page or dashboard
        window.location.replace("/dist/index.html");
    } else {
        alert("Wrong password or username");
        // Clear password field
        passwordInput.value = '';
    }
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', pass_check);

