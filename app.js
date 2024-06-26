const micBtn = document.querySelector('.voice-btn')
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition();


const audio = new Audio('kulmis.mp3');
const hor = new Audio('hordhac.mp3');




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


}

recognition.onerror = (event) => {
    let errorMessage = '';
    switch (event.error) {
      case 'no-speech':
        errorMessage = 'No speech detected. Please try again.';
        break;
      case 'audio-capture':
        errorMessage = 'Error capturing audio. Please check your microphone and try again.';
        break;
      case 'not-allowed':
        errorMessage = 'Microphone access denied. Please grant permission to use your microphone.';
        break;
      default:
        errorMessage = 'An error occurred. Please try again.';
        break;
    }

    document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${errorMessage}</p></div>`;
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    computerSpeech(errorMessage);

  };
  

function getRandomAnswers(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

let Name = null;

let brain = []

recognition.onresult = (event) => {
    const spokenWords = event.results[0][0].transcript;
    console.log(spokenWords);

    if (spokenWords.trim().length === 0) {
      console.log('No words recognized. Please try again.');
      recognition.start();
    } 
    document.querySelector('.message-body').innerHTML += `<div class="user-msg"><p>${spokenWords}</p></div>`;
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
  
    if (containsMathProblem(spokenWords)) {
      const solution = solveMathProblem(spokenWords);
      document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>The solution is ${solution}.</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(`The solution is ${solution}.`);
    } else if (spokenWords.toLowerCase().includes('repeat after me')) {
      repeatAfterMe(spokenWords);
    } else {
      let name = getName(spokenWords);
      if (name) {
        let answer = `Nice to meet you, ${name}. How can I assist you today?`;
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer);
      }
      else if (spokenWords.includes('who is')){
        getCelebrity(spokenWords)
      }
      
      else {
        rememberSomething(spokenWords)
        talkToThem(spokenWords);
        isCountry(spokenWords);
        forgetSomething(spokenWords)
        generateImage(spokenWords)
        getDictionary(spokenWords)
        noSpoken(spokenWords)

    }
    }
  };


  
  function rememberSomething(spokenWords) {
    const regex = /remember (.*)/i;
    const match = spokenWords.match(regex);
    if (match) {
      const thingToRemember = match[1];
      brain.push(thingToRemember);
      const answer = `Okay, I will remember ${thingToRemember}.`;
      document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(answer);
    }
  }




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
  speech.lang = 'eng-gb';
  speech.pitch = 1;
  speech.volume = 2;
  speech.text = words;
  speech.rate =1;
  speech.voice = speechSynthesis.getVoices().find((voice) => voice.name.includes('Amy'));
  window.speechSynthesis.speak(speech)

    // start speech recognition when speech ends
    speech.onend = () => {
        recognition.start();
    }
}


function talkToThem(words){
    if (words.includes('hello') || words.includes('hi') || words.includes('hey') || words.includes("what's up")){
        
        let answers = ["olá , that's hello in portuguese. How i can help ?",'Hello there , how are you ?','How i can help you sir?','what i can help you with ?']

        let answer  = getRandomAnswers(answers)
        // let answer = "iska waran , that's hello in Somali. How i can help ?"
        
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😊</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
        computerSpeech(answer)
    }
    if (words.includes("i am good") || words.includes("i am fine")) {
      let answers = ["That's great to hear! How can I assist you today?", "I'm happy to hear that! What can I do for you today?", "I'm glad to hear that! How can I help you today?"];
      let answer = getRandomAnswers(answers);
      document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}😊</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(answer);
  }
    if (words.includes('are you robot') || words.includes('who is levi')){
        
        let answers = ["I'm levi latest bot of zack bots","Levi is programm that can help you to do your job as best as possible.","i'm assistant ask me question am here to learn from you"]

        let answer  = getRandomAnswers(answers)
        
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
        computerSpeech(answer)
    }
    if (words.includes('what is your name ') || words.includes('your name')){
        let answers = ["You can call me Levi , what is your's ?",'my name is Levi , whats your name ?','call me Levi  , what about you ?',"i'm Levi , and you ?"]
        let answer  = getRandomAnswers(answers)
        
        computerSpeech(answer)
        
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    }
    if (words.includes('are you a robot') || words.includes('about yourself') || words.includes('who created you')|| words.includes('who are you')|| words.includes('what are you')){
        let answers = ["Hello, I am Levi, a small but powerful bot designed to work as a personal assistant, similar to Siri and Alexa. My main purpose is to assist you in any way I can, whether it's answering questions, providing information, or helping you with tasks.","Hello, my name is Levi and I am the latest version (v 1.3) of Zack Bot. I am designed to assist people and I specialize in geography. You can ask me about the capital cities of different countries."]
        let answer  = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
    if (words.includes('Levi') || words.includes('wake up')){
        let name = localStorage.getItem('Name');
        let answers = [
            "Open the camera",
            "Allow me to use you camera to see you",
            "is that you "+name,
            "First time i see the face "+name,
            "I need permission to use your camera to recognize your face.",
            "Your sound's familiar to me can i see you "+name
        ]

        let answer  = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)
        detectFace();
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

    }
    if (words.includes('zack')  || words.includes('do you know Zack')|| words.includes('Who made you')|| words.includes('Zack')|| words.includes('who is Zack') || words.includes('who developed you') || words.includes('who made you')){
        let answers = ["Abdul-razak Abdullahi Hussein is the mastermind behind my creation as a bot.","I am a bot designed and developed by Abdul-razak Abdullahi Hussein.",'i am bot founded by Abdul-razak abdaullahi hussein','Abdull razak abdullahi hussein']
        let answer  = getRandomAnswers(answers);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/zack.jpg" alt="zack founder" class="m-img"></p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
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
    if ( words.includes('i am all right')|| words.includes('i am doing great') || words.includes('i am fine') || words.includes("i'm good") || words.includes("i am  good") || words.includes("i'm fine") ){
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
        let answers = [
            "I practice the Islamic faith, alhamdulillah.",
            "i am muslim alhamdulilah",
            "I am blessed to be a Muslim, alhamdulillah.",
        ]
        let answer  =getRandomAnswers(answers) ;

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
        let answer  = 'Sure, go ahead and ask me anything you like';

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
        let answers = [
            'yeah , i can hear you , rise up your voice lit a bit to hear you clearly.',
            "Can you speak up a little? I'm having trouble hearing you.",
            "Sorry, could you repeat that a bit louder?",
            "I'm having difficulty hearing you. Could you raise your voice a bit?",
            "Speak up! I can't hear you clearly.",
            "Could you please speak a bit louder? It's hard to hear you."
        ]
        let answer  = getRandomAnswers(answers);

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
        let answer  = "Muhammad nur hashi (jeyte) is softwere engineer , and zack's best freind ever  , he is my second boss.";
        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/moha.jpeg" alt="amaca robt" class="m-img"></p></div>`
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
    
    
    
    // if ( words.includes("where we are now") ||words.includes("event") ||words.includes("now")){

        

    //     let answer = "Hadda waxaan joognaa madasha kulmis tas oo mid lagu dhiragelinayo ardayda ina y waxbarashada kudadaalaan waan salaamayaa marti sharafta iyo ardaya ku sugan halkan dhammaan"


    //     document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
    //     $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

    //    audio.play();
    // }
    
//     if ( words.includes("no") ||words.includes("don't understand") ||words.includes("nope")){

//         let answers = [
//             "I'm sorry, I didn't catch that. Could you please repeat what you said?",
//             "I'm not programmed to answer that question. Is there anything else I can help you with?",
//             "I'm not sure what you mean. Can you please clarify?"
//         ]

//         let answer = getRandomAnswers(answers)


//         document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
//         $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

//         computerSpeech(answer)
//     }
    

    if (  words.includes("rap") || words.includes("sing") || words.includes("Song") || words.includes("song") || words.includes("hiphop")){

        let songs = [
            "https://youtu.be/I49KH6fmDkg",
            "https://youtu.be/b23IreSUW3s"
        ]
        
        let answer = 'playing song on youtube';
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
  
    if (words.includes("speak Somali") || words.includes("Somali language") || words.includes("Somali")) {
        // let answer = "Iska warama , magacaygu waa xaliimo waxaan ahay caqli gacan kusamees , waxaa i prograamiyey injineer cabdirisaaq cabdullahi xuseen"
        let answer = "I can't speak somali language but i hope to speak it."
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    // hor.play();
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
    if (words.includes("what is in your mind") || words.includes("what you remember") || words.includes("list")|| words.includes("give the data")|| words.includes("remember me")) {
        tellMeWhatYouRemember()
    }
    if (words.includes("sleep")  ) {
        let name = localStorage.getItem('Name');
        reverseDetectFace();
        let answers = [
            "Going to sleep",
            "See you later "+name
        ]
        let answer = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }

    if (words.includes("why")) {
        

          let answers = [
            "i don't know what you mean ?",
            "What was that"
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





function tellMeWhatYouRemember() {
    if (brain.length > 0) {
      const answer = `I remember the following things: ${brain.join(", ")}.`;
      document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(answer);
    } else {
      const answer = "I don't remember anything yet.";
      document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(answer);
    }
  }

  function forgetSomething(spokenWords) {
    const regex = /forget (.*)/i;
    const match = spokenWords.match(regex);
    if (match) {
      const thingToForget = match[1];
      const index = brain.includes(thingToForget);
      if (index) {
        brain.splice(index, 1);
        const answer = `Okay, I forgot ${thingToForget}.`;
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer);
      } else {
        const answer = `I don't remember ${thingToForget}.`;
        document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer);
      }
    }
  } 

  function repeatAfterMe(spokenWords) {
    const repeatPhrase = spokenWords.toLowerCase().replace('repeat after me', '');
    document.querySelector('.message-body').innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${repeatPhrase}</p></div>`;
    $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    computerSpeech(repeatPhrase);
  }




  function generateImage(words) {
    if (words.toLowerCase().includes('imagine')) {
      const query = words.toLowerCase().replace('show me', '').trim();
      fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=tEzsN8kmglMgxzoaLhocczzt9Zpz7mYZt8ebtCOvDFg`)
      .then(response => response.json())
      .then(data => {
        // Get a random image from the search results
        const image = data.results[Math.floor(Math.random() * data.results.length)];
  
        // Create an image element and set its source to the selected image
        const img = document.createElement('img');
        img.src = image.urls.regular;
  
        // Create a bot message element with the image
        const botMsg = document.createElement('div');
        botMsg.classList.add('bot-msg');
        botMsg.innerHTML = `<span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p><img class="m-img" src="${img.src}" alt="image"></p>`;
        document.querySelector('.message-body').appendChild(botMsg);
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        recognition.start();

    })
      .catch(error => console.error(error));
    }
  }


function noSpoken(spokenWords){
    if (spokenWords.length == 0){

        let answers = [
            ' what was that?',
            "Can you please clarify what you meant?",
            "Could you  say that again?",
            "Can you say that again?"
        ]
        let answer = getRandomAnswers(answers)

        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        computerSpeech(answer)

    }
}





///
// $.ajax({
//   method: 'GET',
//   url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
//   headers: { 'X-Api-Key': 'illML6cZ3q677VHSpCeUnA==QAv56pdQLABaZiUs'},
//   contentType: 'application/json',
//   success: function(result) {
//     const noListRegex = /^\d+\.\s+/gm;
//     let joogsi =  /2\..*/s;
//     let answer = result.definition.split('\n')[0].replace(noListRegex, '').replace(joogsi, '');

//     document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
//     $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

//     computerSpeech(answer)
//   },
//   error: function ajaxError(jqXHR) {
//     console.error('Error: ', jqXHR.responseText);
//   }
// });  





function getDictionary(words) {
  const nameRegex = /(?:meaning of|Define|what is | what means | Explain) (.+)/i;
  const match = words.match(nameRegex);
  const pageTitle = match[1].trim();
  console.log(pageTitle,match,nameRegex)

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`)
    .then(response => response.json())
    .then(data => {
      const title = data.title;
      const result = data.extract;
      const messageBody = document.querySelector('.message-body');

      messageBody.innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${result}</p></div>`;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(result);
    })
    .catch(error => {
      console.error(error);
    });

}



  let mediaStream = null;

  function detectFace(){
      document.querySelector('.profile img').style.display = 'none';
      let scVideo = document.querySelector('.profile .video')
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
          navigator.mediaDevices.getUserMedia({video:true, sound:true}).then(stream =>{
              mediaStream = stream;
              scVideo.srcObject = stream;
              scVideo.play();
          })
      }
  }
  



  function getCelebrity(celebrityName) {
    const nameRegex = /(?:who is | what is)(.+)/i;
    const match = celebrityName.match(nameRegex);
    const pageTitle = match[1].trim();
    console.log(pageTitle,match,nameRegex)
  
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const title = data.title;
        const result = data.extract;
        const messageBody = document.querySelector('.message-body');


        document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p><img class="m-img" src="${data.originalimage.source}" alt="sophia bicture"></p></div>`  
        messageBody.innerHTML += `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${result}</p></div>`;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(result);
      })
      .catch(error => {
        console.error(error);
      });
  }

  micBtn.addEventListener('click',() =>{
    recognition.start();
})
