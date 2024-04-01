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

function playGame(){
    let pScore=0;
    let cScore=0;
    let result = 0;

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
    return result;
}