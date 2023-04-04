import React, { useLayoutEffect, useState } from "react";

export default function useWindowSize() {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [isMobile, setIsMobile] = useState(size.width <= 700);

    useLayoutEffect(() => {

      function updateSize() {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        setIsMobile(size.width <= 700)
      }

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    }, [size.width]);

    return {size, isMobile};
  }