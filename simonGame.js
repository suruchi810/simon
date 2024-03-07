let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random()*3)
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameSeq.push(randcol)
    console.log(gameSeq)
    // console.log(randbtn);
    // console.log(randcol);
    // console.log(randidx);
    btnFlash(randbtn);
}
function btnPress(){
    console.log(this)
    let btn = this;
    btnFlash(btn);
    userCol = btn.getAttribute("id")
    console.log(userCol);
    userSeq.push(userCol);
    checkAns();
}
function checkAns(){
    // console.log(`current leve ${level}`)
    let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over!Your score was ${level}. Press any key to start.`;
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress )
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

