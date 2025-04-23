const fortunes = [
  "In a house with too many windows and not enough doors, you will learn to speak in silence.",
  "The wind carries your name, but no one recognizes it — not yet.",
  "Wait three more autumns, and the answers will appear like dew at dawn.",
  "When the stars align, you will find that your path was never truly hidden.",
  "Your future is written in the whispers of the night; listen closely.",
  "A stranger you haven’t met already misses you.",
  "Somewhere, a version of you chose differently. They are not happier.",
  "You will mistake safety for love once more before you finally understand the difference.",
  "It will end not with a bang, but with a soft exhale. And it will be beautiful.",
  "An old letter, unread, will find its way back to you — in a form you don't expect.",
  "You will become your own lighthouse, eventually. First, you'll learn to tread water.",
  "In letting go, you will finally see what was holding you back was your grip.",
  "The person you’re waiting for is waiting for someone braver than you. Become that.",
  "You will be forgiven for things you never apologized for — but not by them.",
  "A storm will pass. Not because you survived it, but because you became it.",
  "The next door won’t open until you stop knocking on the old one.",
  "You will break a cycle. But not without grieving the version of you that kept it alive.",
  "Someone will read your silence as poetry. Keep writing.",
  "You already know the answer — but you needed a myth to believe it.",
  "The next thing you lose will teach you more than the last thing you found.",
  "You will disappoint someone who loves you. It will set you free.",
  "Your greatest fear will become your greatest compass.",
  "If you look closely, even your shadow is trying to leave. Turn around.",
  "You will fall in love with something impossible. Let it ruin you gently.",
  "They won’t say sorry, but time will. Accept the apology in its place.",
  "This isn’t the end — it’s the echo before the real beginning.",
  "In the quiet moments, you’ll hear parts of yourself you silenced for survival.",
  "The ghosts aren’t angry. They’re just waiting to be heard.",
  "What you thought was a detour was the map. Keep going.",
  "The person you're becoming would terrify the person you once prayed to be. Good.",
  "One day, you’ll meet someone who doesn’t ask you to shrink. Stay wide.",
  "Not every ache needs a name. Let some remain sacred."
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
