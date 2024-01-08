import { createContext, useState} from "react";

export const FiltroContext = createContext();

export function FiltroProdiver({children}){

    const [filtroGenero, setFiltroGenero] = useState('all');
    const [filtroTitulo, setFiltroTitulo] = useState('');

    return (
        <FiltroContext.Provider value={{
            filtroGenero,
            setFiltroGenero,
            filtroTitulo, 
            setFiltroTitulo
        }}>
            {children}
        </FiltroContext.Provider>
    )
}