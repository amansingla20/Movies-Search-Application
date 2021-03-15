import React from 'react'
import './SearchMovies.css';
import {useState} from 'react';
function SearchMovies() {
    const [query , setQuery] = useState('');
    const [movies , setMovies] = useState([]); 
    const searchMovie = async(e) =>{
        e.preventDefault();
        console.log("test")
        const url = `http://www.omdbapi.com/?&apikey=e1a73560&s=${query}&type="movie"`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.Search);
    }
    return (
        <div className = 'search-movie-container'>
        <div 
        className = 'fields'>
        <form onSubmit={searchMovie}>
         <input 
         type="text" 
         name="query" 
         placeholder="Search movies here.." 
         value={query} 
         onChange={(e) =>setQuery(e.target.value)}
         />
         <button 
         type="submit" 
         >
        Show Movies
        </button>
       </form>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', margin: '5rem'}}> 
    { 
    (movies.map(movie => ( 
            <div 
             className="card" 
             style={{width: '17rem', margin: '3rem', display: 'flex'}}
             key={movie.imdbID}
             >
             <img 
              alt="avatar" 
              src={movie.Poster} 
              />
             <div 
             className="card-body" 
             style={{background: '#353839', 
             color: 'white'}}
             >
             <div 
               style={{ fontWeight: 'bold', 
               textAlign: 'center' }}
             >
                {movie.Title}
               </div>
             </div>
           </div>
         )))}     
          </div>
        </div>  
    )
}

export default SearchMovies;
