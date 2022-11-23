import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import Moviecard from "./MovieCard";
//5a9da958

const API_URL = "http://www.omdbapi.com?apikey=5a9da958";



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
useEffect(() => {
        searchMovies("Godfather");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    
    return (
        <div className="app">
            <h1>Movilogy</h1>

        <div className="search">
            <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Aramak istediğiniz filmin adını yazın"

            />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />

            </div>

           {
             movies?.length > 0 
             ? (
             <div className="container">
                {movies.map((movie) => (
                    <Moviecard movie={movie} />
                ) )}
            </div> 
            ) : (
                <div className="empty">
                    <h2>Film Bulunamadı</h2>
                </div>
            )
        }
            
        </div>
       
    );
}

export default App;
