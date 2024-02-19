import React from "react";
import "./Homescreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Request";
import Row from "../Row";
// console.log(requests);
function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX_ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} /> */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Homescreen;
