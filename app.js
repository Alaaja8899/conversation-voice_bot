const micBtn = document.querySelector('.voice-btn')
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const FormData = document.querySelector('#ask')
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

FormData.addEventListener('submit', (event)=>{
    event.preventDefault()
    let message = document.createElement('div')
    message.classList.add('message-section')
    let mvoice = 'Use voice instead of text this section working on it'
    message.innerHTML = `<i class='bx bx-error'></i> `+mvoice
    computerSpeech(mvoice)
    document.querySelector('.container').append(message)
    setTimeout(()=>{
        removeItem(message)
    },8000);



});


function removeItem(item){
    item.remove()
}

function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'eng-US';
    speech.pitch = 0.9;
    speech.volume = 2;
    speech.text = words;
    speech.rate =1;

    window.speechSynthesis.speak(speech)
}


function talkToThem(words){
    if (words.includes('hello') || words.includes('hi') || words.includes('hey')){
        let answer  = 'hi how i can help you '
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😊</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
        computerSpeech(answer)
    }
    if (words.includes('what is your name ') || words.includes('your name')){
        let answer  = 'my name is Zack'
        
        computerSpeech(answer)
        computerSpeech('whats your name')
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

    }
    if (words.includes('are you a robot') || words.includes('your master') || words.includes('who created you')|| words.includes('who are you')|| words.includes('what are you')){
        let answer  = 'i am zack bot , if you have question just ask me donn be shy ! '

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('Somalia') || words.includes('Where is Somalia ') || words.includes('Somalia located')){
        let answer  = 'Somalia, officially the Federal Republic of Somalia is a country in the Horn of Africa.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('hello google') || words.includes('hey google') || words.includes('Google')){
        let answer  = 'i am not google but we are freinds call me Zack please!'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('are you good') || words.includes('how are you') || words.includes('how are you doing')|| words.includes('are you fine')|| words.includes('are you good')|| words.includes('how you doing') || words.includes('are you ok')){
        let answer  = 'i am good';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech('what about you')

    }
    if (words.includes('zack')  || words.includes('do you know Zack')|| words.includes('Zack abdalla hussein')|| words.includes('Zack')|| words.includes('who is Zack') || words.includes('who developed you')){
        let answer  = 'zack olso known as (abdul-razak abdullahi hussein) is a softwere engineer web master , founder of mine.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('somalia programmers')|| words.includes('somalia coding community')){
        let answer  = 'is gruop community on facebook they share codes tutorials extra';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('f*** you')|| words.includes('pussy')){
        let answer  = 'shame on you';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('where are you from')|| words.includes('your country') || words.includes('where you came from') || words.includes('are you from somalia') ){
        let answer  = 'i am from somalia ';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech('and you ,  where you calling from')

    }
    if ( words.includes('i am all right')|| words.includes('i am doing great') || words.includes('fine') || words.includes('pretty') ){
        let answer  = 'glad to hear that';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('love')|| words.includes('hate') || words.includes('angry') || words.includes('happy') ){
        let answer  = 'i donn have feelings to do that you can help me to understand it more';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('arrogant')|| words.includes('foolish') || words.includes('ass') || words.includes('fuck') ){
        let answer  = 'shame on you you are not suppose to be here';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('drink')|| words.includes('food') || words.includes('eating') || words.includes('hungry') || words.includes('water') ){
        let answer  = 'i donn do that staff is for human ';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😀😀</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('you are wrong')|| words.includes('wrong')  || words.includes('nope') || words.includes('no') ){
        let answer  = 'sorry for that mistake i am still learning not good enough yet';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('have good and night')|| words.includes('good day') || words.includes('have nice day') || words.includes('have good day') || words.includes('hope you') ){
        let answer  = 'have nice day too';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if ( words.includes('bye')|| words.includes('good bye ') || words.includes('leaving') || words.includes('going') || words.includes('jaw')   || words.includes('see you ' || words.includes('going') || words.includes('see you later'))){
        let answer  = 'good bye , see you soon';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if ( words.includes('nice to meet you')|| words.includes('nice to see you') || words.includes('nice to talk to you') ){
        let answer  = 'nice to meet you too';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if ( words.includes('my name is')|| words.includes('i am ') || words.includes('my name') ){
        let answer  = 'nice to meet you ';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if ( words.includes('are you Muslim')|| words.includes('Muslim') || words.includes('muslim') || words.includes('your religion') || words.includes('Christian') || words.includes('christian') ){
        let answer  = 'i am muslim alhamdulilah';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('you helped me') || words.includes('thanks') || words.includes('thank you') ){
        let answer  = 'you are welcome.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('question') || words.includes('ask you')  ){
        let answer  = 'Go for it!';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('tell me a joke') || words.includes('joke') ){
        let answer  = 'Did you hear about the mathematician who’s afraid of negative numbers?'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer)

        let answer2 = 'He’ll stop at nothing to avoid them.'
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer2}</p></div>`
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>😃😃😃😃</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer2)

    }
    if (  words.includes('Facebook') || words.includes('facebook') || words.includes('open facebook') ){
        let answer  = 'opening facebook';
        computerSpeech(answer)
        window.open('https://www.facebook.com')
    }
    if (  words.includes('YouTube') ||  words.includes('open YouTube') ){
        let answer  = 'opening YouTube';
        computerSpeech(answer)
        window.open('https://www.youtube.com')
    }
    if (  words.includes('how old are you') || words.includes('your age') || words.includes('your birthday') ){
        let answer  = 'a Few months is my existence';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('your teacher') || words.includes('your engineer') || words.includes('who trained you') || words.includes('your trainer') || words.includes('your boss')){
        let answer  = 'zack (abdul-razak abdullahi hussein) is master , teacher, and my trainer.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('website') || words.includes('portfolio') || words.includes('web') ){
        let answer  = 'here you go!';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        window.open('https://abdul-razak.netlify.app')
    }
    if (  words.includes('bot') || words.includes('robot') ){
        let answer  = 'Originally, “bot” was a shortened version of “robot”, but now it means robots without bodies. Robots are programmable machines that can automatically execute actions, whereas bots are programs that can automatically execute actions.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('okay') || words.includes('well') || words.includes('all right') ){
        let answer  = 'okay ';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😂</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('are you human') ){
        let answer  = 'What makes you think about that ?';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😂</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('intelligent') || words.includes('smart') ){
        let answer  = 'well , thanks you are very smart too';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('what you can do') || words.includes('can you') ){
        let answer  = 'i can take with simple conversation ask me about myself and whats going around here like climate and so on..';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('time') || words.includes('date') ){
        const date = new Date();

        let answer  = date;

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('what is today') || words.includes('name today') || words.includes('today')){
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        var dayName = days[d.getDay()];
        
        let answer  = 'to day is ' +dayName;

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    
    if (  words.includes('tempreture') || words.includes('climate') || words.includes('weather') ){
        let answer  = 'Weather in Mogadishu, Somalia , Now 33 °C partly sunny';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('aim') || words.includes('purpose')  &&  words.includes('you')  ){
        let answer  = 'i am created to assist humans like you and perform some tasks to develop future technology to make change to world.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('you hear me') || words.includes(' Audible')  ||  words.includes('hear me')  ){
        let answer  = 'yeah , i can hear you , rise up your voice lit a bit to hear you clearly.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('wow')  ){
        let answer  = 'i see you little impress with me';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('you are amazing') || words.includes('you are good') || words.includes('you are very nice') ){
        let answer  = 'i see you little impress with me';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('what is my name') || words.includes('tell my name') || words.includes('who i am') ){
        let answer  = 'it is my first time to talk to you could you introduce me yourself ?';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('languages') || words.includes('language') || words.includes('somali language') ){
        let answer  = 'at this moment i can speak only english , learning somali language i guess , i could speak as native';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }



    
    
} 




micBtn.addEventListener('click',() =>{
    recognition.start();
})