// Function to change text when the button is clicked
function changeText() {
    const section = document.querySelector('#home');
    const newText = document.createElement('p');
    newText.textContent = "You clicked the button! Thanks for visiting!";
    section.appendChild(newText);
}

// Form submission (for illustration purposes, it just prevents default behavior)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
