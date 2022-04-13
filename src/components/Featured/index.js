import gsap from "gsap";
import "./style.scss";
import images from "../../data.js";
import { useRef, useState, useEffect } from "react";
import useIntersect from "../hooks/useIntersect";

export default function Featured() {
  const [firstImage, secondImage] = images;
  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const [reveal, setReveal] = useState(false);
  const intersect = useIntersect(refImage2);

  useEffect(() => {
    if (intersect) {
      setReveal(true);
    }
  }, [intersect]);

  useEffect(() => {
    if (reveal) {
      // console.log(refImage1.current);
      const imgs = [refImage1.current, refImage2.current];
      gsap.set(imgs, { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 });
      gsap.to(imgs, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        stagger: 0.5,
        delay: 0.8,
      });
    }
  }, [reveal]);

  return (
    <section className='featured-section section' data-scroll-section>
      <div className='featured-row-layout'>
        <h4>{firstImage.title}</h4>
        <img src={firstImage.url} alt={firstImage.title} ref={refImage1} />
      </div>
      <div className='featured-column-layout'>
        <h4 className='vertical-text'>{secondImage.title}</h4>
        <img src={secondImage.url} alt={secondImage.title} ref={refImage2} />
      </div>
    </section>
  );
}
