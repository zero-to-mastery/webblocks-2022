/*
    Base functionality:
        Make a call to pokeapi ✓
        Get random pokemon ✓
        Display blacked out image of pokemon ✓
        Wait for user ✓
        Get guess from user ✓
        Check if guess is correct ✓
        Unveil pokemon ✓
*/

let baseApiUrl = "https://pokeapi.co/api/v2/";
let baseSpriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let id = 0;
let pokemon = "";
const playerGuess = document.getElementById('playerGuess');
const pokemonSprite = document.getElementById('sprite');
const pokemonName = document.getElementById('pokemon');

playerGuess.addEventListener('keypress', function(e)
{
    if(e.key === 'Enter'){
        checkGuess();
    }
});

async function callPokeAPI()
{
    let endpoint = `pokemon/${id}`
    return fetch(baseApiUrl + endpoint)
    .then(response => response.json());
}

async function getPokemon()
{
    pokemonName.textContent = "?";
    id = getRandomIntInclusive(1, 151); // first gen only
    pokemon = await callPokeAPI();
    sprite.style.setProperty('transition', 'initial'); // Reset transition to not fade
    sprite.style.setProperty('filter','brightness(0)');
    sprite.src = baseSpriteUrl + id.toString() + ".png";
}

function checkGuess()
{
    if(playerGuess.value.toLowerCase() === pokemon.name.toLowerCase()){
        console.log("Good job!");
    }
    playerGuess.value = "";
    revealPokemon();
}

function revealPokemon()
{
    sprite.style.setProperty('transition', 'filter 1s ease-out');
    sprite.style.setProperty('filter', 'initial');
    pokemonName.textContent = pokemon.name;
    setTimeout(() => getPokemon(), 2000);
}

// Following code found at: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
function getRandomIntInclusive(min, max)
{
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