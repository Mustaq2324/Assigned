import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import video from "../assets/videos/4k.mp4";

const Highlight = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playAndPause = async () => {
      try {
        await videoElement.play();
        setTimeout(() => {
          videoElement.pause();
        }, 30000);
      } catch (error) {
        console.error('Error playing the video:', error);
      }
    };

    playAndPause();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <section>
      <div className='flex justify-between'>
        <h1 className='text-[#86868B]'>Get the highlights.</h1>

        <div className='flex gap-8'>
          <h1 className='text-[#278BEA]'>Watch the film <FontAwesomeIcon icon={faPlayCircle} style={{ color: '#278BEA' }} /></h1>
          <h1 className='text-[#278BEA]'>Watch the events </h1>
        </div>

      </div>
      {/* <video width="1200" height="300" autoPlay muted loop ref={videoRef} className='ps-24 pt-8'>
        <source src={video} type="video/mp4" />

      </video> */}
    </section>
  );
}

export default Highlight;
