function myFunction() {
    alert("Hello! I just want to let u know na I'm so lucky to have u. U made my yr so special even tho 3 months palang tayo nagkakilala. U brought colors to my dull life. U make me happy everyday. U make me at peace lalo na when we're together. I want to spend my life with you and I know na you'll make it happen, so thank you. I appreciate everything you did to me. Sobrang bait mo, u deserve all the things u got this year (kasama ako sympre hehe). I know na I have many shortcomings sayo and sa ating relationship and I'm sorry if nahu-hurt kita dahil don. Please tell me anything that hurt u. I'll be better the next days ahead. Pls know na u and ur thoughts are valid even if u think na small lang, share it with me ha. Would love to hear your thoughts so that I can adjust. I love you so much, bb. You don't know how thankful I am to have u. Promise me na u won't leave me kasi di kita papayagan hehe. U deserve all the happiness and love that u received. Know that I will always love you no matter what happen (bukod sa cheating). Happy new year! You are my greatest gift of my 2022. Hoping na u'll always be for the next years. I love you so much bading hihi <3");
}

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}

var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click', ()=>{

    play.classList.toggle('active')

    if(play.paused){
        play.play();
    }else{
        play.pause();
        play.currentTime = 0;
    }
}));
