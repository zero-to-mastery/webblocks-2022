"use strict";

var box = document.getElementById("click");
var click_count = document.getElementById("count");
var count = 0;
box.addEventListener('click', function(){
    count++;
    click_count.innerText = count;
});