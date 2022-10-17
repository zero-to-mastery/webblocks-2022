

function showtime () {
    let date=new Date();
    let d=date.getDate();
let m=date.getMonth();
let y=date.getFullYear();
let hour=date.getHours();
let minute=date.getMinutes();
let second=date.getSeconds();
let end="AM"
if(second<10){
    second="0"+second;
}
if(minute<10){
    minute="0"+minute;
}
if(hour>12){
    hour=hour-12;
    end="PM"
}

if(hour<10){
    hour="0"+hour;
}


    let dates=d+ "/"+m+"/"+y;
    var classdate=document.getElementsByClassName("date")
    classdate[0].innerText=dates;
    
    
    let time=hour+" : "+ minute + " :" + second +"  "+end; 
    document.getElementById("time").innerText=time;
    setTimeout(showtime,1000 );

}