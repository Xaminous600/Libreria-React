import {createContext, useEffect, useState } from "react";
import datosLibros from '../data/books.json';

export const LibroContext = createContext();

export function LibroProvider({children}){
    const [librosFavoritos, setLibrosFavoritos] = useState([]);
    const [libros, setLibros] = useState(datosLibros);

    function addFavorito(libro){
        setLibrosFavoritos(oldData =>[
            ...oldData, libro
        ]
        )
    }
    
    function libroEnFavorito(libro){
        return librosFavoritos.some(item => item.ISBN === libro.ISBN);
    }

    function removeFavorito(libro){
        setLibrosFavoritos(oldData => oldData.filter(item => item.ISBN !== libro.ISBN));
    }
    
    return(
        <LibroContext.Provider value={{
            libros,
            librosFavoritos,
            addFavorito,
            libroEnFavorito,
            removeFavorito
        }}>
            {children}
        </LibroContext.Provider>
    )
}