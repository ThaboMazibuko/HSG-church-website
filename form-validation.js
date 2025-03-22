document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const confirmationPopup = document.getElementById("confirmation-popup");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual submission for testing

        let isValid = true;

        // Get form values
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        // Get error message elements
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        // Reset previous errors
        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";

        // Validation
        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            messageError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            // Show confirmation popup
            confirmationPopup.style.display = "block";
            setTimeout(() => {
                confirmationPopup.style.display = "none";
            }, 3000);

            form.reset(); // Reset form after submission
        }
    });

    // Real-time validation
    document.getElementById("name").addEventListener("input", function() {
        if (this.value.trim() !== "") {
            document.getElementById("name-error").style.display = "none";
        }
    });

    document.getElementById("email").addEventListener("input", function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(this.value.trim())) {
            document.getElementById("email-error").style.display = "none";
        }
    });

    document.getElementById("message").addEventListener("input", function() {
        if (this.value.trim() !== "") {
            document.getElementById("message-error").style.display = "none";
        }
    });
});
