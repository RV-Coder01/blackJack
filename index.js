function getRandomNumber(){
    randomNum=Math.floor(Math.random()*13)+1;
    if (randomNum ===1){
        return 11;
    }else if (randomNum>=10){
        return 10;
    }
    return randomNum;
}
let card=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";

function startGame(){
    let firstCard=getRandomNumber();
    let secondCard=getRandomNumber();
    card=[firstCard,secondCard];
    sum=firstCard+secondCard;
    isAlive=true;
    document.getElementById("new-card").textContent="New Card";
    renderClick();
}
function renderClick(){
    document.getElementById("cards").textContent="Cards: "+card.join(", ");
    document.getElementById("result").textContent = "Sum: " + sum ;
    if (sum<21 && isAlive && !hasBlackJack){
        message="You are still in the game!!";
    }else if (sum === 21){
        hasBlackJack=true;
        message="Wohoo! You've got Blackjack!";
        document.getElementById("new-card").textContent="Disabled";
    }else{
        isAlive=false;
        message="You are out of the game!!";
        document.getElementById("message").textContent="You can't draw a new card!!";
        document.getElementById("new-card").textContent="Disabled";
    }
    document.getElementById("message").textContent=message;
}

function newCard(){
    if (isAlive && !hasBlackJack){
        let newCard=getRandomNumber();
        sum+=newCard;
        card.push(newCard);
        renderClick();
    }
}












//Calculator
// elem1=document.getElementById("num1");
// elem2=document.getElementById("num2");
// let count=0;
// res=document.getElementById("result");

// function add(){
//     count=parseInt(elem1.textContent) + parseInt(elem2.textContent);
//     res.textContent = "Your addition is: " + count;
// }

// function subtract(){
//     count=parseInt(elem1.textContent) - parseInt(elem2.textContent);
//     res.textContent = "Your subtraction is: " + count;
// }

// function multiply(){
//     count=parseInt(elem1.textContent) * parseInt(elem2.textContent);
//     res.textContent = "Your multiplication is: " + count;
// }

// function divide(){
//     count=parseInt(elem1.textContent) / parseInt(elem2.textContent);
//     res.textContent = "Your division is: " + count;
// }



















// let countElement = document.getElementById("h2-count");
// let count = 0;
// function increment(){
//     count+=1;
//     countElement.textContent = count;
// }
 
// function save(){ 
//     let prev=count + " - ";
//     document.getElementById("prev-display").textContent += prev;
//     countElement.textContent=0;
//     count=0;
// }

// function onClick(){
//     document.getElementById("error-msg").textContent = "Error in redering the next page";    
// }

// let nam="Rakshika";
// let greeting="Hi, my name is ";
// let myGreeting=greeting + nam + "!";
// let pElement=document.getElementById("p-welc");
// let nam="Rakshika";
// let greeting="Welcome to the party, ";
// let myGreeting=greeting + nam + "!";
// pElement.innerText=myGreeting;