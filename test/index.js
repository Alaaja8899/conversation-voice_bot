const btn = document.querySelector('#micBtn')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
  const spokenWords = event.results[0][0].transcript;
  console.log(spokenWords);
};

recognition.onerror = (event) => {
  console.error(event.error);
};

recognition.onend = () => {
  console.log('Speech recognition ended.');
};

btn.addEventListener('click', () => {
  recognition.start();
});