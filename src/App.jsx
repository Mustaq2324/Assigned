import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Looks from './components/Looks'
import Story from './components/Story'
import TitaniumImage from './components/TitaniumImage'
import Chip from './components/Chip'
const App = () => {
  return (
    <>
      <Navbar />
    <div className='bg-[#101010] ' style={{ scrollBehavior: 'smooth' }}> 
      <Hero />
      <Highlight/>
      <Looks/>
      <Story/>
      <TitaniumImage/>
      <Chip/>
    </div>
    </>
  )
}

export default App