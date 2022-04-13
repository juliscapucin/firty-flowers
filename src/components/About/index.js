import "./style.scss";
import SectionTitle from "../SectionTitle";

import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import useIntersect from "../hooks/useIntersect";

const textString =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, consequatur et. Nihil nemo ipsa minima a facilis corrupti iure quam neque, vitae soluta natus. Enim praesentium placeat esse reiciendis voluptates! Nihil nemo ipsa minima a facilis corrupti iure quam neque, vitae soluta natus.";

export default function About() {
  const refParagraph = useRef(null);
  const refSection = useRef(null);
  const [reveal, setReveal] = useState(false);
  const [text] = useState(textString);
  const intersect = useIntersect(refParagraph);

  useEffect(() => {
    let splitText = text.split(" ").join(" </span><span>");

    const finalText = `<span>${splitText}</span>`;

    refParagraph.current.innerHTML = finalText;
  }, [text]);

  useEffect(() => {
    if (intersect) {
      setReveal(true);
    }
  }, [intersect]);

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
      className='about-section section'
      ref={refSection}
      data-scroll-section
    >
      <SectionTitle title='About' />
      <p className='paragraph' ref={refParagraph}></p>
    </section>
  );
}
