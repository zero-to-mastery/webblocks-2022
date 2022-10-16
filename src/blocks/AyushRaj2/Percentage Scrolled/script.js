var percent = document.getElementById('percent');

function getMaxHeight(){
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
}
var documentHeight = getMaxHeight();
var windowHeight = window.innerHeight;

window.onresize = function(){
    documentHeight = getMaxHeight();
    windowHeight = window.innerHeight;
}

function scrollPercentage(){
    var percentage = Math.floor(scrollY / (documentHeight - windowHeight) * 100);

    percent.innerText = percentage;
}

window.addEventListener('scroll', scrollPercentage);