import React from 'react'
import  Header  from '../components/Header'
import Features from '../components/Features'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FeaturedCourses from '../components/FeaturedCourses'



const Home = () => {
  return (
    <>

    <div>
      <Header/>
      <Details/>
      <Features/>
      <FeaturedCourses/>
      <Footer/>
    </div>
    </>
  )
}

export default Home