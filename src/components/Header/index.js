import "./style.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Header() {
  const refHeader1 = useRef(null);
  const refHeader2 = useRef(null);

  useEffect(() => {
    const headers = [refHeader1.current, refHeader2.current];

    gsap.fromTo(
      headers,
      { yPercent: "100" },
      { yPercent: "0", duration: 0.6, stagger: 0.3, delay: 0.5 }
    );
  }, []);

  return (
    <section className='header-container section' data-scroll-section>
      <ul className='header-menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <div className='header-text-container'>
        <h1 className='header-text' ref={refHeader1}>
          Unsplash
        </h1>
      </div>
      <div className='header-text-container'>
        <h1 className='header-text' ref={refHeader2}>
          Scroll
        </h1>
      </div>
    </section>
  );
}
