document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Collect form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!fullName || !email || !phone || !interest || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simple feedback to user
    alert("Thank you for applying! We'll get back to you soon.");

    // You can optionally send the data to a backend here
    this.reset(); // Clear the form
});
