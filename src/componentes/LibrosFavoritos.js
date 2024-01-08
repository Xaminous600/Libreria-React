import { useId } from 'react';
import './LibrosFavoritos.css';
import { useLibro } from '../hooks/useLibro';

export function LibrosFavoritos({libro}){
    const favoritoCheckBoxId = useId();
    const {librosFavoritos, removeFavorito} = useLibro();

    function LibrosFavoritos({libro}){
        console.log(libro);
        return(
            <li>
                <img src= {libro.cover} />
                <span>{libro.title}</span>
                <button onClick={()=>{removeFavorito(libro)}}>
                    <span>Eliminar</span>
                </button>
            </li>
        );
    }

    return (
        <div>
            <label className='fav-button' htmlFor={favoritoCheckBoxId}>
                <h3>F</h3>
            </label>    
            <input id={favoritoCheckBoxId} type='checkbox' hidden/>

            <aside className="menuDesplegable">
                <ul>
                    {
                        librosFavoritos.map(libro =>{
                            return <LibrosFavoritos libro={libro}/>
                        })
                    }
                </ul>
            </aside>
        </div>
    )
}