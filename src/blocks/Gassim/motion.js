window.onload = function() {
    var pos = 0;
    var pwin = window.innerWidth/2;
    var pos2 = 0;
    var pwin2 = window.innerHeight/3;
    var pos3 = window.innerWidth/6;
    var pwin3 = window.innerWidth/2;
    var pos4 = window.innerWidth/6;
    var pwin4 = window.innerHeight/3;
    var windowWidth = (window.innerWidth/2)-window.innerWidth/2%1;
    var windowHeight = (window.innerHeight/2)-window.innerHeight/2%1;
    var b = 0;
    var keyword = "nature,greenscreen";
    var images = document.getElementsByClassName('images');
    var t = setInterval(move, 10);
    var t = setInterval(insert, 50);
    var index = 1;
    
    window.addEventListener('resize', checkWindowSize)
    function checkWindowSize() {
     windowWidth = (window.innerWidth/2)-window.innerWidth/2%1;
     windowHeight = (window.innerHeight/2)-window.innerHeight/2%1;
     pwin = window.innerWidth/2;
    pwin2 = window.innerHeight/3;
    pwin3 = window.innerWidth/2;
    pwin4 = window.innerHeight/3;
    };

    function insert() {
        if(keyword == "nature,greenscreen"){keyword="male,abs"}
        else if (keyword == "male,abs") {keyword="male,shirtless"}
        else if (keyword == "male,shirtless") {keyword= "nature,greenscreen"}
    }


    
    function move() {
        images[b].innerHTML = `<img src="https://source.unsplash.com/random/${windowWidth}x${windowHeight}/?${keyword};SameSite=Lax"/>`
        images[b].style.zIndex = index++;
        if(b>=0&&b<2){b++}else{b=0;}
        if(pos >= pwin) {
            pos2 += 1;       
            images[b].style.top = pos2 + 'px';
            document.querySelector("body").style = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 55%, rgba(8,44,51,1) 100%) !important;";
            if(pos2 >= pwin2) {

                pos3 -= 1;
                pos2 -= 1;
                images[b].style.left = pos3 + 'px';
                document.querySelector("body").style = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 69%, rgba(8,44,51,1) 100%) !important;";
            if(pos3 <= 0)
            {
                pos4 -= 1;
                pos3 += 1;
                images[b].style.top = pos4 + 'px';
                document.querySelector("body").style = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 89%, rgba(8,44,51,1) 100%) !important;";
                if(pos4 <=0)
                {
                   pos = 0;
                   pos2 = 0;
                   pos3 = pwin3;
                   pos4 = pwin4;
                }
            }
            }
        }
        else {
            pos += 1;
            images[b].style.left = pos +'px';
            document.querySelector("body").style = "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 43%, rgba(8,44,51,1) 100%) !important;";
        }
    }
};