import AboutProj from "./components/AboutProj";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ModelsSection from "./components/ModelsSection";

function App() {
  return (
    <div className="relative z-0 app w-full m-auto">
        <Header />
        <Intro />
        <Hero />
        <AboutProj />
        <ModelsSection />
    </div>
  );
}

export default App;
