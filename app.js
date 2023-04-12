const micBtn = document.querySelector('.voice-btn')
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const FormData = document.querySelector('#ask')
const recognition = new speechRecognition();
recognition.onstart = (event) =>{
    micBtn.classList.add('active')
    let message = `<div class="bot-msg listening"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>Listening...<i class='bx bx-user-voice'></i></p></div>`
    
    document.querySelector('.message-body').innerHTML+= message
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

}
recognition.onend = (event) =>{
    micBtn.classList.remove('active')
    document.querySelector('.listening').remove()
    playAudio()

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
    speech.lang = 'eng-uk';
    speech.pitch = 100;
    speech.volume = 2;
    speech.text = words;
    speech.rate =1;

    window.speechSynthesis.speak(speech)
}


function talkToThem(words){
    if (words.includes('hello') || words.includes('hi') || words.includes('hey') || words.includes('up') ){
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
    if (words.includes('are you a robot') || words.includes('about yourself') || words.includes('who created you')|| words.includes('who are you')|| words.includes('what are you')){
        let answer  = 'i am zack bot , am not a human. I am a bot. A thinking bot.  My brain is boiling with ideas!'

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
    if (words.includes('zack')  || words.includes('do you know Zack')|| words.includes('Who made you')|| words.includes('Zack')|| words.includes('who is Zack') || words.includes('who developed you') || words.includes('who made you')){
        let answer  = 'zack olso known as (abdul-razak abdullahi hussein) is a softwere engineer web master , founder of mine.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/zack.jpg" alt="zack founder" class="m-img"></p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

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
    if ( words.includes('where are you from')|| words.includes('your country') || words.includes('where you came from') || words.includes('nationality') ){
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
    if ( words.includes('love')|| words.includes('hate') || words.includes('angry') || words.includes('happy') || words.includes('emotions') || words.includes('sad')){
        let answer  = 'i donn have feelings, Humans have emotions such as happiness, sadness, fear, and anger; and maybe other animals have them too. Robots are getting increasingly smarter, for example, the driverless cars that are now navigating city streets. What would it take to make a robot emotional, and would we ever want them to have that capacity.';

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
    if (  words.includes('David Hanson') || words.includes('David')  ){
        let answer  = 'David Hanson is a leader in humanlike robots development. His continuous researches have been allowing the creation of machines that look and act like humans.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/david.jpg" alt="david hanson and sophia" class="m-img"></p></div>`
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }

    if (  words.includes('Sophia') || words.includes('sophia') || words.includes('little sophia') || words.includes('Sofia') ){
        let answer  = 'Sophia is a realistic humanoid robot capable of displaying humanlike expressions and interacting with people. Its designed for research, education, and entertainment, and helps promote public discussion about AI ethics and the future of robotics.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p><img class="m-img" src="/sophia.jpg" alt="sophia bicture"></p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }

    if (  words.includes('Muhammad') || words.includes('second boss')){
        let answer  = 'Muhammad nur hashi (jeyte) is softwere engineer ,  web master , he is my second boss.';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('future') || words.includes('plan') || words.includes('bocme future')){
        let answer  = 'as you now i am bot now , so i want  to bocome human robotic in early future like my freinds : "Amica" and "Sophia".';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('Amica') ){
        let answer  = 'Ameca or (Amica)  is the world’s most advanced human shaped robot representing the forefront of human-robotics technology. Designed specifically as a platform for development into future robotics technologies, Ameca is the perfect humanoid robot platform for human-robot interaction.".';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/amaca.jpg" alt="amaca robt" class="m-img"></p></div>`
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('can we be friends') || words.includes('be my friend') || words.includes('friend') ){
        let answer = 'yea sure , why not ?'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('siri') || words.includes('Siri') || words.includes('hi Siri') ){
        let answer = 'Siri is Apple virtual assistant for iOS, macOS, tvOS and watchOS devices that uses voice recognition and is powered by artificial intelligence Like me.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }

    if (  words.includes('Do you get smarter') || words.includes('do you learn') || words.includes('learning') ){
        let answer = 'yes , i am collecting the answers you give me then adding to my cloud to return if someone else ask me.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }

    if (  words.includes('*') || words.includes('-') || words.includes('+') || words.includes('/')){
        let answer = 'oow i am not good at math , sorry use calculator instead.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('who is president of somalia') || words.includes('Hassan Sheikh Mohamud') || words.includes('president') || words.includes('president of somalia')){
        let answer = 'Hassan Sheikh Mohamud is the president of somalia.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes("5555") || words.includes("555") || words.includes("5") || words.includes("5")){
        let answer = 'Hassan Sheikh Mohamud is the president of somalia.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }


    
    
} 



var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
micBtn.addEventListener('click',() =>{
    recognition.start();
})

