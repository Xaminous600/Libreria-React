import { useFilters } from '../hooks/useFilters';
import './Filtros.css';

export function Filtros(){

    const {setFiltroGenero, setFiltroTitulo} = useFilters();

    function handleFilterGenre(event){
        setFiltroGenero(event.target.value);
    }

    function handleFilterTitle(event){
        setFiltroTitulo(event.target.value);
    }

    return(
        <div className="principalFiltro">
            <div className='filtroGenero'>
                <h3>Género: </h3>
                <div>
                    <select onClick={handleFilterGenre}>
                        <option value='all'>Todos</option>
                        <option value='Fantasía'>Fantasía</option>
                        <option value='Ciencia ficción'> Ciencia ficción</option>
                        <option value='Zombies'>Zombies</option>
                        <option value='Terror'> Terror</option>
                </select>
                </div>
            </div>
            <div className='filtroTitulo'>
                <h3>Título: </h3>
                <div>
                    <input onChange={handleFilterTitle}/>
                </div>
                
            </div>
        </div>
    )
}