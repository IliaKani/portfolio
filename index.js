document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('a[href="#about-me"]');
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        const about = document.querySelector('#about-me');
        about.scrollIntoView({ behavior: 'smooth' });
    });

    const emailElement = document.querySelector('#copyemail');
    emailElement.addEventListener('click', async () => {
        const email = emailElement.getAttribute('data-clipboard-text');
        try {
            await navigator.clipboard.writeText(email);
            console.log('Email copied to clipboard!');
        } catch (error) {
            console.error('Error copying email to clipboard', error);
        }
    });
});