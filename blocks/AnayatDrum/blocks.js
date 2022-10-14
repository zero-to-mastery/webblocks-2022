// Detecting Button Press

var NumberofDrum = document.querySelectorAll(".drum").length; // We find the length of Drum

for(var i = 0; i< NumberofDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});

// We using Switch Statement for playing Sound
function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
         break;

         case "a":
             var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
         break;

         case "s":
             var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
         break;
         case "d":
             var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
         break;

         case "j":
             var snare = new Audio('sounds/snare.mp3');
             snare.play();
         break;
         case "k":
             var crash = new Audio('sounds/crash.mp3');
             crash.play();
         break;

         case "l":
             var kickbass = new Audio('sounds/kick-bass.mp3');
             kickbass.play();
         break;
    
        default: console.log(buttonInnerHTML)
    }
}
// Animation of Button

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}