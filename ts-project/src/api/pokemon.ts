import axios from 'axios';

const getPokemon = (name: string): Promise<any> => axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => result.data);

export default getPokemon
