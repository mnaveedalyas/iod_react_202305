import { useState } from "react";


function MoviesListReverse() {
  
  // collection of objects representing movies
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map(movie => (
    <Movie key={movie.id} title={movie.title}
    year={movie.year} synopsis={movie.synopsis}/>
  ))
  
  function Movie({title, year, synopsis}) {
    return (
      
      <li> 
        <h3>{title}</h3> <span>({year})</span>
        <div>{synopsis}</div>
      </li>
    )
  }

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  }

  return (
    <div className="MoviesList">
      <ul>
      { movieItems }
      </ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
    </div>
  )
}
// ++ Try adding buttons to sort by year and by title
// ++ Try extracting a SortButton component to replace the above

export default MoviesListReverse;