playBack = () => {
    location.reload();
}

play = () => {
    let x;
    let confirm =  document.getElementById("mainResult").innerHTML;
    
    if(confirm == "You lose!"){
        alert("You lose !, Restart the game");
        document.getElementById("btn-restart").style.display = "block";
    }else{
        
        do{
        x = Math.floor((Math.random() *100 /7.6 )+1)
       }while(x == 0)
    
       let currentTotal = document.getElementById("result").innerHTML;
       let total = parseInt(currentTotal) + x;
    
        document.getElementById("result").innerHTML = total;
    
        if(total < 21){
            let currentTotal = document.getElementById("mainResult").innerHTML = "Do you want to generate another card?";
        }else if(total == 21){
            let currentTotal = document.getElementById("mainResult").innerHTML = "You win!";
            document.getElementById("btn-generateCard").style.display = "none";
            alert("You win!");
            document.getElementById("btn-restart").style.display = "block";
        }else if(total > 21){
            let currentTotal = document.getElementById("mainResult").innerHTML = "You lose!";
            alert("You lose!, Click on the restart button to play again!");
            document.getElementById("btn-restart").style.display = "block";
        }
    
        var img = document.createElement("img")
        img.src = "images/" + x + ".png"
        img.height = "290"
        document.body.appendChild(img)
    }
};

