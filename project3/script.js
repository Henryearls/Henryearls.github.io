const fortunes = [
  "In a house with too many windows and not enough doors, you will learn to speak in silence.",
  "The wind carries your name, but no one recognizes it — not yet.",
  "Wait three more autumns, and the answers will appear like dew at dawn.",
  "When the stars align, you will find that your path was never truly hidden.",
  "Your future is written in the whispers of the night; listen closely."
];

const consultBtn = document.getElementById('consultBtn');
const inputField = document.getElementById('userInput');
const logContainer = document.getElementById('fortuneLog');
const body = document.body;

consultBtn.addEventListener('click', () => {
  const input = inputField.value.trim();

  if (input !== "") {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];

    // Fade out by reducing opacity
    body.style.transition = 'opacity 1s ease-in-out';
    body.style.opacity = '0.3';

    setTimeout(() => {
      // Swap background image
      body.style.backgroundImage = "url('Asset-2.png')";

      // Reset opacity to normal
      body.style.opacity = '1';

      // Create new fortune entry
      const fortuneElement = document.createElement('div');
      fortuneElement.className = 'fortune-entry';
      fortuneElement.textContent = fortune;

      // Append to log
      logContainer.appendChild(fortuneElement);

      // Reset input
      inputField.value = "";

    }, 1000);
  }
});
