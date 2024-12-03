document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');

    fetch('https://formspree.io/f/xeoqvypl', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            formMessage.innerHTML = '<div class="alert alert-success">Thanks for your interest! We\'ll keep you updated.</div>';
            this.reset();
        } else {
            formMessage.innerHTML = '<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>';
        }
    })
    .catch(error => {
        formMessage.innerHTML = '<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>';
    });
});
