
var name = prompt("What is your name?");
var num = prompt("What is your birthday date? e.g 15 ");
var month= prompt("What is your birthday month? write in 3 letters format like e.g Nov");

var year= new Date().getFullYear();
yearNext= year + 1;
var birthdayDate = month + " " + num + ", " + year + " 00:00:00";

var d1= new Date(birthdayDate).getTime();

var d3= new Date().getTime();
var countdown=d1-d3;
if(countdown<0){
    birthdayDate=month + " " + num + ", " + yearNext + " 00:00:00";
    d1= new Date(birthdayDate).getTime();
}

const x= setInterval(() => {
    var d2= new Date().getTime();
    var countdown= d1-d2;

    var seconds= Math.floor((countdown% (1000* 60))/ 1000)
    var minutes= Math.floor((countdown % (1000* 60 * 60))/(1000* 60))
    var hours= Math.floor((countdown % (1000* 60 *60 *24))/(1000* 60* 60));
    var days= Math.floor(countdown/ (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML= days + "d " + hours + "h " + minutes + "m " + seconds +"s ";
 
}, 1000);

var text= name + "\'s birthday in";
document.getElementById("name").innerHTML= text;

