import React from 'react'

function Camera() {
  return (
    <div className='bg-[#000000] pb-10 pt-36 flex flex-col items-center justify-center px-4 lg:px-0'>
        <div className='flex flex-col gap-8 text-center '>
        <h1 className='lg:text-7xl text-4xl font-bold text-white lg:w-[1000px] '> A camera that captures your wildest imagination.</h1>
        <p className='text-[#86868B]  text-xl lg:text-3xl lg:w-[1000px]'>From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
        </div>
        <div>
            <img src="https://www.apple.com/v/iphone-15-pro/c/images/overview/camera/camera__bo5k5tfk6cmu_large.jpg" alt="" />
            <p className='text-[#86868B] lg:w-[700px] mx-auto text-xl'>A detailed photo of a green iguana, captured with the 48MP Main camera on iPhone 15 Pro camera
A green iguana, captured by the 48MP Main camera</p>
        </div>
    </div>
  )
}
export default Camera