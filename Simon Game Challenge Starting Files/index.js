buttonColors = ["green","red","yellow","blue"];
gamePattern = [];
userClickedPattern = [];
function newSequence(){
    var a = Math.floor(Math.random()*4);
var randomChosenColour = buttonColors[a];
animateColour(randomChosenColour);
gamePattern.push(randomChosenColour);
playAudio(randomChosenColour);
level++;
$("h1").text("Level "+ level);

}
function playAudio(event){
    var audio = new Audio("./sounds/red.mp3")
switch (event) {
    case "green":
        audio = new Audio("./sounds/green.mp3");
        audio.play();
        break;
        case "red":
        audio = new Audio("./sounds/red.mp3");
        audio.play();
        break;
        case "yellow":
        audio = new Audio("./sounds/yellow.mp3");
        audio.play();
        break;
        case "blue":
        audio = new Audio("./sounds/blue.mp3");
        audio.play();
        break;
        case "wrong":
            audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            break;

    default:
        break;
}
}
function animateColour(name){
$("#"+name).fadeOut(100).fadeIn(100);
$("#"+name).addClass("pressed");
setTimeout(() => {
    $("#"+name).removeClass("pressed")
}, 1);

}
$(".btn").click(function(){
   var userChosenColour = this.id;
   playAudio(userChosenColour);
   userClickedPattern.push(userChosenColour);
   console.log(userClickedPattern);
   
console.log(gamePattern);
   animateColour(userChosenColour);
})
var level = 0;
$(document).keypress(function(){
    $("h1").text("Level 0");
    newSequence();
})
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
     if (userClickedPattern.length === gamePattern.length){

         //5. Call nextSequence() after a 1000 millisecond delay.
         for(var i =0 ; i<currentLevel;i++){
         if (gamePattern[i] !== userClickedPattern[i]) {

            console.log("wrong");
            return false;
         }
            
         
         

     }
     return true;

    } 

}
function Restart(){
    gamePattern= [];
    userClickedPattern = [];
    $("h1").text("Press A Key To Start");
    level = 0;

}
$(".btn").click(function(){

    if(checkAnswer(level)){
        userClickedPattern = [];
        setTimeout(() => {
            newSequence();
        }, 1000);
      
    
     } 
     else if(checkAnswer(level) === false){
        $("body").addClass("game-over");
        playAudio("wrong");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        Restart();
     }
})
 


// function checkAnswer(currentLevel){
//     if(userClickedPattern(0,currentLevel) === gamePattern){
//         console.log("success");
//         return true;
//     }
//     else {
//         console.log("failure");
//         return false;
//     }

// }
