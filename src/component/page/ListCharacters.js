import React,{ useState, useEffect } from 'react';
import listCharacters from '../css/listCharacters.css'

const Characters = () => {
    const [isError, setIsError] = useState(null)
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(response => response.json())
            .then(
                (data) => {
                    setItems([data]);
                },
                (error) => {
                    setIsError(error);
                });
    }, []);

    const fetchPeople = items.map((item) => {
        return (
            <div className="d-flex p-5 justify-content-center">
                {(item).map((character) => (
                    <div className="card m-1 cursor-pointer" key={character.id}>
                        <img src={character.image} alt="Avatar" />
                        <div className="container text-center">
                            <h4><b>{character.name}</b></h4>
                        </div>
                    </div>
                ))}
            </div>
        );
    });

    if (isError) {
        return (<div>Erreur : { isError.message }</div>)
    } else {
        return (
            <div>
                { fetchPeople }
            </div>)
    }
}

export default Characters;