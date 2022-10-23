
const generateQuote = () => {
    const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",

    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",

    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",

    }
];

    let randomQoute = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[randomQoute].quote;

}
document.querySelector("button").addEventListener('click', generateQuote);
document.querySelector("button").addEventListener('click', changeColor);

function changeColor () {
    const card = document.getElementsByClassName('card')
    const button = document.querySelector('button')
    

    if (card[0].style.color = '#9CE37D' ) {

        card[0].style.color ='#0A122A' 
        card[0].style.backgroundColor = '#9CE37D'
        button.style.color = '#9CE37D' 
        button.style.backgroundColor = '#0A122A';

    } 

}



