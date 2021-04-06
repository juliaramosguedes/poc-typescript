import React, {useState} from 'react';
import {useFormik} from "formik";
import {Heart} from '@styled-icons/fa-solid/Heart';
import {Coffee} from '@styled-icons/fa-solid/Coffee';

import {useGetPokemon} from "../hooks";
import {
    Button,
    Card,
    CardBody,
    CardImage,
    Container,
    Error,
    Footer,
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
                {!loading && pokemon && (
                    <>
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
                                <ul>{pokemon.abilities.map(ability => (<li>{ability}</li>))}</ul>
                            </CardBody>
                        </Card>
                    </>
                )}
            </Wrap>
            <Footer>
                <p>Developed with{' '}
                    <Heart title="Coração" width="16px"/> & <Coffee title="Café" width="18px"/>
                    {' '}by <a
                        href="https://www.linkedin.com/in/julia-ramos-guedes"
                        title="Perfil no Linkedin da Julia Ramos, também conhecida como Maheoi"
                    ><u>Julia Ramos</u></a>
                </p>
            </Footer>
        </Container>
    );
};

export default HomePage;
