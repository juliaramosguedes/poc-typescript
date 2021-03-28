import axios from 'axios';

interface getPokemonDTO {
    id: number;
    name: string;
    abilities: object[];
    moves: object[];
    baseExp: number;
    isDefault: boolean;
    image: string;
    stats: object[],
    type: string;
}

const getPokemon = (nameOrId: string): Promise<getPokemonDTO> => axios(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`).then(result => result.data);

export default getPokemon
