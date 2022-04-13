import "./style.scss";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// import useScrollTrigger from "../hooks/useScrollTrigger";
import useIntersect from "../hooks/useIntersect";
gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    id: 1,
    name: "Zhanjiang Chen",
    category: "outdoor",
    url: "https://unsplash.com/@joegeek",
    img: "https://images.unsplash.com/photo-1623207613517-afe2e80e5d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2785&q=80",
    desc: "I scan my own film. SONY A7iii / Contax G2 / Mamiya 6. Based in Toronto. Instagram: @joegeek",
  },
  {
    id: 2,
    name: "Irene Kredenets",
    category: "still",
    url: "https://unsplash.com/@ikredenets",
    img: "https://images.unsplash.com/photo-1569704948783-26415e781c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2506&q=80",
    desc: "Download free, beautiful high-quality photos curated by Irene. Instagram: @ikredenets",
  },
  {
    id: 3,
    name: "sour moha",
    category: "people",
    url: "https://unsplash.com/@sour_moha",
    img: "https://images.unsplash.com/photo-1634309358950-a304727607ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80",
    desc: "Photography is my true passion. I find myself in. creative portraits, darkside and dimensions, everything now draws me to a deep feeling of connection to art.",
  },
  {
    id: 4,
    name: "Sappho Bakker",
    category: "outdoor",
    url: "https://unsplash.com/@sapphodb",
    img: "https://images.unsplash.com/photo-1622465791213-ceb53325aa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2310&q=80",
    desc: "Architecture, nature, portrait, color and black & white. Download free, beautiful high-quality photos curated by Sappho. Instagram: @photography.sdb",
  },
  {
    id: 5,
    name: "Cesar La Rosa",
    category: "people",
    url: "https://unsplash.com/@obcesar",
    img: "https://images.unsplash.com/photo-1635877950654-990aa4f65bab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    desc: "Creative Director / Fashion Photographer | Look at the rest of my work or mention me on any social network as @caesarlarosa Venezuelan",
  },
  {
    id: 6,
    name: "Mae Mu",
    category: "still",
    url: "https://unsplash.com/@picoftasty",
    img: "https://images.unsplash.com/photo-1560052859-7deb492b0baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2903&q=80",
    desc: "Keep track of my latest projects, all things about food photography & food stylist here: ins@picoftasty. Website: www.picoftasty.com | Email for Collabs or Business Inquires.",
  },
  {
    id: 7,
    name: "Elena Obilets",
    category: "outdoor",
    url: "https://unsplash.com/@indie4ever",
    img: "https://images.unsplash.com/photo-1637342938338-dd0477f70632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    desc: "Download free, beautiful high-quality photos curated by Elena. Website: www.obilets.com | Based in Ukraine",
  },
  {
    id: 8,
    name: "Raphael Nast",
    category: "people",
    url: "https://unsplash.com/@apollon",
    img: "https://images.unsplash.com/photo-1596690097631-654fad9ffd3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    desc: "I am a freelance- filmmaker and photographer living in Austria. Contact me via my website for inquiries. Website: www.steadymotion.at",
  },
  {
    id: 9,
    name: "Jazmin Quaynor",
    category: "still",
    url: "https://unsplash.com/@jazminantoinette",
    img: "https://images.unsplash.com/photo-1614053622765-81c37c617c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2268&q=80",
    desc: "I like to make stuff. Instagram: @jazminantoinette | Website: www.jazminquaynor.com",
  },
];

function GalleryItem({
  id,
  name,
  category,
  url,
  img,
  desc,
  index,
  updateActiveImage,
}) {
  const refItems = useRef(null);
  // const [reveal, setReveal] = useState(false);
  const intersect = useIntersect(refItems);

  useEffect(() => {
    if (intersect) {
      // setReveal(true);
      updateActiveImage(index);
    }
  }, [intersect, updateActiveImage, index]);

  // useEffect(() => {
  //   if (reveal) {
  //     gsap.set(refItem.current, { autoAlpha: 0 });
  //     gsap.fromTo(
  //       refItem.current,
  //       { autoAlpha: 0, yPercent: "50" },
  //       { autoAlpha: 1, yPercent: "0", duration: 0.4, stagger: 0.02 }
  //     );
  //   }
  // }, [reveal]);

  return (
    <section className='gallery-item-wrapper' ref={refItems}>
      <div className='gallery-item'>
        <div className='gallery-item-img'>
          <img src={img} alt={name} />
        </div>
        <div className='gallery-item-info'>
          <h1 className='gallery-info-title'>{name}</h1>
          <h4 className='gallery-info-subtitle'>{desc}</h4>
          <p className='gallery-info-category'>{category}</p>
        </div>
      </div>
    </section>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);
  const refBg = useRef(null);
  const refGallery = useRef(null);

  useEffect(() => {
    const gallerySize = () => {
      refGallery.current.style.width = `${images.length * 100}%`;
    };
    gallerySize();

    setTimeout(() => {
      const sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          // start: "top top",
          scroller: "[data-scroll-container]",
          trigger: refBg.current,
          scrub: 0.5,
          pin: true,
          // snap: 1 / (sections.length - 1),
          start: "top 10px",
          end: () => "+=" + refBg.current.offsetWidth,
        },
      });

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section className='section-wrapper gallery-wrapper' data-scroll-section>
      <div className='gallery-bg' ref={refBg}>
        <div className='gallery-counter'>
          <p>
            {activeImage} / {images.length}
          </p>
        </div>
        <div className='gallery' ref={refGallery}>
          {images.map((image, index) => {
            return (
              <GalleryItem
                key={image.id}
                index={index}
                {...image}
                updateActiveImage={(index) => {
                  setActiveImage(index + 1);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
