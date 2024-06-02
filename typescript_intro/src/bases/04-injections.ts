import { PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public  name: string,
        //Todo: inyectar dependencias,
        private readonly http: PokeApiAdapter
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
        const { data } = await this.http.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }

}

const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApi);
export const pikachu = new Pokemon(3, 'Pikachu', pokeApi);

charmander.scream();
charmander.speak();
console.log(charmander.getMoves());

//pikachu.id = 4; (is not valid)