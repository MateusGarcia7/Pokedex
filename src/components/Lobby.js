import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

const Lobby = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch ();
    const navigate = useNavigate ();



    const submit = e =>{
        e.preventDefault();
        console.log(userName)
        dispatch({ 
            type: "GET_USERNAME",
            payload: userName 
    })
    setUserName("")
    navigate("/pokedex");
    }


    return (
        <div className='lobby'>
         <h1 className='title'>Hello Trainer!</h1>
         <img className='logo' src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" />
         <p className='p_title'>Give me your name to start</p>
         <form action="" onSubmit={submit}>
         <input className='input_lobby'
            type="text" 
            value={userName } 
            onChange={e => setUserName(e.target.value)} 
            required
        />
         <button className='button_next'> <i className="fas fa-paper-plane"></i> </button>
         </form>
        </div>
    );
};

export default Lobby;