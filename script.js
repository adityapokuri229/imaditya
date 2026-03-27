document.addEventListener("DOMContentLoaded", () => {
    // Typing animation text for the main hero
    const textToType = "Hey, I'm Aditya";
    const typedTextElement = document.getElementById("typed-text");
    
    let charIndex = 0;

    function typeChar() {
        if (charIndex < textToType.length) {
            typedTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            // Slightly varied speed for realism
            setTimeout(typeChar, Math.random() * 50 + 50);
        } else {
            // Hide cursor after typing is complete
            const cursor = document.querySelector('.cursor');
            if (cursor) cursor.style.display = 'none';
        }
    }

    // Start typing animation after a short delay
    setTimeout(typeChar, 300);

    // Make project cards clickable to expand
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent expanding if clicking on a link
            if (e.target.closest('a')) return;
            
            const p = card.querySelector('p');
            if (p) {
                p.classList.toggle('expanded');
                // Use a small delay for smoother transition if changing height to auto
                if (p.classList.contains('expanded')) {
                    p.style.height = 'auto'; // Will not animate smoothly, but will show text
                    p.style.webkitLineClamp = 'unset';
                } else {
                    p.style.height = '4.5rem';
                    p.style.webkitLineClamp = '3';
                }
            }
        });
    });

    // Auto-update status dot colors based on text
    const updateStatusColors = () => {
        document.querySelectorAll('.status-badge').forEach(badge => {
            const dot = badge.querySelector('.status-dot');
            const statusText = badge.textContent.trim().toLowerCase();
            
            // Remove existing standard classes first
            dot.classList.remove('completed', 'in-progress', 'discontinued');
            
            if (statusText.includes('completed')) {
                dot.classList.add('completed');
            } else if (statusText.includes('in progress')) {
                dot.classList.add('in-progress');
            } else if (statusText.includes('discontinued') || statusText.includes('scrapped')) {
                dot.classList.add('discontinued');
            }
        });
    };

    updateStatusColors();

    // Set current year in footer
    const yearElement = document.getElementById("year");
    if (yearElement) yearElement.textContent = new Date().getFullYear();
});
