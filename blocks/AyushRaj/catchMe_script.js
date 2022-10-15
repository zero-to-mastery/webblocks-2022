var box = document.getElementById('box');

function getNewPosition(boxHeight, boxWidth){
    var x = Math.floor(Math.random() * window.innerWidth) - boxWidth;
    var y = Math.floor(Math.random() * window.innerHeight) - boxHeight;

    if(x < 0){
        x = 0;
    }
    if(y < 0){
        y = 0;
    }
    return {x, y};
}

function catchMe(){
    var boxCoordinates = box.getBoundingClientRect();

    var boxAttributes = getNewPosition(boxCoordinates.height, boxCoordinates.width);
    // console.log(boxAttributes.x + 'px');
    box.style.top = boxAttributes.y + 'px';
    box.style.left = boxAttributes.x + 'px';
}
box.addEventListener('mouseover', function(){
    catchMe();
});