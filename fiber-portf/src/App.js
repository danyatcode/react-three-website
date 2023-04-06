import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Azumi3 from "./components/canvas/Azumi3"

function App() {

  useEffect(() => {

    function handleScroll(){
      const elements = document.querySelectorAll(".fade-in");

      const fadeInOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px',
      };

      const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if(entry.target.classList.contains('fade-300')){
              setTimeout(()=> entry.target.classList.add("fade-in-animation"), 600)
            }
            if(entry.target.classList.contains('fade-600')){
              setTimeout(()=> entry.target.classList.add("fade-in-animation"), 1000)
            }
            else{
              entry.target.classList.add("fade-in-animation");
            }
            observer.unobserve(entry.target);
          }
        });
      }, fadeInOptions);
  
      elements.forEach((element) => {
        fadeInObserver.observe(element);
      });

    }

    document.addEventListener(`scroll`, handleScroll, { passive: true });
   
    return () => {
      document.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);


  return (
    <>
    {
    <div className="relative z-0 app w-full m-auto">
      <HashRouter>
        <Header />
        <Routes>
          <Route path={`/`} element={<Home />}/>
          <Route path={`models/:modelId`} element={<Azumi3 />}/>
        </Routes>
          
      </HashRouter>
    </div>
    } 
    </>
    
  );
}

export default App;
