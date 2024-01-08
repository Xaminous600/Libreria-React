import './libros.css';
import { useLibro } from '../hooks/useLibro';

export function Libros({libros}){
    const {addFavorito, libroEnFavorito, removeFavorito} = useLibro();

    return (
        <div className='listaLibros'>
            <ul>
            {
                libros.map(libro => {
                    const favorito = libroEnFavorito(libro.book);

                    return (
                        <li key={libro.book.ISBN}>
                            <img src= {libro.book.cover} />
                            <span>{libro.book.title}</span>
                            {!favorito ? 
                                <button onClick={()=>{addFavorito(libro.book)}}>
                                    <span>Añadir</span>
                                </button> :

                                <button onClick={()=>{removeFavorito(libro.book)}}>
                                    <span>Eliminar</span>
                                </button>
                            }
                        </li>
                    );
                })
                
            }
            </ul>
        </div>
    )
}