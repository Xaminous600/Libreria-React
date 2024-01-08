import './Footer.css';
import { useLibro } from '../hooks/useLibro';
import { useFilters } from '../hooks/useFilters';

export function Footer(){
    const {libros, librosFavoritos, addFavorito} = useLibro();
    const {filtroGenero, filtroTitulo} = useFilters();

    return (
        <div className='footer'>
            <h5>{}</h5>
        </div>
    )
}