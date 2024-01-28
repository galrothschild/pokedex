"use strict";
let pokemonID = 1;
document.querySelector(".btn-next")?.addEventListener("click", () => {
    pokemonID++;
    fetchPokemon(pokemonID);
});
document.querySelector(".btn-previous")?.addEventListener("click", () => {
    pokemonID--;
    fetchPokemon(pokemonID);
});
async function fetchPokemon(id) {
    try {
        const pokemon = (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json());
        const pokemonName = pokemon?.name;
        const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
        setPokemon(pokemonName, id, pokemonSprite);
    }
    catch (error) {
        if (error instanceof Error)
            throw new Error(error.message);
        else
            throw new Error("Unknown Error occured");
    }
}
const setPokemon = (pokemonName, pokemonID, pokemonImage) => {
    const pokemonNameElement = document.querySelector(".pokemon-name");
    const pokemonIDElement = document.querySelector(".pokemon-id");
    const pokemonImgElement = document.querySelector(".pokemon");
    pokemonNameElement.innerText = pokemonName;
    pokemonIDElement.innerText = `${pokemonID}`;
    pokemonImgElement.src = pokemonImage;
    pokemonImgElement.alt = pokemonName;
};
fetchPokemon(1);
