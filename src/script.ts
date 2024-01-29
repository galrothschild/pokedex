let pokemonID: number = 1;

document.querySelector(".btn-next")?.addEventListener("click", () => {
    pokemonID++;
    fetchPokemon(pokemonID);
});
document.querySelector(".btn-previous")?.addEventListener("click", () => {
    pokemonID > 0 ? pokemonID-- : pokemonID =
        fetchPokemon(pokemonID);
});

async function fetchPokemon(id: number) {
    try {
        const pokemon = (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json());
        const pokemonName: string = pokemon?.name;
        const pokemonSprite: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
        setPokemon(pokemonName, id, pokemonSprite);
    } catch (error: unknown) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Unknown Error occured");
    }
}

const setPokemon = (pokemonName: string, pokemonID: number, pokemonImage: string) => {
    const pokemonNameElement = document.querySelector(".pokemon-name") as HTMLSpanElement;
    const pokemonIDElement = document.querySelector(".pokemon-id") as HTMLSpanElement;
    const pokemonImgElement = document.querySelector(".pokemon") as HTMLImageElement;

    pokemonNameElement.innerText = pokemonName;
    pokemonIDElement.innerText = `${pokemonID}`;

    pokemonImgElement.src = pokemonImage;
    pokemonImgElement.alt = pokemonName;

};
fetchPokemon(1);