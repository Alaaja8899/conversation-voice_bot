const micBtn = document.querySelector('.voice-btn')
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition

const recognition = new speechRecognition();
recognition.onstart = (event) =>{
    micBtn.classList.add('active')
}
recognition.onend = (event) =>{
    micBtn.classList.remove('active')
 
}


recognition.onresult = (event) =>{
    const spokenWords = event.results[0][0]. transcript
    console.log(spokenWords)
    document.querySelector('.message-body').innerHTML+= `<div class="user-msg"><p>${spokenWords}</p></div>`
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    talkToThem(spokenWords)
}


function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'eng-UK';
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.text = words;
    speech.rate =1;

    window.speechSynthesis.speak(speech)
}


function talkToThem(words){
    if (words.includes('hello') || words.includes('hi')){
        let answer  = 'hi how i can help you '
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
        computerSpeech(answer)
    }
    if (words.includes('what is your name ') || words.includes('your name')){
        let answer  = 'my name is zack'
        
        computerSpeech(answer)
        computerSpeech('wha is your name')
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

    }
    if (words.includes('are you a robot') || words.includes('your master') || words.includes('who created you')|| words.includes('who are you')|| words.includes('what are you')){
        let answer  = 'i am a robot founded by engineer abdirizak abdalla hussein'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('Somalia') || words.includes('Where is Somalia ') || words.includes('Somalia located')){
        let answer  = 'Somalia, officially the Federal Republic of Somalia is a country in the Horn of Africa.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('hello google') || words.includes('hey google') || words.includes('Google')){
        let answer  = 'i am not google but we are freinds call me zack please!'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('are you good') || words.includes('how are you') || words.includes('how are you doing')|| words.includes('are you fine')|| words.includes('are you good')|| words.includes('how you doing')){
        let answer  = 'i am doing greate alhamdulilah';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech('what about you')

    }
    if (words.includes('your developer') || words.includes('your engineer') || words.includes('do you know abdirizak')|| words.includes('abdirizak abdalla hussein')|| words.includes('abdirizak')|| words.includes('who is abdirizak') || words.includes('who developed you')){
        let answer  = 'i am doing greate alhamdulilah';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech('what about you')

    }
   
} 




micBtn.addEventListener('click',() =>{
    recognition.start();
})