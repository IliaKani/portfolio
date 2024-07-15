const aboutLink = document.querySelector('a[href="#about-me"]');
aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    const about = document.querySelector('#about-me');
    about.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.querySelector('#copyemail');
    emailElement.addEventListener('click', function() {
        const email = this.getAttribute('data-clipboard-text');
        navigator.clipboard.writeText(email).then(function() {
            console.log('Email copied to clipboard!');
        }).catch(function(error) {
            console.error('Error copying email to clipboard', error);
        });
    });
});