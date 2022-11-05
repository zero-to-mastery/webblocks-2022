window.onload = function(){
    comecaJogo();
    document.querySelector('.dado').onclick = function(){
       joga();
    }
    document.querySelector('.btnSort').onclick = function(){
       comecaJogo();
    }
}
let num, atinge, total, decorrer;
function comecaJogo(){
    total = 0;
    decorrer = true;
    atinge = sorteia(15,30);
    document.querySelector('.esq').innerHTML = '<h2>Atinge o N.º '+atinge+'</h2><br>';
    document.querySelector('.dir').innerHTML += '<br>';
    document.querySelector('.btnSort').style.display = 'none';
}
function joga(){
    if (decorrer==true) {
        limpa();
        num = sorteia(1,6);
        total += num;
        document.querySelector('.esq').innerHTML += '<br><br> Saiu ('+num+') <br> Total('+total+')';
        document.querySelector('.face'+num).style.display = 'block';
        document.querySelector('.dir').innerHTML += num+'; ';
        document.querySelector('.enchimento').style.width = eval((total*100)/atinge);
        if (atinge == total) {
            document.querySelector('.esq').innerHTML += '<br><br> <h3 style="color: green;">GANHOU</h3>';
            decorrer = false;
            document.querySelector('.btnSort').style.display = 'block';
        }else{
            if (atinge < total) {
                document.querySelector('.esq').innerHTML += '<br><br> <h3 style="color: red;">PERDEU</h3>';
                decorrer = false;
                document.querySelector('.btnSort').style.display = 'block';
            }
        }
    }else{
        alert("Carrega no botão de Recomeçar");
    }
}
function limpa(){
    document.querySelector('.face1').style.display = 'none';
    document.querySelector('.face2').style.display = 'none';
    document.querySelector('.face3').style.display = 'none';
    document.querySelector('.face4').style.display = 'none';
    document.querySelector('.face5').style.display = 'none';
    document.querySelector('.face6').style.display = 'none';
}

function sorteia(min,max){
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}










