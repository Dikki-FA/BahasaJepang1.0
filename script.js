document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
});

function playAudio(button) {
    const audio = button.parentElement.querySelector('audio');
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        
        // Add visual feedback
        button.style.color = '#c0392b';
        setTimeout(() => {
            button.style.color = '';
        }, 300);
    }
}