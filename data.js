const uploadImage = document.querySelector('.bot-card.reg .top #brokepen');
const newImage = document.querySelector('.profile .add');
const form = document.querySelector('form');
let registered = localStorage.getItem('data')
const registerCard = document.querySelector('.bot-card.reg')




uploadImage.addEventListener('change', function() {
  const file = uploadImage.files[0];
  const url = URL.createObjectURL(file);
  localStorage.setItem('imageUrl' , url)
    newImage.src = url

  
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

  const  registered = localStorage.getItem('data')
  const registerCard = document.querySelector('.bot-card.reg')

  if (registered) {
    registerCard.classList.toggle('hide')
  }
    
});


