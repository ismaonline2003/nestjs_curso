import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public  name: string
        //public imageUrl: string
    ) {
        console.log('constructor llamado');
    }

    public scream(): undefined {
        console.log(`${ this.name.toUpperCase() } !!!`)
    }

    speak() {
        console.log(` ${this.name} ${this.name} `)
    }

    async getMoves(): Promise<Move[]> {
        //const moves = 0;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }

}

export const charmander = new Pokemon(4, 'Charmander')
charmander.scream();
charmander.speak();
console.log(charmander.getMoves());

export const pikachu = new Pokemon(3, 'Pikachu');

//pikachu.id = 4; (is not valid)