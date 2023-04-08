import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Feature from '../../components/features/Feature'
import requests from '../../request'

const Home = () => {
  return (
    <div className='home'>

        <Navbar />
       <Banner />
       <Feature title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
       <Feature title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Feature title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Feature title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Feature title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
       <Feature title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Feature title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Feature title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


      

    </div>
  )
}

export default Home