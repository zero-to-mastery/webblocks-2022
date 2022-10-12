let api="b42916700cde425291ec23580fe75459"
let country="in"
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api}`, true)
xhr.onload = function () {
    let news = JSON.parse(this.responseText)
    // console.log(news)
    let accordian = document.getElementById('accordion')
    let newz = news.articles
    let str = ""
    newz.forEach(function(element,index){
        let str1 =`<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
                ${element.description}
            </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                ${element.content} <a href="${element.url}" target="_blank">Read more</a>
            </div>
        </div>
    </div>`
    str+=str1
}
);
accordian.innerHTML=str
}
xhr.send()