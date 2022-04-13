import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function useSrollTrigger(start) {
  useEffect(() => {
    const gallery = document.querySelector(".gallery-wrapper");

    if (typeof gallery != "undefined" && gallery != null) {
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: gallery,
          markers: false,
          scrub: 2,
          pin: true,
          snap: 1 / (sections.length - 1),
          start: "20px 5%",
          end: () => "+=" + gallery.offsetWidth,
        },
      });
    }
    ScrollTrigger.refresh();
  }, [start]);
}

export default useSrollTrigger;
