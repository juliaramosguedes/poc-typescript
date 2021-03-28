import axios from 'axios';

const getPokemon = (nameOrId) => axios(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`).then(result => result.data);

export default getPokemon
