function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default

    // Fetching form inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    // Fetching error spans
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    // Resetting previous error messages
    nameError.textContent = '';
    emailError.textContent = '';

    // Validating Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameInput.focus();
        return false;
    }

    // Validating Email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailInput.focus();
        return false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.focus();
        return false;
    }

    // If the form passes validation, you can proceed with form submission
    // Here, you can add code to submit the form data to the server

    // For this example, just log the form data
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    return true;
}

// Function to validate email format using a simple regular expression
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
