import React, { useState, useEffect } from 'react';
import './Movie.css';
import MovieList from './MovieList';
import SearchMovies from './SearchMovies.js';

function Movie() {
    //let username = props.location.username;
    const variable = localStorage.getItem('userName');
    //console.log(localStorage.getItem('userName'));
    const [movies , setMovies] = useState([]);
    const fun = async ()=>{
        const result = await fetch('http://www.omdbapi.com/?s=Zindagi&apikey=263d22d8');
        const json = await result.json();
        //console.log(json)
        setMovies(json.Search);
    }
    useEffect(()=>{
        fun();
    },[]);
    return (
        <>
        <div className= 'movie-header'>
            <img
            className='movie-icon' 
            src='https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-movie-icon-%E2%80%93-stock-vector.jpg' 
            alt='sdsddfsd'
            />
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Movies App
                    </span>
                    <span className='header_optionLineTwo'>
                        Search Your Favourite Movies Here....
                    </span>
                </div>
        </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello {variable}
                    </span>
                    <span className='header_optionLineTwo'>
                        Welcome to this amazing Movie App
                    </span>
                </div>
        </div>
    </div>
    <div className = 'search-movie-container'>
        <SearchMovies/>
    </div>
    <h2 style= {{marginRight: '10px', marginLeft: '20px', marginTop: '100px'}}> Recommended Movies</h2>
    <div className= 'movies-display'>   
            <MovieList movies = {movies}/>
        </div>
    </>
    )
}
export default Movie;
