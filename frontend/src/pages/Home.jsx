import React from 'react'
import Banner from '../components/Banner'
import Events from '../components/Events/Events'
import AboutISDIA from '../components/AboutISDIA'
import AboutUOWD from '../components/AboutUOWD'
import AboutHivePro from '../components/AboutHivePro'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import Countries from '../components/Countries'
import Conference from '../components/Conference'
import SlilderBar from '../components/SlilderBar'
import Footer from '../components/Footer'
import AboutAaquarians from '../components/AboutAaquarians'

const Home = () => {
  return (
    <div className='w-full h-screen'>
     <Banner/> 
     <Events/>
     <AboutISDIA/>
     <AboutUOWD/>
     <AboutHivePro/>
     <AboutAaquarians/>
     <Countries/>
     <Conference/>
     <SlilderBar/>
     <Footer/>
    </div>
  )
}

export default Home
