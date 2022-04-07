import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokeCards from './PokeCards';


const Pokedex = () => {
    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState ([])
    const [pokemonName, setPokemonName ] = useState("")
    const navigate = useNavigate()
    const [types, setTypes]=useState([]);
    //pagination 
    const [page, setPage] = useState(1) ;
    const intemsNumber = 20
    const lastIndex = page * intemsNumber;
    const firstIndex = lastIndex-intemsNumber;
    const pokemonsPage = pokemons?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons?.length/intemsNumber)
    const pagesNumbers = [];
    for(let i = 1; i <totalPages; i++){
        pagesNumbers.push(i)
    }

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126")
        .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type')
        .then(res=>setTypes(res.data.results))

    }, [])

    const submit=e=>{
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`)
    }
    const handleType=e=>{
        console.log(e.target.value) //acceder a lo que el usuario selecciono
        axios.get(e.target.value) //url
        .then(res=>setPokemons(res.data.pokemon))

    }

    return (
        <div>
            <h1 className='pokedex_title'>Pokedex</h1>
            <p className='p_title_pokedex'>Welcome {userName}, here you can find your favorite pokemon </p>

            <div className='select'>
                    <select name="" id="" onChange={handleType}>
                    <option>Type</option>
                       
                        {
                            types.map(type=>(
                                <option key={type.url} value={type.url}>{type.name}</option>   
                            ))
                        }
                    </select>
                </div>
            <form className="input-container" onSubmit={submit} >
                <label htmlFor="pokemon-name"></label>
                <input className='input_pokedex' type="text"  id="pokemon-name"  placeholder='Search here'
                value={pokemonName}
                onChange={e => setPokemonName(e.target.value)}
                 />
                 <button className='button_pokedex'><i className="fas fa-search"></i></button>
            </form>
          <div className='grid'>
            {
            pokemonsPage.map(pokemon => (
              
                <PokeCards 
                pokemonUrl =  {pokemon.url ? pokemon.url:pokemon.pokemon.url} 
                key={pokemon.url ? pokemon.url:pokemon.pokemon.url}
               
                />  
            ))
            
            }
            </div>
           
            <button className='button_page'
            onClick={() => setPage(page -1)}
            disabled={page <=1}
             >
             <i className="fa-solid fa-angle-left"></i>
             </button>
             {page} / {totalPages}
            <button className='button_page'
            onClick={() => setPage(page +1)} 
            disabled={page >= totalPages}
            >
             
             <i className="fa-solid fa-angle-right"/>
            </button>
          
                    {pagesNumbers.map(page =>  
                    <button className='button_page' onClick={()=> setPage(page)} key={page}>{page}</button> )}
               
        </div>
    );
};

export default Pokedex;
