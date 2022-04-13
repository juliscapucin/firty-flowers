import { useState, useEffect, useRef } from "react";

// Components
// import CustomCursor from "../components/CustomCursor";
import About from "../components/About";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

// Hooks
// import useScrollTrigger from "../components/hooks/useScrollTrigger";
import useLocoScroll from "../components/hooks/useLocoScroll";

import "../styles/home.scss";

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const refContainer = useRef(null);

  useLocoScroll(!preloader);
  // useScrollTrigger(!preloader);
  // useSmoothScroll(!preloader);

  // runs only in the initial render []
  useEffect(() => {
    if (refContainer) {
      setPreloader(false);
    }
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}
      {preloader ? (
        <div className='loader-wrapper'>
          <h2>Playground Series</h2>
          <h4>Loading images</h4>
        </div>
      ) : (
        <div
          className='main-container'
          ref={refContainer}
          id='main-container'
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
