export const pokemonIds: number[] = [1, 20, 30, 34, 66];
interface Pokemon {
    id: number;
    name: string;
    age?: number;
}
export const pokemons: Pokemon[] = [];

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

bulbasaur.age = 20;

export const charmander: Pokemon = {
    id: 2,
    name: 'charmander',
    age: 30
}

pokemons.push(bulbasaur, charmander);

pokemonIds.push(15);
