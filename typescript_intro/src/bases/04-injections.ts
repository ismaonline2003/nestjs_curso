import { PokeapiResponse, } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';
import { Move } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public  name: string,
        //Todo: inyectar dependencias,
        private readonly http: HttpAdapter
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
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);
export const pikachu = new Pokemon(3, 'Pikachu', pokeApi);

charmander.scream();
charmander.speak();
console.log('CharmanderMoves', charmander.getMoves());
console.log('PikachuMoves', pikachu.getMoves());

//pikachu.id = 4; (is not valid)