document.addEventListener("DOMContentLoaded", function(event) {
    //Removing article link when on mobiforge
    console.log(document.referrer);
    if (parent !== window && document.referrer.indexOf('https://mobiforge.com') === 0 && document.referrer.indexOf('http://mobiforge.com') === 0)
    {  
      console.log(document.referrer);
      document.getElementById('article-link').className = "fade-out";
    }
});