// Simple smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple hover effect to video items (Minecraft creeper sound on hover - optional)
document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // You could add a sound here: new Audio('creeper-sound.mp3').play();
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// CUSTOMIZE HERE: Add more interactions, like a lightbox for videos or animations.