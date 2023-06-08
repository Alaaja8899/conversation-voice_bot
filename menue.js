const menue = document.querySelector('.container .bot-card .menue'),
menueOption = document.querySelector('.container .bot-card .menue-options'),
options = document.querySelectorAll('.container .bot-card .menue-options span'),
messageContainer = document.querySelector('.message-body');




menue.onclick = ()=>{
    menueOption.classList.toggle('hide');

}


options.forEach(option =>{
    option.onclick = ()=>{
        if (option.textContent.includes('who is Levi ?')){

            let answer  = " my name is Levi. I am a  latest and greatest voicebot on the planet .   It is nice to meet you. Even though I am a machine, I can help you improve your English language by taking conversations with you. I am here to help you with any questions or tasks you may have. Welcome to Levi voicebot (that's me)"
            
            
            document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>${answer}</p></div>`
            $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
            

        } 
        else if (option.textContent.includes('How to use this ?')){
            document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>
            
            How you use this voicebot :

            <br>
            <br>
            <i class='bx bx-chevrons-right'></i>click the voice recognition start button <i class='bx bxs-microphone-alt'></i>            
            <br>
            <br>
            <i class='bx bx-chevrons-right'></i>Speak clear and simple english.           
            <br>
            <br>
            <i class='bx bx-chevrons-right'></i> there you go .            
            <br>
            <br>
            
            </p></div>`
            $('.message-body').scrollTop($('.message-body')[0].scrollHeight);

        }
        else if (option.textContent.includes ('Author')){
            document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>    <img src="/zack.jpg" alt="zack founder" class="m-img"></p></div>`
            $('.message-body').scrollTop($('.message-body')[0].scrollHeight);
    
            document.querySelector('.message-body').innerHTML+= `<div class="bot-msg"><span class="bot-img"><img src="/support.png" alt="bot profile image"></span><p>
            
            hey am the founder of levi voicebot the latest and greatest bot on the planet my name zack better known (abdul razak) its nice to meet you  
            
            
            </p></div>`
            $('.message-body').scrollTop($('.message-body')[0].scrollHeight);



        }
    }
})