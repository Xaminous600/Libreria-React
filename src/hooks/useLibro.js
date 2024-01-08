import { useContext } from "react";
import { LibroContext } from "../context/libroState";

export function useLibro(){

    const {libros, librosFavoritos, addFavorito, removeFavorito} = useContext(LibroContext);

    function libroEnFavorito(libro){
        return librosFavoritos.some(item => item.ISBN === libro.ISBN);
    }

    return {libros, librosFavoritos, addFavorito, libroEnFavorito, removeFavorito};
}