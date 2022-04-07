import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokeCards = ( {pokemonUrl} ) => {
    const [pokemon, setPokemon] = useState ({})
    
    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res => setPokemon(res.data))
        console.log(pokemon)
    }, [ pokemonUrl ])
    return (
        
        <div className='card'>
          
           <ul> 
           <Link className='link' to={`/pokedex/${pokemon.id}`}>
             <li className='list'>
                 
                    <h3 className='p_card'>{pokemon.name}</h3>
                    <img className='img_card' src={pokemon.sprites?.other.dream_world.front_default} alt="image of pokemon" />
                    <p className='p_card'><b>Type:</b> {pokemon.types?.[0].type.name} </p>
                   
                    <p className='p_card'><b> hp:</b> {pokemon.stats?.[0].base_stat} </p>
                    <p className='p_card'> <b>attack:</b> {pokemon.stats?.[1].base_stat} </p>
                    <p className='p_card'> <b>defense:</b> {pokemon.stats?.[2].base_stat} </p>
                    <p className='p_card'> <b>speed:</b> {pokemon.stats?.[5].base_stat} </p>
                    
                    
                </li>
                </Link> 
            </ul>
        </div>
    );
};

export default PokeCards;