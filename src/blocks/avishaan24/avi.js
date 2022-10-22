let string = "";
let body=document.querySelector("body");
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(string=="" && e.target.innerHTML == '0'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == '.'){
            let n=string.length;
            if(string==""||('9'<string[n-1] || string[n-1]<'0'))
                string+='0.';
            else
                string+='.';
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == '='){
            string=eval(string)
            if(string == "0")
            string="";
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'sin'){
            string=Math.round(Math.sin((Math.PI/180)*eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'cos'){
            string=Math.round(Math.cos((Math.PI/180)*eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'tan'){
            string=Math.round(Math.tan((Math.PI/180)*eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == '' ){
            string=Math.round(Math.sqrt(eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'log'){
            string=Math.round(Math.log(eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'e'){
            string=Math.round(Math.exp(eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.slice(0,-1);
            document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML == 'x!'){
            let num=eval(string);
            if(num<0)
            string="Error";
            else if(num==0)
            string="1";
            else{
                let factorial=1;
                for(i=1;i<=num;i++){
                    factorial*=i;
                }
                string=factorial;
            }
            document.querySelector('input').value=string; 
        }
        else if(e.target.value === "sqrt"){
            string=Math.round(Math.sqrt(eval(string))*1000)/1000;
            document.querySelector('input').value=string; 
        }
        else{
        console.log(e.target)
        string=string+ e.target.innerHTML;
        document.querySelector('input').value=string;
        }
        console.log(e.target.value);
    })
})
function changetheme(){
    body.classList.toggle("dark-mode");
    
}
