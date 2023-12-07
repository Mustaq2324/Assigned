import React from 'react'
import img from "../assets/images/Looks.jpg"

const Looks = () => {
  return (
    <section className='flex flex-col gap-3'>
        <h1 className='text-[#86868B]'>Take a closer look.</h1>
        <img src={img} alt="iphone" className='ps-60 w-fit h-96' />
    </section>
  )
}

export default Looks