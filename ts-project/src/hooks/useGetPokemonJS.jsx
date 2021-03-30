import {useEffect, useState} from 'react';
import _ from 'lodash';
import getPokemon from "../api/pokemonJS";

/**
 * A stats object
 * @typedef {Object} PokemonStats
 * @property {number} baseStat
 * @property {string} name
 */

/**
 * A pokemon object
 * @typedef {Object} Pokemon
 * @property {number} id
 * @property {string} name
 * @property {string[]} abilities
 * @property {string[]} moves
 * @property {number} baseExp
 * @property {boolean} isDefault
 * @property {string} image
 * @property {PokemonStats} stats
 * @property {string} type
 */

/**
 *  * A useGetPokemon object
 * @typedef {Object} UseGetPokemon
 * @property {boolean} loading
 * @property {string} error
 * @property {Pokemon} pokemon
 */

const parsePokemon = (pokemon) => {
    const {
        abilities,
        base_experience: baseExp,
        id,
        is_default: isDefault,
        moves,
        name,
        sprites: { front_default: image },
        stats,
        types
    } = pokemon;
    const parseAbilities = abilities.map(({ability}) => ability.name);
    const parseMoves = moves.map(({ move }) => move.name);
    const parseStats = stats.map(({ stat, base_stat: baseStat }) => ({ baseStat, name: stat.name }));
    return {
        id,
        name: _.startCase(name),
        abilities: parseAbilities,
        moves: parseMoves,
        baseExp,
        isDefault,
        image,
        stats: parseStats,
        type: types[0].type.name
    };
};

/**
 * @param {string | null} nameOrId
 * @returns {UseGetPokemon}
 */
const useGetPokemon = (nameOrId) => {
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (nameOrId) {
            getPokemon(nameOrId).then((result) => {
                setError(null);
                const parsedPokemon = parsePokemon(result);
                setPokemon(parsedPokemon);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                setPokemon(null);
                setError(error.message);
            });
        }
    }, [nameOrId]);

    return {loading, error, pokemon};
};

export default useGetPokemon;
