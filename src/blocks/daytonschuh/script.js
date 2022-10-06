/*
    Base functionality:
        Make a call to pokeapi ✓
        Get random pokemon ✓
        Display blacked out image of pokemon
        Wait for user
        Get guess from user ✓
        Check if guess is correct ✓
        Unveil pokemon
*/

// API base url
let baseApiUrl = "https://pokeapi.co/api/v2/";
let id = 5;
let pokemon = "";
const playerGuess = document.getElementById('playerGuess');

playerGuess.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        checkGuess();
    }
});

async function callPokeAPI(){
    let endpoint = `pokemon/${id}`
    return fetch(baseApiUrl + endpoint)
    .then(response => response.json());
}

async function getPokemon()
{
    // TODO
    id = getRandomIntInclusive(1, 151); // first gen
    pokemon = await callPokeAPI();
    console.log(pokemon.name);
    //setTimeout(()=> getPokemon(), 5000);
}

function checkGuess()
{
    // TODO
    if(playerGuess.value.toLowerCase() === pokemon.name.toLowerCase()){
        console.log("Good job!");
    }
    playerGuess.value = "";
    revealPokemon();
}

function revealPokemon(){
    // TODO
}

// Following code found at: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

getPokemon();

/*
    Future considerations:
        "Who's that pokemon?" audio cue / Background music
        Scoring (maybe based on time taken to guess)
        Select different generations
*/