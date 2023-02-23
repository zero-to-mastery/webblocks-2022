let subnails = document.querySelectorAll(".img-section__subnails > img");
let covers = document.querySelectorAll(".img-section__bigcover > img");
let descriptions = document.querySelectorAll(".desc-section > div");

subnails.forEach(item => item.addEventListener("mousedown",changeCover));

function removeClassActiveImg(){
    subnails.forEach(item => {if (item.getAttribute("class")) 
        item.removeAttribute("class");});
    covers.forEach(item => {if (item.getAttribute("class")) 
        item.removeAttribute("class");});
}

function removeClassActiveDescription(){
    descriptions.forEach(item => {if (item.getAttribute("class") === "active-cover__desc") 
        item.setAttribute("class","coverdesc");})
}

function fadeoutPreviousCover(){
    covers.forEach(item => {if (item.getAttribute("class")=== "active-cover") 
        item.setAttribute("class","prev");});
}

function changeCover(e){
    let clickedSubnail= e.target.id;
    let coverNum = clickedSubnail.charAt(clickedSubnail.length - 1);
    if (!e.target.getAttribute("class")) 
    {
        fadeoutPreviousCover();
        removeClassActiveDescription();
        descriptions[coverNum-1].setAttribute("class","active-cover__desc");
        setTimeout(() => {removeClassActiveImg();
            e.target.setAttribute("class","active__img");
            covers[coverNum-1].setAttribute("class","active-cover");
            }, 1600);  
    }
}

