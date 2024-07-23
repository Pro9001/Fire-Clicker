let count = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
const countElement = document.getElementById('count');
const button = document.getElementById('clickerButton');
const vibrationEffect = document.getElementById('vibrationEffect');

countElement.textContent = count;

button.addEventListener('click', (event) => {
    count++;
    countElement.textContent = count;
    localStorage.setItem('clickCount', count);

    // Get the click position relative to the button
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Position the vibration effect
    vibrationEffect.style.left = `${x}px`;
    vibrationEffect.style.top = `${y}px`;
    vibrationEffect.style.opacity = 1;

    // Hide vibration effect after 2 seconds
    setTimeout(() => {
        vibrationEffect.style.opacity = 0;
    }, 2000);
});
