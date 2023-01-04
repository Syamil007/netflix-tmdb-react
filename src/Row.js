import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';



const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isTrue}) {

  const [movie, setMovie] = useState([]);
  const[trailer_url, set_trailer]= useState("");

  useEffect(()=> {
  
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        
        setMovie(request.data.results);
        return request;
    }
    fetchData();
  },[fetchUrl]);


  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },

  };

  

  const handle_Click = (movie) => {
        if(trailer_url){
              set_trailer("");
              
        } else{
          // movie.original_name || movie.name || movie.title || ''
          movieTrailer(movie.original_name || movie.title || movie.name || '')
  .then( (url) => {
      console.log(url);
      console.log(movie);
      console.log(movie.original_name);
      const urlParam =new URLSearchParams( new URL(url).search);
      set_trailer(urlParam.get('v'));
      console.log(urlParam.get('v'));
      
        }).catch((error)=> console.log(error));
  
        }
  };

  

  return (
    <div className='row' >
        <h2 className='title'>{title}</h2>

        <div className='row_posters'>
            {movie.map((m)=> (
                <img key={m.id} 
                onClick = {()=> handle_Click(m)}
                className={isTrue ? 'row_poster_large' : 'row_poster'} src ={isTrue ? `${baseUrl}${m.poster_path}` : `${baseUrl}${m.backdrop_path}`} alt={m.name} />
            ))}
            </div>
              {trailer_url && <YouTube videoId={trailer_url} opts = {opts}/>}
    </div>
  )
}

export default Row