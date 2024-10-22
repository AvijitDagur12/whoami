const name = 'PRITHA';
let index = 0;
const nameElement = document.getElementById('animated-name');

// Animate the name "PRITHA" repeatedly
function animateName() {
    if (index < name.length) {
        nameElement.innerHTML += name[index];
        nameElement.style.opacity = '1';
        index++;
    } else {
        index = 0;
        nameElement.innerHTML = '';  // Clear the name for repeated animation
    }
    setTimeout(animateName, 500); // Delay between letters
}

window.onload = () => {
    setTimeout(animateName, 500); // Start animation after a slight delay
};

// Handle button responses
function handleResponse(response) {
    const responseText = document.getElementById('response-text');
    if (response === 'yes') {
        responseText.innerText = "Wow lets start for make memories 😊";
        responseText.style.color = "#28a745";
    } else {
        responseText.innerText = "Oh no! Maybe next time? 😔";
        responseText.style.color = "#dc3545";
    }
}
