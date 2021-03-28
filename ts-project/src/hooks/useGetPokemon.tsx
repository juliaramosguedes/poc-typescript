import {useEffect, useState} from 'react';
import _ from 'lodash';
import {getPokemon} from "../api";

interface StatsDTO {
    baseStat: number;
    name: string;
}

interface ParsePokemonDTO {
    id: number;
    name: string;
    abilities: string[];
    moves: string[];
    baseExp: number;
    isDefault: boolean;
    image: string;
    stats: StatsDTO[],
    type: string;
}

interface UseGetPokemonDTO {
    pokemon: ParsePokemonDTO | null;
    loading: boolean;
    error: string | null;
}

const parsePokemon = (pokemon: any): ParsePokemonDTO => {
    const {
        abilities,
        base_experience: baseExp,
        id,
        is_default: isDefault,
        moves,
        name,
        sprites: {front_default: image},
        stats,
        types
    } = pokemon;
    const parseAbilities = abilities.map(({ability}: any) => ability.name);
    const parseMoves = moves.map(({move}: any) => move.name);
    const parseStats = stats.map(({stat, base_stat: baseStat}: any) => ({baseStat, name: stat.name}));
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
}

const useGetPokemon = (nameOrId: string | null): UseGetPokemonDTO => {
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemon, setPokemon] = useState<ParsePokemonDTO | null>(null);
    const [error, setError] = useState<string | null>(null);

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
