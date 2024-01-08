import {createContext, useEffect, useState, useReducer } from "react";
import datosLibros from '../data/books.json';

export const LibroContext = createContext();

const initialStateFavoritos = [];

function reducerFavorito(state, action){

    switch(action.type){
        case 'ADD_FAVORITO': {
            return [...state, action.payload];
        }

        case 'REMOVE_FAVORITO': {
            return state.filter(item => item.ISBN !== action.payload.ISBN);
        }

        return state;
    }
}

export function LibroProvider({children}){
    const [libros, setLibros] = useState(datosLibros);

    const [state, dispatch] = useReducer(reducerFavorito, initialStateFavoritos);

    function addFavorito(libro){
        console.log(libro);
        dispatch({
            type: 'ADD_FAVORITO',
            payload: libro
        })
    }

    function removeFavorito(libro){
        dispatch({
            type: 'REMOVE_FAVORITO',
            payload: libro
        })
    }
    
    return(
        <LibroContext.Provider value={{
            libros,
            librosFavoritos: state,
            addFavorito,
            removeFavorito
        }}>
            {children}
        </LibroContext.Provider>
    )
}