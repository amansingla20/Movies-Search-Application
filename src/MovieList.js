import Movies from './Movies';
import './Movies.css';
function printMovies(movies) {
    if (movies === undefined) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <>
            {movies.map((movie , index) => (
                <Movies key={index} {...movie} />
            ))}
            </>
        )
    }
}

const MovieList = props => {
    //console.log(props);
    return(
    <div className='movie-container'>
        {printMovies(props.movies)}
    </div>
  )
}
export default MovieList;