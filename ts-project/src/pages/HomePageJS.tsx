import React, {useState} from 'react';
import useGetPokemon from "../hooks/useGetPokemonJS";
import {useFormik} from "formik";
import {Container} from "../styles/components/Shared";
import {
    Button,
    Card,
    CardBody,
    CardImage,
    Error,
    Form,
    Image,
    Input,
    Title,
    Wrap
} from "../styles/components/Home.style";

const HomePage: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string | null>(null)
    const formik = useFormik({
        initialValues: {
            pokemon: '',
        },
        onSubmit: (values) => {
            setSearchInput(values.pokemon.toLowerCase());
        }
    });

    // @ts-ignore
    const {loading, error, pokemon} = useGetPokemon(searchInput);

    return (
        <Container>
            <Wrap>
                <Title>Capture a pokémon</Title>
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="pokemon" hidden>Input a pokemon name</label>
                    <Input type="text"
                           name="pokemon"
                           placeholder="Name or number of a pokémon"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.pokemon}
                    />
                    <Button type="submit">Go!</Button>
                    {error && <Error>* Invalid name</Error>}
                </Form>
            </Wrap>
            {!loading && pokemon && (
                <Wrap>
                    <Title>Gotcha!</Title>
                    <Card>
                        <CardImage>
                            <Image src={pokemon.image} alt={pokemon.name}/>
                        </CardImage>
                        <CardBody>
                            <h2>{pokemon.name}</h2>
                            <p>Number: {pokemon.id}</p>
                            <p>Type: {pokemon.type}</p>
                            <span>Abilities: </span>
                            <ul>{pokemon.abilities.map((ability: string) => (<li>{ability}</li>))}</ul>
                        </CardBody>
                    </Card>
                </Wrap>
            )}
        </Container>
    );
};

export default HomePage;
