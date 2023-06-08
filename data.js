const uploadImage = document.querySelector('.bot-card.reg .top #brokepen');
const newImage = document.querySelector('.profile .add');
const form = document.querySelector('form');
let registered = localStorage.getItem('data')
const registerCard = document.querySelector('.bot-card.reg')
const profile = document.querySelector('.profile.user')

// window.onload = ()=>{
//     registerCard.classList.toggle('hide')
// }


uploadImage.addEventListener('change', function() {
  const file = uploadImage.files[0];
  const url = URL.createObjectURL(file);
  localStorage.setItem('imageUrl' , url)
    newImage.src = url


    profile.querySelector('img').src = localStorage.getItem('imageUrl')


  
});



form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;
  const username = document.querySelector('#username').value;
  const biography = document.querySelector('#biography').value;

  localStorage.setItem('Name', name);
  localStorage.setItem('Age', age);
  localStorage.setItem('Asername', username);
  localStorage.setItem('Biography', biography);


  localStorage.setItem('data' , true)
  let introData = "Hello  , "+localStorage.getItem('Name')+" my name is Levi. I am a  latest and greatest voicebot on the planet .   It is nice to meet you. Even though I am a machine, I can help you improve your English language by taking conversations with you. I am here to help you with any questions or tasks you may have. Welcome to Levi voicebot (that's me)"

  const  registered = localStorage.getItem('data')
  const registerCard = document.querySelector('.bot-card.reg')
  document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${introData}</p></div>`
  computerSpeech(introData)
  if (registered) {
    registerCard.classList.toggle('hide')
  }
    
});



function computerSpeech(words){
  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'eng-uk';
  speech.pitch = 1;
  speech.volume = 2;
  speech.text = words;
  speech.rate =1;
  window.speechSynthesis.speak(speech)


}