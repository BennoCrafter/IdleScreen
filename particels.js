const numParticles = 150;

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.querySelector('.particles-container').appendChild(particle);
    return particle;
}

// Function to animate particles
function animateParticles() {
    const particlesContainer = document.querySelector('.particles-container');

    function animateParticle(particle) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const size = Math.random() * 20 + 2; // Adjust the size range as desired
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const animationDuration = Math.random() * 3 + 2;
        particle.style.animation = `move ${animationDuration}s linear infinite, grow ${animationDuration}s ease-in-out infinite`;

        // Remove particles after a certain time to prevent memory leaks
        setTimeout(() => {
            particle.remove();
            // Create a new particle to replace the removed one
            animateParticle(createParticle());
        }, animationDuration * 1000);
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
        animateParticle(createParticle());
    }
}

// Initialize animation when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateParticles();
});