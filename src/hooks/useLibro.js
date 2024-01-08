import { useContext } from "react";
import { LibroContext } from "../context/libroState";

export function useLibro(){

    const context = useContext(LibroContext);

    return context;
}