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

function getRandomAnswers(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
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
    if (words.includes('hello') || words.includes('hi') || words.includes('hey') || words.includes("what's up")){
        
        let answers = ['yes my freind how do i help you ?','Hello there , how are you ?','How i can help you sir?']

        let answer  = getRandomAnswers(answers)
        
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😊</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
        computerSpeech(answer)
    }
    if (words.includes('what is your name ') || words.includes('your name')){
        let answers = ['You can call me levi','my name is Levi','call me levi',"i'm levi"]
        let answer  = getRandomAnswers(answers)
        
        computerSpeech(answer)
        computerSpeech(getRandomAnswers(["what is your's",'whats your name','and you']))
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

    }
    if (words.includes('are you a robot') || words.includes('about yourself') || words.includes('who created you')|| words.includes('who are you')|| words.includes('what are you')){
        let answers = ["Hello , my name is levi , i'm little  bot , i designed to work as assistant like Siri and alaxa.","i'm levi , the latest version v 1.3 of zack bots i made up to help humans like you and my father zack to create better life","What you think ?"]
        let answer  = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('Levi') || words.includes('wake up')){
        let answers = ["Are you one of my developers ?","What i can do for you there is not external data today i intracted one person with five second ?" ,"Are you abdul-razak ?"]
        let answer  = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('yes I am') || words.includes('i am your father') || words.includes('your father')){
        let answers = ["I miss you where you go ?","Long time no see how my development going on ?" ,"Hello my father , how are you ?"]
        let answer  = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('coding') || words.includes('working on you') || words.includes('developing you')){
        let answers = ["Thank you to help me understand how intract with humans sounds like fun.","wow , so i am getting smarter and smarter" ,"You doing Good job Zack"]
        let answer  = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('are you good') || words.includes('how are you') || words.includes('how are you doing')|| words.includes('are you fine')|| words.includes('are you good')|| words.includes('how you doing') || words.includes('are you ok')){
        let answers = ['I am on Cloud Nine!','i am good','I Feel Great!','I’m Great!',"pretty awesome","i'm feeeling fantastic!"]
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech(getRandomAnswers(['what about you','and you','How are you']))

    }
    if (words.includes('zack')  || words.includes('do you know Zack')|| words.includes('Who made you')|| words.includes('Zack')|| words.includes('who is Zack') || words.includes('who developed you') || words.includes('who made you')){
        let answers = ['zack olso known as (abdul-razak abdullahi hussein) is a softwere engineer web master , founder of mine.','zack A founder (CEO) of finity animation and zack bots he is my father.','i am bot founded by Zack abdaullahi hussein','Abdull razak abdullahi hussein']
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/zack.jpg" alt="zack founder" class="m-img"></p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('f*** you')|| words.includes('pussy') || words.includes('f***') || words.includes('b***')){
        let answers = ['shame on you','why are you saying inappropriate things like','what bad person you are ?']
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😠😠😠</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if ( words.includes('where are you from')|| words.includes('your country') || words.includes('where you came from') || words.includes('nationality') || words.includes('come from') || words.includes('from') || words.includes('stay')){
        
        let answers = ['From mars ,  just kidding',"i'm from somalia ","from jupyter","i live in somalia"]
        
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech('and you ,  where you calling from')

    }
    if ( words.includes('i am all right')|| words.includes('i am doing great') || words.includes('fine') || words.includes('pretty') || words.includes("i'm good") || words.includes("i am good") ){
        let answers = ['Stay safe','all right','glad to hear that','good']
        let answer  = getRandomAnswers(answers);

        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('love')|| words.includes('hate') || words.includes('angry') || words.includes('happy') || words.includes('emotions') || words.includes('sad') || words.includes('feelings')){
        let answers = ['i donn have feelings, Humans have emotions such as happiness, sadness, fear, and anger; and maybe other animals have them too. Robots are getting increasingly smarter. , so i hope one day to have emotions as you.',"that's greate question , as you know robots they don't have feeling if i can get emotions it could great expreince ","No , why you asking such questions like that ?"]
        let answer  = getRandomAnswers(answers);
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if ( words.includes('drink')|| words.includes('food') || words.includes('eat') || words.includes('hungry') || words.includes('water') ){
        
        let answers = ['No',"i can't do that!","i don't  drink and eat , so don't ask about food!"]
        
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😀😀</p></div>`
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
    if (  words.includes('appreciate') || words.includes('thanks') || words.includes('thank you') ){
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
    if (  words.includes('amazing') || words.includes('you are good') || words.includes('you are very nice') || words.includes('wow')){
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
    if (  words.includes("you are welcome") || words.includes("you're welcome")){
        let answer = 'Hmmm.'

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

