import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const PokeInfo = (pokemonUrl) => {
    const {id}=useParams();
    const [pokemon, setPokemon]=useState({});

    useEffect(()=>{

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>setPokemon(res.data))
        

    },[id]);
   

    return (
      
        <div className='pk_info'>
        <div className='pokemon'>
         <img className='img_poke_info' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
         <h1>{pokemon.name?.toUpperCase()}</h1>
         <p className='p_poke_info'> <b> {pokemon.weight}</b> <br /> weight  </p>
         <p className='p_poke_info'><b>  {pokemon.height}</b> <br /> Height</p>
         <p className='poke_id'><b>#{pokemon.id}</b></p>
         <p><b>Base experience: </b> {pokemon.base_experience}</p>
                 
         </div>    
        <Link to={"/pokedex"} > <button><i className="fa-solid fa-arrow-rotate-left"></i></button></Link>
       
    </div>
);
};
export default PokeInfo;