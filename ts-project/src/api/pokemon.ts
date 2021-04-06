import axios from 'axios';

export interface SpritesDTO {
    front_default: string
}

export interface TypesDTO {
    type: { name: string }
}

export interface getPokemonDTO {
    id: number;
    name: string;
    abilities: object[];
    moves: object[];
    base_experience: number;
    is_default: boolean;
    sprites: SpritesDTO;
    stats: object[];
    types: TypesDTO[];
}

export const getPokemon = (nameOrId: string): Promise<getPokemonDTO> => axios(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`).then(result => result.data);
