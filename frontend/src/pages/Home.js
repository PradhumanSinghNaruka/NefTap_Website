import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Naptap from '../components/Naptap'
import Video from '../components/Video'
import Steps from '../components/Steps'
import Questions from '../components/Questions'
// import Animation from '../components/Animation'
import Detail from '../components/Detail'
import Ready from "../components/Ready"

function Home() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Banner /> 
        <Cards/>
        <Naptap/>
        <Steps/>
        <Questions/>
        <Video/> 
        <Ready/>
        <Detail/>
      </div>
    </>
  )
}

export default Home
