import { init } from 'ityped';
import './home.scss';
import { useEffect, useRef } from 'react';

export const Home = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['Front End Developer', 'UX Designer', 'IT Consultant'],
      //typeSpeed:  100,
      backDelay:  1500,
      backSpeed: 60,
    });
  }, [])

  return (
    <div className='home' id='home'>
      <div className="wrapper">
          <h2 className="h2">Hey there, I'm</h2>
          <h1 className="h1">PK Owusu-Ansah</h1>
          <h3 className="h3">And I'm a <span ref={textRef}></span></h3>
      </div>
      <a href="#work">
        <img src="assets/arrowd.png" alt="" />
      </a>
    </div>
  )
}
