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
        }
    }

    // Start typing animation after a short delay
    setTimeout(typeChar, 300);

    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
});
