
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", (event) => {
            // Prevent form submission
            event.preventDefault();

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validate inputs
            if (!name || !email || !message) {
                alert("Please fill out all fields before submitting the form.");
            } else {
                alert("Thank you for your message! We'll get back to you soon.");
                form.reset(); // Optionally reset the form after successful submission
            }
        });
    });
