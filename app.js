let gameSeq = [];
let userSeq = [];

let started = false;
let level  = 0;
let h2 = document.querySelector('h2');

let btns = ["red", "green", "purple", "yellow"];
let gamesPlayed = 0;
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;
        gamesPlayed++;
        levelUp();
    }
    
  
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Game ${gamesPlayed}: level ${level}`;
    
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length  === gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game over ! You played ${gamesPlayed} game! Your score was:<b>${level}</b> <br> please press any key to start !`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#242424";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor); 

    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll('.btn');
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}