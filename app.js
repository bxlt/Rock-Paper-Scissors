function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let outputs = ['Rock', 'Paper', 'Scissors'];
    return outputs[num];
}

function playRound(player, computer){
    let result = -1;
    if (player==='Rock'||player==='Paper'||player==='Scissors'){
        
        if(player===computer){
            result=0;
        }else if(player=='Rock'&&computer=='Scissors'||player=='Paper'&&computer=="Rock"||player=='Scissors'&&computer=="Paper"){
            result = 1;
        }
    } else{
        alert("User input must be:'Rock', 'Paper', 'Scissors'");
    }

    return result;
}
/*
function playGameConsole(){
    
    let pScore=0;
    let cScore=0;
    let result = 0;

     remove run 5 times 
    for(let i=0;i<5;i++){
        let user = prompt("It's your turn");
        let curr = playRound(user,getComputerChoice());
        if(curr==1){
            pScore++;
        } else if(curr == -1){
            cScore++;
        }
        console.log(`Current Round result is Player:${pScore} Computer:${cScore}`);
    }
    
    let dispay = "Tied Games"
    if(pScore>cScore){
        result = 1;
        dispay="Player won!";
    }else if(pScore<cScore){
        result = -1;
        dispay="Computere won!";
    }
    console.log(dispay);
    return dispay;
}
*/

function showResult(outcome){
    let result = document.querySelector('#value');
    result.innerText = outcome;
    console.log(outcome)

    if(outcome==1){
        pScore++;
        pSpan.innerText = pScore
    } else if(outcome == -1){
        console.log(-1)
        cScore++;
        cSpan.innerText = cScore

    }
    checkEnd();
}


let pScore=0;
let cScore=0;
let result = 0;
let pSpan = document.querySelector('#pScore');
let cSpan = document.querySelector('#cScore');
console.log(cSpan)
let finalWin = document.querySelector('#fin');

//Play rock
const rockBtn = document.querySelector('#R');
rockBtn.addEventListener('click',()=>{
    let curr = playRound('Rock',getComputerChoice());
    showResult(curr);
})

//Play paper
const paperBtn = document.querySelector('#P');
paperBtn.addEventListener('click',()=>{
    let curr = playRound('Paper',getComputerChoice());
    showResult(curr);
})

//Play scissors
const sciBtn = document.querySelector('#S');
sciBtn.addEventListener('click',()=>{
    let curr = playRound('Scissors',getComputerChoice());
    showResult(curr);
   
})


function updateRound(result){
    if(curr==1){
        pScore++;
        pSpan.innerText = pScore
    } else if(curr == -1){
        cScore++;
        cScore.innerText = cScore
    }
    
}

function checkEnd(){
    if(pScore==5){
        finalWin.innerText = 'You win';
        disableBtns()
    }else if(cScore===5){
        finalWin.innerText = 'Computer win';
        disableBtns()
    }
    

}

function disableBtns(){
    sciBtn.disabled = true;
    paperBtn.disabled=true;
    rockBtn.disabled =true;
}