import React, { useState, useEffect } from 'react';
import Main from './Main';
export default function MovieCard() {
    const [movies, setMovies] = useState([]);
  
    const bondMovies = async () => {
     const response = await fetch('http://www.omdbapi.com/?s=star+wars&type=movie&apikey=c0e51189');
      const data = await response.json();
      const movieArray = data.Search; 
      setMovies(movieArray);
    };
    console.log(movies)
  
    useEffect(() => {
        bondMovies();
    }, []);
  
    return (
      <>
        {movies.map((item, index) => (
          <Main key={index} img={item.Poster} title={item.Title} year={item.Year} />
        ))}
      </>
    );
  }