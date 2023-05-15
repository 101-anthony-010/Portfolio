import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Fronted Developer'], // Aquí puedes agregar los textos que deseas animar
      typeSpeed: 50, // Velocidad de escritura en milisegundos
      loop: true // Si deseas que la animación se repita en un bucle
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Limpia la instancia de Typed.js al desmontar el componente
    };
  }, []);

  return <span ref={typedRef}></span>
};

export default TypingAnimation;
