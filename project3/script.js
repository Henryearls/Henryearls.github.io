// Array of sample poetic fortunes
const fortunes = [
    "In a house with too many windows and not enough doors, you will learn to speak in silence.",
    "The wind carries your name, but no one recognizes it — not yet.",
    "Wait three more autumns, and the answers will appear like dew at dawn.",
    "When the stars align, you will find that your path was never truly hidden.",
    "Your future is written in the whispers of the night; listen closely."
  ];
  
  // When the button is clicked, generate a random fortune
  document.getElementById('consultBtn').addEventListener('click', function() {
    const input = document.getElementById('userInput').value;
    if (input.trim() !== "") {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      document.getElementById('fortuneOutput').textContent = fortunes[randomIndex];
    } else {
      document.getElementById('fortuneOutput').textContent = "Please ask a question to reveal your future.";
    }
  });
  