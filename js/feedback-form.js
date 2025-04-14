document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        rulesUnderstanding: document.getElementById('rulesUnderstanding').value,
        confusingParts: document.getElementById('confusingParts').value,
        enjoyment: document.getElementById('enjoyment').value,
        cardBalance: document.getElementById('cardBalance').value,
        otherComments: document.getElementById('otherComments').value,
        email: document.getElementById('email').value
    };

    const formMessage = document.getElementById('formMessage');

    fetch('https://formspree.io/f/xeoqvypl', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            formMessage.innerHTML = '<div class="alert alert-success">Thank you for your feedback! Your response has been recorded.</div>';
            this.reset();
        } else {
            formMessage.innerHTML = '<div class="alert alert-danger">There was an error sending your feedback. Please try again later.</div>';
        }
    })
    .catch(error => {
        formMessage.innerHTML = '<div class="alert alert-danger">There was an error sending your feedback. Please try again later.</div>';
    });
});
