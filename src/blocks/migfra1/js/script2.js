let num
let atinge
let total
let decorrer

window.onload = function(){
    comecaJogo();
    document.querySelector('.dado').onclick = function(){
    joga();
    let cx = (total*100)/atinge;
    document.querySelector('.enchimento').style.width = cx+'%';
    document.querySelector('.enchimento').style.maxWidth = 100+'%';

    }
    document.querySelector('.btnSort').onclick = function(){
        comecaJogo()
    }
   
    }



function comecaJogo(){
    document.querySelector('.enchimento').style.width = '0%';
     document.querySelector('.enchimento').style.backgroundColor = '';
    decorrer = true
    total = 0;
    atinge = sorteia(15, 30);
    limpaoutro()
    document.querySelector('.dir').innerHTML = "Limite: <h2>"+atinge+"</h2><br><br><br>";
    document.querySelector('.esq').innerHTML += '<br>';
    document.querySelector('.ganhou').style.display = 'none';
    document.querySelector('.perdeu').style.display = 'none';
    document.querySelector('.btnSort').style.display = 'none'
}

function joga(){
    if (decorrer == true){
    limpa();
    num = sorteia(1, 6);
    total += num
    document.querySelector('.dir').innerHTML += "Saiu: <h2>"+num+"</h2><br>Total: <h2>"+total+"</h2><br><br>"
    document.querySelector('.esq').innerHTML += '<h2>'+num+';</h2>'
    document.querySelector('.face'+num).style.display = 'block';
    if (total == atinge) {
        limpa()
        document.querySelector('.boaa').innerHTML = '<h3>BOAAAA!</h3>'
        document.querySelector('.ganhou').style.display = 'block';
        decorrer = false
        document.querySelector('.btnSort').style.display = 'block'
        document.querySelector('.enchimento').style.backgroundColor = 'green';
    }
    else{
        if (total > atinge) {
        limpa()
        document.querySelector('.boaa').innerHTML = '<h3>: (!</h3>'
        document.querySelector('.perdeu').style.display = 'block';
        decorrer = false
        document.querySelector('.btnSort').style.display = 'block'
        document.querySelector('.enchimento').style.backgroundColor = 'red';
    }
    }
}
    else{
        alert("Carrega no botão de recomeçar")
    }
  }




function limpa(){
    document.querySelector('.face1').style.display = 'none';
    document.querySelector('.face2').style.display = 'none';
    document.querySelector('.face3').style.display = 'none';
    document.querySelector('.face4').style.display = 'none';
    document.querySelector('.face5').style.display = 'none';
    document.querySelector('.face6').style.display = 'none';
    document.querySelector('.ganhou').style.display = 'none';
    document.querySelector('.perdeu').style.display = 'none';
}

function limpaoutro(){
    document.querySelector('.boaa').innerHTML = '';
}



function sorteia(min,max){
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}










