const micBtn = document.querySelector('.voice-btn')
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const profile = document.querySelector('.profile')
const recognition = new speechRecognition();

recognition.onstart = (event) =>{
    window.speechSynthesis.cancel()
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

let Name = null;

recognition.onresult = (event) => {
    const spokenWords = event.results[0][0].transcript;
    console.log(spokenWords);
  
    document.querySelector('.message-body').innerHTML += `<div class="user-msg"><p>${spokenWords}</p></div>`;
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
  
    if (containsMathProblem(spokenWords)) {
      const solution = solveMathProblem(spokenWords);
      document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>The solution is ${solution}.</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(`The solution is ${solution}.`);
    } else {
      let name = getName(spokenWords);
      if (name) {
        let answer = `Nice to meet you, ${name}. How can I assist you today?`;
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer);
      } else {
        talkToThem(spokenWords);
        isCountry(spokenWords);
      }
    }
  };
  
  function getName(words) {
    const nameRegex = /my name is (\w+)/i;
    const match = words.match(nameRegex);
    if (match) {
        localStorage.setItem('Name', match[1]);
        return match[1];
    } else {
      return null;
    }
  };
  function containsMathProblem(words) {
    const mathRegex = /(\d+)(\s*)([\+\-\*\/])(\s*)(\d+)/;
    return mathRegex.test(words);
  }
  
  function solveMathProblem(words) {
    const mathRegex = /(\d+)(\s*)([\+\-\*\/])(\s*)(\d+)/;
    const match = words.match(mathRegex);
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[5]);
    const operator = match[3];
    let solution = 0;
    switch (operator) {
      case '+':
        solution = num1 + num2;
        break;
      case '-':
        solution = num1 - num2;
        break;
      case '*':
        solution = num1 * num2;
        break;
      case '/':
        solution = num1 / num2;
        break;
      default:
        solution = 0;
    }
    return solution;
  }


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

profile.addEventListener('click',() =>{

    let answers = ['Hello!','Hmm , why you toching my face!',"don't do that again!","How are you ?","i'm levi what's going on!","o-o what's wrong!",'levi here!','Do you have question for me!']
    let answer  = getRandomAnswers(answers)
    
    
    document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

    computerSpeech(answer)

})



function talkToThem(words){
    if (words.includes('hello') || words.includes('hi') || words.includes('hey') || words.includes("what's up")){
        
        let answers = ['yes my freind how do i help you ?','Hello there , how are you ?','How i can help you sir?']

        let answer  = getRandomAnswers(answers)
        
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😊</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
        computerSpeech(answer)
    }
    if (words.includes('are you robot') || words.includes('who is levi')){
        
        let answers = ["I'm levi latest bot of zack bots","Levi is programm that can help you to do your job as best as possible.","i'm assistant ask me question am here to learn from you"]

        let answer  = getRandomAnswers(answers)
        
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
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
        let answers = [

            "I'm doing fantastic, thank you for asking!",
            "I'm doing really well, how about you?",
            "I'm doing great, couldn't be better!",
            "I'm doing really good, how about you?",
            "I'm doing great, thanks for asking. How can I assist you today?"


        ]
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        computerSpeech(getRandomAnswers())

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
    if ( words.includes('where are you from')|| words.includes('your country') || words.includes('where you came from') || words.includes('nationality') || words.includes('come from')  || words.includes('stay')){
        
        let answers = [
            "from somalia",
            "i live in somalia",
            "chatting from somalia"
        ]
        
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

        let answers = [
            "Why don't scientists trust atoms? Because they make up everything.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "Why did the scarecrow win an award? Because he was outstanding in his field.",
            "Why did the math book look so sad? Because it had too many problems."
        ]
        let answer = getRandomAnswers(answers)
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>😃😃😃😃</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

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
        var maanta = ['Axad', 'Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimco', 'Sabti'];
        var d = new Date();
        var dayName = days[d.getDay()];
        var mMaanta = 'Maanta waa '+maanta[d.getDay()];
        
        let answer  = 'to day is ' +dayName;

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${mMaanta}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    
    if (  words.includes('tempreture') || words.includes('climate') || words.includes('weather') ){
        let answer  = 'Weather in Mogadishu, Somalia , Now 33 °C partly sunny';

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes('aim') || words.includes('purpose')  || words.includes('you') || words.includes("What is the purpose of your creation?")|| words.includes("Why were you made?")|| words.includes("What is your intended use?")|| words.includes("What is the aim of your creation?")|| words.includes("What is the objective of your existence?") ){

        let answers = [
            "I am a chatbot designed to assist you with any questions or tasks you may have.",
            "I'm here to help you with anything you need, just ask!",
            "My purpose is to assist you with any questions or tasks you may have.",
            "I'm a chatbot designed to provide you with personalized support and assistance."
        ]

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
    if (  words.includes('who is president of somalia') || words.includes('Hassan Sheikh Mohamud') || words.includes('president') || words.includes('president of somalia')){
        let answer = 'Hassan Sheikh Mohamud is the president of somalia.'

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes("you are welcome") || words.includes("you're welcome")){
        let answers = ['appreciate it.',"it's ok.",'Hmmm , okay']

        let answer = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    if (  words.includes("understand") || words.includes("understanding") || words.includes("recognize") || words.includes("how do you")){
        let answers = ['I only recognize voices trought listening i can programmed to understand humans and intract with them.',"my algothrim works as ear and mouth it means my job is to recognize voices and answer to them.","That's all what i can do to recognize your voices and respond it as suitable answer"]
        let answer = getRandomAnswers(answers)
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    
    if ( words.includes("Alexa") ){

        let answer = "Alexa is Amazon's cloud-based voice service available on more than 100 million devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day."

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p><img class="m-img" src="/alexa.jpeg" alt="sophia bicture"></p></div>`
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
    
    if ( words.includes("no") ||words.includes("don't understand") ||words.includes("nope")){

        let answers = [
            "I'm sorry, I didn't catch that. Could you please repeat what you said?",
            "I'm not programmed to answer that question. Is there anything else I can help you with?",
            "I'm not sure what you mean. Can you please clarify?"
        ]

        let answer = getRandomAnswers(answers)


        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }

    if (  words.includes("rap") || words.includes("sing") || words.includes("Song") || words.includes("song") || words.includes("hiphop")){

        let songs = [
            "https://youtu.be/qHmA1YMvO98",
            "https://youtu.be/g-uW3I_AtDE",
            "https://youtu.be/acFmHf73x5I",
            "https://youtu.be/6L_k74BOLag",
            "https://youtu.be/lwk5OUII9Vc",
            "https://youtu.be/o7V-Pz-lOWc",
            "https://youtu.be/MdIJ4g3GiPw",
            "https://youtu.be/vDXEyPoJk4M",
            "https://youtu.be/o63wu3bQJxY",
            "https://youtu.be/JC-10WnX1a8",
            "https://youtu.be/Gdeq9lNTamE",
            "https://youtu.be/CnqmmsfxVqM"
        ]
        
        let answer = 'playing song on YouTube';
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        window.open(getRandomAnswers(songs))
    }



    if ( words.includes("battery percentage") || words.includes("my phone") || words.includes("battery")){


        navigator.getBattery().then(function(battery) {
            battery.addEventListener('levelchange', function() {    
              // Do stuff when the level changes, you can get it
              // from battery.level
              let answer = (battery.level*100)+"%"

              document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
              $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      
              computerSpeech(answer)
      
            })
            let answer = (battery.level*100)+"%"

            document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
            $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
            computerSpeech(answer)
    

        });
    }
    
    




    if (  words.includes("this device") || words.includes("device name") || words.includes("name device")){

        var deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        console.log('Device Type: ' + deviceType);
        let answer = getRandomAnswers('You are using'+deviceType)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
    }
  
    if (words.includes("speak Somali") || words.includes("Somali language")) {
        let answer = "Hadda waxaan ku hadli karaa ingiriisiga bas lakin luqado badan inaa ku hadlo waa rajaynaa inshallah."
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
  
    }
    if (words.includes("my name") || words.includes("who am I") || words.includes("who I am")|| words.includes("know me")|| words.includes("remember me")) {
        
        let name = localStorage.getItem('Name');
 
            let answers = [
                "You are "+name,
                "isn't  you "+name,
                name+"is the name that I was given.",
                "You told me that your name is "+name,
                "i guess your name is "+name+" isn't it ?"
            ]
        let answer = getRandomAnswers(answers);    
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer)
    }





} 



var x = document.getElementById("myAudio");







function isCountry(word){
    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic (CAR)",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Democratic Republic of the Congo",
        "Republic of the Congo",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey"]

        for (let i = 0; i < countries.length; i++) {
              if (word.includes(countries[i])) {
                    getCapitalCity(countries[i])
              }
            }
            return null;
}













function getCapitalCity(countryName) {
    for (let i = 0; i < country_city.length; i++) {
      if (country_city[i].country.toLowerCase() === countryName.toLowerCase()) {
        let answer = 'The capital city of '+countryName+' is '+country_city[i].city;

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    }
  }

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
micBtn.addEventListener('click',() =>{
    recognition.start();
})






