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
    if ( words.includes('where are you from')|| words.includes('your country') || words.includes('where you came from') || words.includes('nationality') || words.includes('come from') || words.includes('from') || words.includes('stay')){
        
        let answers = [


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
        
        let answers = ["i can't solve math problem.","i'm still learning how to solve math problems.","sorry! i couldn't found way of solution to this math problem in my algorithms"]

        let answer = getRandomAnswers(answers)

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




    let foundQuestion = false;
    for (let i = 0; i < questions.length; i++) {
      if (words.includes(questions[i])) {
        // If the question matches, select a random answer from an array of possible answers
        const answers = [
          "I'm sorry, I didn't catch that. Could you please repeat what you said?",
          "I'm not programmed to answer that question. Is there anything else I can help you with?",
          "I'm not sure what you mean. Can you please clarify?"
        ];
        const answer = getRandomAnswers(answers);
    
        // Display the answer in the chat window and speak it out loud
        const message = `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
        document.querySelector('.message-body').innerHTML += message;
        $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
        computerSpeech(answer);
    
        // Set a flag to indicate that a question was found and break out of the loop
        foundQuestion = true;
        break;
      }
    }
    
    // If no question was found, display a default message
    if (!foundQuestion) {
      const answer = "Sorry, I didn't understand your question. Could you please rephrase it or ask me something else?";
      const message = `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`;
      document.querySelector('.message-body').innerHTML += message;
      $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
      computerSpeech(answer);
    }
    



    













    // let que = [

    //     "3",
    //     "2",
    //     "11",

    // ]


    // que.forEach(question =>{
    //     if ( words.includes(question)){

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
    // })


// Define an array of questions to handle
let  questions = ["3", "2", "nop"];
// Loop through each question and check if it matches the user's i    
