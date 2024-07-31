var diceNum = Math.floor(Math.random()*6 + 1);
document.querySelector(".img1").setAttribute("src","./images/dice"+diceNum+".png");
var diceNum2 = Math.floor(Math.random()*6 + 1);
document.querySelector(".img2").setAttribute("src","./images/dice"+diceNum2+".png");
if(diceNum>diceNum2){
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(diceNum<diceNum2){
document.querySelector("h1").innerHTML = "Player 2 Wins 🚩 ";
}
else{
    document.querySelector("h1").innerHTML = "It's A Tie";
}
