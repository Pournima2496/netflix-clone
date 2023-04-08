import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'


const Home = () => {
  return (
    <div className='home'>

        <Navbar />
       <Banner />
    </div>
  )
}

export default Home