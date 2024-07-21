document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('submitMessage').style.display = 'block'; // Display the submit message
});
