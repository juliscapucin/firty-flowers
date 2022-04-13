import "./style.scss";
import SectionTitle from "../SectionTitle";

import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import useIntersect from "../hooks/useIntersect";

const textString =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, consequatur et. Nihil nemo ipsa minima a facilis corrupti iure quam neque, vitae soluta natus. Enim praesentium placeat esse reiciendis voluptates! Nihil nemo ipsa minima a facilis corrupti iure quam neque, vitae soluta natus.";

export default function Footer() {
  const refParagraph = useRef(null);
  const refSection = useRef(null);
  const [reveal, setReveal] = useState(false);
  const [text] = useState(textString);
  const intersect = useIntersect(refParagraph);

  // split text in words and wrap each one in <span></span>
  useEffect(() => {
    let splitText = text.split(" ").join(" </span><span>");

    const finalText = `<span>${splitText}</span>`;

    refParagraph.current.innerHTML = finalText;
  }, [text]);

  // check if element is intersecting
  useEffect(() => {
    if (intersect) {
      setReveal(true);
    }
  }, [intersect]);

  // apply animation
  useEffect(() => {
    if (reveal) {
      const words = [...refSection.current.querySelectorAll("span")];

      gsap.set(words, { autoAlpha: 0 });
      gsap.fromTo(
        words,
        { autoAlpha: 0, yPercent: "50" },
        {
          autoAlpha: 1,
          yPercent: "0",
          duration: 0.4,
          stagger: 0.02,
          delay: 1,
        }
      );
    }
  }, [reveal]);

  return (
    <section
      className='footer-section section'
      ref={refSection}
      data-scroll-section
    >
      <SectionTitle title='Made by' />
      <h1>Juli Scapucin</h1>
      <p className='footer-text' ref={refParagraph}></p>
    </section>
  );
}
