import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Looks from './components/Looks'
import Story from './components/Story'
import TitaniumImage from './components/TitaniumImage'
const App = () => {
  return (
    <>
      <Navbar />
    <div className='bg-black p-16' style={{ scrollBehavior: 'smooth' }}> 
      <Hero />
      <Highlight/>
      <Looks/>
      <Story/>
      <TitaniumImage/>
    </div>
    </>
  )
}

export default App