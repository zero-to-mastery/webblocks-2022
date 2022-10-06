/*
    Base functionality:
        Make a call to pokeapi
        Get random pokemon
        Display blacked out image of pokemon
        Wait for user
        Get guess from user
        Check if guess is correct
        Unveil pokemon
*/

// base url
let baseApiUrl = "https://pokeapi.co/api/v2/";
let id = 5;
// endpoint
let endpoint = `pokemon/${id}`;
// printing pending promise, but contains expected details -- need to explore promises a bit
console.log(fetch(baseApiUrl + endpoint).then(response => response.json()));

/*
    Future considerations:
        "Who's that pokemon?" audio cue / Background music
        Scoring (maybe based on time taken to guess)
*/