import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {


  

  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isTrue={true} ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isTrue={false}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isTrue={false}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isTrue={false}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isTrue={false}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isTrue={false}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isTrue={false}></Row>
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} isTrue={false}></Row>
    </div>
  )
}

export default App;


/* https://api.themoviedb.org/3/movie/550?api_key=fa3230ddf274da188b9eed9076dd4956
*/