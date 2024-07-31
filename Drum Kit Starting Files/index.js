var a = document.querySelectorAll("button");
var audio = new Audio("./sounds/crash.mp3");
for(var i = 0;i < a.length;i++){
        a[i].addEventListener("click",function(){
        var buttoninnerHtml = this.innerHTML;
    makeSound(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);
});
}
for(var i = 0;i < a.length;i++){
        a[i].addEventListener("keypress",function(event){
                makeSound(event.key);
                buttonAnimation(event.key);
        });
}
function makeSound(event){
        switch (event) {
                case "w":
                audio = new Audio("sounds/crash.mp3");
        audio.play();
                break;
                case "a":
                audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
                break;
                case "s":
                audio = new Audio("sounds/snare.mp3");
        audio.play();
                break;
                case "d":
                audio = new Audio("sounds/tom-1.mp3");
        audio.play();
                break;
                case "j":
                audio = new Audio("sounds/tom-2.mp3");
        audio.play();
                break;
                case "k":
                audio = new Audio("sounds/tom-3.mp3");
        audio.play();
                break;
                case "l":
                audio = new Audio("sounds/tom-4.mp3");
        audio.play();
                break;
                case "m":
                audio = new Audio("./sounds/crash.mp3");
        audio.play();
                break;
        
        }
}

function buttonAnimation(currentKey){

        var activeButton = document.querySelector("."+ currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
                activeButton.classList.remove("pressed");
        },100);
        
}