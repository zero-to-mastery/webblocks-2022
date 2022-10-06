'use strict'


const b=()=>{

    let a=document.querySelector('.par');


    fetch('https://animechan.vercel.app/api/random').then((user)=>{
        return user.json();
    }).then((mess)=>{
        a.textContent=mess.quote;
        console.log(mess.anime);
    })
     
}

document.getElementById('btn').addEventListener('click',b);
