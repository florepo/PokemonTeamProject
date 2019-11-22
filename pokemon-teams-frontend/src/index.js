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

function fetchPokemons(){
    return fetch(POKEMONS_URL)
        .then(response => response.json())
}

function renderTrainers(jsonTrainers){
    // console.log(jsonTrainers)
    for(let i = 0; i < jsonTrainers.length; i++) {

        createCard(jsonTrainers[i])
    }
}

function createCard(trainer) {
    // console.log(trainer)
    // console.log(trainer.pokemons)
    
    let card = document.createElement("div")
    card.setAttribute("class", "card");
    card.setAttribute("data-id", `${trainer.id}`);

    main.append(card)

    let p = document.createElement("p")
    p.innerText = `${trainer.name}`

    let addButton = document.createElement("BUTTON")
    addButton.innerText = "Add Pokemon"
    addButton.setAttribute("data-trainer-id", `${trainer.id}`);

    card.append(p,addButton)

    const uList = document.createElement("ul")
    card.append(uList)

    for(let i = 0; i < trainer.pokemons.length; i++) {
        renderListitem(trainer.pokemons[i])
       
}

function renderListitem(pokemon){
    console.log(pokemon.nickname)
    
    let li = document.createElement("li")
    li.innerHTML = `${pokemon.species} (${pokemon.nickname})` 

    let releaseButton = document.createElement("BUTTON")
    releaseButton.innerText = "Release"
    releaseButton.setAttribute("class", `release`);
    releaseButton.setAttribute("data-pokemon-id", `${pokemon.id}`);

    li.append(releaseButton)
    uList.append(li)
    }
    

}
