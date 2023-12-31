import React from "react";
import { useState,useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
 //f1c2f1ee
const API_URL = 'http://www.omdbapi.com?apikey=f1c2f1ee'
const movie1 = {
    'Title': "Batman Begins",
    'Type': "movie",
    'Year': "2005",
    'imdbID': "tt0372784"

}

const App = () =>{
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm ]= useState('')  

    const searchMovies = async(title) =>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search)
            
    }
    useEffect(() => {
        searchMovies('Batman')


    }, []);
    return(
        <div className = 'app'>
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder = 'Search for movies'
                       value={searchTerm }
                       onChange={(e) =>setSearchTerm(e.target.value)}
                >
                        
                </input>
                <img src ={SearchIcon}
                alt = 'search'
                onClick= {() => searchMovies(searchTerm)}
                >
                </img>
            </div>
            {
                movies?.length>0
                ?(
                <div className='container'>
                  {movies.map((movie) =>(
                    <MovieCard movie = {movie}/>))}
                
                  
                 </div>

                ):
                (
                    <div className="empty">
                        <h2>No movies found</h2> 

                    </div> 

                )
            }
        </div>
    );
 
}
export default App;
