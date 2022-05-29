import React, { useState, useEffect } from 'react';
import './App.css';
import {search} from './searchicon.jsx'
import Moviebox from './Moviebox';

const Api_url="http://www.omdbapi.com?apikey=8c7dfcbe";

const movie1={
 "Poster":"N/A",
"Poster1": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
"Title": "Hollywood's Master Storytellers: Spiderman Live",
"Type": "movie",
"Year": "2006",
"imdbID": "tt2158533"
}

function App() {

     const [movies, setMovies]= useState([]);
     const [searchterm, setSearchterm]=useState('');
   
     const searchmovies= async(title)=>{
      const  response=await fetch(`${Api_url}&s=${title}`);
      const data= await response.json();

       setMovies(data.Search);
     }

  useEffect(()=>{
       searchmovies("spiderman");
  },[])

  return ( 
    <div className="app">
      <h1>Bucx-Movies</h1>

      <div className="searchdiv">
        <input type="search" className='search' name="" id="" value={searchterm} placeholder='search movies' onChange={(e)=> setSearchterm(e.target.value)}/>
         <span className="searchlogo" onClick={()=>searchmovies(searchterm)}>{search}</span>
      </div>

      {movies.length > 0 
        ? (
      <div className="container">
          {movies.map((movie)=>(
          <Moviebox movie={movie}/>
          ))}     
      </div>
        ) :(
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

    </div>
   );
}

export default App;