// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Accessing the form and input elements
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const msgParagraph = document.getElementById('newsletter-msg');

    // Add event listener for form submission
    form.addEventListener('', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate email format
        let email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            msgParagraph.textContent = 'Please enter a valid email address.';
            msgParagraph.style.color = 'red';
            return;
        }

        // Simulate sending data to server (replace with actual AJAX call)
        setTimeout(function() {
      
      // Assuming subscription was successful
            msgParagraph.textContent = 'Thank you for subscribing!';
            msgParagraph.style.color = 'green';

            // Optionally, clear the email input
            emailInput.value = '';
        }, 1000); // Simulating delay for demo purposes
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Basic email format validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});