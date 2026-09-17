import { useScroll } from "framer-motion";
import { useRef } from "react";
import ParallaxContent from "../../components/ParallaxContent/ParallaxContent";
import ParallaxBall from "../../components/ParallaxBall/ParallaxBall";
import "./HeroSection.scss";

const BALLS = [
  {
    id: 1,
    size: 70,
    x: 78,
    y: 12,
    depth: 0.25,
  },
  {
    id: 2,
    size: 70,
    x: 83,
    y: 23,
    depth: 0.4,
  },

  {
    id: 4,
    size: 180,
    x: 15,
    y: 73,
    depth: 0.7,
    blur: 0.5,
    isMain: true,
  },
  {
    id: 5,
    size: 80,
    x: 30,
    y: 87,
    depth: 1,
  },
  {
    id: 6,
    size: 150,
    x: 50,
    y: 80,
    depth: 0.8,
  },
];

const BALLSMOBILE = [
  {
    id: 1,
    size: 25,
    x: 70,
    y: 46,
    depth: 0.25,
  },
  {
    id: 2,
    size: 25,
    x: 74,
    y: 51,
    depth: 0.4,
  },

  {
    id: 4,
    size: 70,
    x: 10,
    y: 75,
    depth: 0.7,
    blur: 0.5,
    isMain: true,
  },
  {
    id: 5,
    size: 25,
    x: 25,
    y: 87,
    depth: 1,
  },
  {
    id: 6,
    size: 60,
    x: 35,
    y: 84,
    depth: 0.8,
  },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const { scrollYProgress } = useScroll({
    target: containerRef,

    offset: ["start end", "end start"],
  });

  return (
    <>
      <section ref={containerRef} className="parallax-section">
        <div className="parallax-background" />

        <div className="container">
          <ParallaxContent scrollYProgress={scrollYProgress} />
          <div className="figure1__wrapper">
            <img src="/figure1.webp" alt="Figure" />
          </div>
          <div className="stand__wrapper">
            <div className="stand">
              <img src="/stand.webp" alt="Stand" />
            </div>
            <div className="cream">
              <img src="/cream.webp" alt="Cream" />
            </div>

            <div className="list3__wrapper">
              <img src="list3.webp" alt="Leaf" />
            </div>
          </div>
        </div>
        <div className="list1__wrapper">
          <img src="list1.webp" alt="Leaf" />
        </div>
        <div className="list2__wrapper">
          <img src="list2.webp" alt="Leaf" />
        </div>
        <div className="bottom__line">
          <img src="/recBottom.webp" alt="Line" />
        </div>
        <div className="figure2__wrapper">
          <img src="/figure2.webp" alt="Figure" />
        </div>
               <div className="parallax-balls">
          {isMobile
            ? BALLSMOBILE.map((ball) => (
                <ParallaxBall
                  key={ball.id}
                  ball={ball}
                  scrollYProgress={scrollYProgress}
                  disableParallax={isMobile}
                />
              ))
            : BALLS.map((ball) => (
                <ParallaxBall
                  key={ball.id}
                  ball={ball}
                  scrollYProgress={scrollYProgress}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
