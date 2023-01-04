import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import './banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



function Banner() {

    const [movie, setMovie]= useState([]);
    const [trailer, settrailer]= useState('');

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            const rand = Math.floor(Math.random()*request.data.results.length);
            setMovie(request.data.results[rand]);
            
            
            return request;
        }
  

        fetchData();

    },[]);

    const opts = {
      height: "500",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
  
    };
    
    const banner_play=(movie)=>{
      if(trailer){
        settrailer("");
        
  } else{
    // movie.original_name || movie.name || movie.title || ''
    movieTrailer(movie.original_name || movie.title || movie.name || '')
.then( (url) => {
console.log(url);
console.log(movie);
console.log(movie.original_name);
const urlParam =new URLSearchParams( new URL(url).search);
settrailer(urlParam.get('v'));
console.log(urlParam.get('v'));

  }).catch((error)=> console.log(error));

  }

    };

    const end=()=>{
      settrailer('');
      console.log(trailer);
    };


    console.log(movie);

  return (
    <div>
    {trailer? <div><YouTube className='utube' videoId={trailer} onClick={()=>end()}  id='myVideo' opts = {opts}/><button className='end' onClick={()=>end()}>x</button></div> : <header className='banner' 
    style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
}} onClick={()=> banner_play(movie)} > {/* <---put a background image */}
        <div className='banner_contents'>
        <h1 className='movie_name'>{movie.name}</h1>

        <div className='banner_buttons'>
          <button className='banner_button' onClick={()=> banner_play(movie)}>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <h1 className='overview'>{movie.overview}</h1>
        </div>
        
        <div className='banner_fade'/>
        {/* tittle */}
        {/* div -> 2 column */}
        {/* description */}
    </header>}
    {/* {trailer && <YouTube videoId={trailer} opts = {opts}/>} */}
    </div>
  )
}

export default Banner