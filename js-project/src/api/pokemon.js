import axios from 'axios';

const getPokemon = (idOrName) => axios(`https://pokeapi.co/api/v2/pokemon/${idOrName}`).then(result => result.data);

export default getPokemon
