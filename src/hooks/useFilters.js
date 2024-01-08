import React, { useContext } from "react";
import { FiltroContext } from "../context/filtroState";


export function useFilters(){
    const {filtroGenero, setFiltroGenero, filtroTitulo, setFiltroTitulo} = useContext(FiltroContext);
    
    function containParams(tituloLibro){
        for(let i =0; i< filtroTitulo.length; i++){
            if(tituloLibro[i] !== filtroTitulo[i]){
                return false;
            }
        }

        return true;
    }

    function filtrarLibros(libros){
        return libros.library.filter(item => {
            return (
                containParams(item.book.title) && 
                (
                    item.book.genre === filtroGenero || filtroGenero === 'all'
                )
            )
        }) 
    }

    return {filtroGenero, setFiltroGenero, filtroTitulo, setFiltroTitulo, filtrarLibros};
}