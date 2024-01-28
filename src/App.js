import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Movielist from './components/Movielist';
import { useEffect, useState } from 'react';
import axios from 'axios';

// OMdb API Key = 7b471a32

function App() {
  
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try{
      const {data} = await axios.get("https://www.omdbapi.com/?apikey=7b471a32&s=Star+Wars&page=1");
      setMovies(data.Search);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='App-body'>
        <div>
          <h1 className='list-header'>Top 10 Star Wars Films:</h1>
          {console.log('Movies:', movies)}
          {movies.length > 0 ? <Movielist movies={movies} /> : <div>No Movies!</div>}
        </div>
      </div>
    </div>
  );
}

export default App;