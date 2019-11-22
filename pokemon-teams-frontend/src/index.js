const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


const main = document.querySelector("main")

fetchTrainers()

function fetchTrainers(){
    return fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(jsonObject => renderTrainers(jsonObject))
}

function renderTrainers(jsonTrainers){
    console.log(jsonTrainers)
    for(let i = 0; i < jsonTrainers.length; i++) {
        createCard(jsonTrainers[i])
    }
}

function fetchTrainerPokemons(){
    return fetch(POKEMONS_URL)
        .then(response => response.json())
        .then(jsonObject => pokemonsForTrainer(jsonObject))
}

function pokemonsForTrainer(jsonPokemons){

    let collection = []
    trainer_id = 1
    jsonPokemons.forEach( pokemon => {
         if (trainer_id  === pokemon.trainer_id ) { 
             collection.push(pokemon)
         }
     })
     return collection
}




function createCard(trainer) {

    let container = document.createElement("div")
    container.setAttribute("class", "card");
    container.setAttribute("data-id", `${trainer.id}`);

    main.append(container)

    let p = document.createElement("p")
    p.innerText = `${trainer.name}`

    let addButton = document.createElement("BUTTON")
    addButton.innerText = "Add Pokemon"
    addButton.setAttribute("data-trainer-id", `${trainer.id}`);

    let uList = document.createElement("ul")
    
    container.append(p,addButton, uList)

    let jsonPokemons = fetchTrainerPokemons()
    console.log(jsonPokemons)
    
    for(let i = 0; i < jsonPokemons.length; i++) {
        createListitem(jsonPokemons[i])
    }
}

function createListitem(pokemon){

    let li = document.createElement("li")
    let releaseButton = document.createElement("BUTTON")

    releaseButton.innerText = "Release"
    releaseButton.setAttribute("class", `release`);

    //releaseButton.setAttribute("data-pokemon-id", `${pokemon.id}`);
    //li.innerHTML = `${pokemon.species} (${pokemon.nickname})` 

    uList.append(li, releaseButton)

}
