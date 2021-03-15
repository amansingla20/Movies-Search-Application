const Movies = props => {
    return (
        <>
        <br/>
        <br/>
        <div 
        className="card" 
        style={{width: '17rem', margin: '2rem'}}
        >
        <img 
         alt="avatar" 
         src={props.Poster} 
         style={{width: '100%'}}
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
            {props.Title}
          </div>
        </div>
      </div>
      </>
    )
  }
  export default Movies;