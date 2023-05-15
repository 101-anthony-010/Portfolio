import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Fronted Developer'], 
      typeSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return <span ref={typedRef}></span>
};

export default TypingAnimation;
