var submitButton = document.getElementById('submit-button');

function resetTimer(currentNo, nextNo){
    for(var i=0; i<5; i++){
        currentNo[i].innerText = 0;
        nextNo[i].innerText = 1;
    }
}

function increaseCounter(currentNo, nextNo, index){
    var current = currentNo[index];
    var next = nextNo[index];

    if(current.innerText == 9){
        increaseCounter(currentNo, nextNo, index-1);
    }

    next.classList.add('animate');

    setTimeout(function(){
        current.innerText = next.innerText;
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;
        if(next.innerText > 9){
            next.innerText = 0;
        }
    },500);
}

function startCounter(){
    var number = document.getElementById('number').value;

    if(isNaN(parseInt(number))){
        alert('Please enter a number');
        return;
    }

    if(number < 1 || number > 99999){
        alert('Enter the number in range');
        return;
    }

    var currentNo = document.querySelectorAll('.timer');
    var nextNo = document.querySelectorAll('.timer1');

    resetTimer(currentNo, nextNo);

    var count = 0;

    var interval = setInterval(function(){
        if(count >= number){
            clearInterval(interval);
            alert('Timer has stopped');
            return;
        }
        count++;
        increaseCounter(currentNo, nextNo, 4);
    }, 1000);
}
submitButton.addEventListener('click', startCounter);