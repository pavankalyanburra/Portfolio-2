var typed = new Typed(".text", {
    strings: ["Frontend Developer", "UI/UX Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Initialize EmailJS
(function() {
  emailjs.init('user_123456'); // Replace with your EmailJS User ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Prepare template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_email: 'pavankalyanb.goud@gmail.com' // Your Gmail address as the recipient
  };

  // Send email using EmailJS
  emailjs.send('pavankalyanb.goud@gmail.com ', 'template_abc', templateParams) // Replace with your Service ID and Template ID
    .then(function(response) {
      alert('Your message has been sent successfully!');
      document.getElementById('contact-form').reset(); // Clear the form
    }, function(error) {
      alert('Failed to send the message. Please try again later.');
      console.error('EmailJS Error:', error); // Log error for debugging
    });
});

  
  

