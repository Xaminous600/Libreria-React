import logo from './logo.svg';
import './App.css';
import { Libros } from './componentes/libros';
import { Footer } from './componentes/Footer';
import {Filtros} from './componentes/Filtros';
import { useLibro } from './hooks/useLibro';
import { useFilters } from './hooks/useFilters';
import { LibrosFavoritos } from './componentes/LibrosFavoritos';

function App() {
  const {libros} = useLibro();
  const {filtrarLibros} = useFilters();

  return (
    <main className='principal'>
      <h1>Libreria Amazon</h1>
      <LibrosFavoritos />
      <Filtros />
      <Libros libros = {filtrarLibros(libros)} />
      <Footer />
    </main>
  );
}

export default App;
