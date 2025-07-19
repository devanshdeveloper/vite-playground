import {  useRef } from 'react';
import { gsap } from 'gsap';
import useGSAP from '../shared/hooks/useGSAP';

function HeadingAnimation() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.heading', {
      y: 20,
      duration: 0.5,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.1
    });
  }, { scope: containerRef });


  return (
    <div ref={containerRef}>
      <h1 className="heading">Take me back</h1>
      <h1 className="heading">Take me back 2</h1>
      <h1 className="heading">Take me back 3</h1>
      <h1 className="heading">Take me back 4</h1>
      <h1 className="heading">Take me back 5</h1>

      {/* …you could have more .heading elements here… */}
    </div>
  );
}

export default HeadingAnimation;
