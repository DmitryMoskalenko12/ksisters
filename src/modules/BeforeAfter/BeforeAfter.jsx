import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import "./BeforeAfter.scss";

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};


export default function BeforeAfter() {

  const containerRef = useRef(null);

  const slider = useMotionValue(0.5);
  const smoothSlider = useSpring(slider, {
    stiffness: 300,
    damping: 35,
    mass: 0.25,
  });

  const sliderLeft = useTransform(
    smoothSlider,
    [0, 1],
    ["0%", "100%"]
  );
  const beforeClip = useTransform(
    smoothSlider,
    [0, 1],
    [
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
    ]
  );


  const updateSlider = (event) => {

    const container = containerRef.current;

    if (!container) {
      return;
    }

    const rect =
      container.getBoundingClientRect();
    const x =
      event.clientX - rect.left;
    const percentage =
      x / rect.width;
    const value = clamp(
      percentage,
      0,
      1
    );
    slider.set(value);
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    updateSlider(event);
  };

  const handlePointerMove = (event) => {
    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {

      updateSlider(event);
    }
  };

  const handlePointerUp = (event) => {
    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {

      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }
  };


  return (
    <section className="before-after-section">

      <div className="before-after-container">

        <div className="list-top">
          <img
            src="/listAfterBeforeTop.webp"
            alt="Decore"
          />
        </div>

        <div className="list-bottom">
          <img
            src="/listAfterBeforeBottom.webp"
            alt="Decore"
          />
        </div>

        <motion.h2
          className="before-after-title"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Помічаєш перші ознаки{" "}

          <br className="br"/>

          вікових змін?
        </motion.h2>

        <div className="before-after-layout">

          <div className="before-after-info">

            <motion.div
              className="
                info-card
                info-card--white
              "
              initial={{
                opacity: 0,
                x: -80,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}

              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p>
                Зниження пружності, поява тонких ліній, сухість і відчуття стягнутості можуть робити обличчя більш втомленим і тьмяним на вигляд.
              </p>

              <span className="info-icon">
                <img src="/smile.png" alt="Smile" />
              </span>

            </motion.div>

            <motion.div
              className="
                info-card
                info-card--green
              "
              initial={{
                opacity: 0,
                x: -80,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p>
                Peptide-Tox Bor Cream допомагає підтримувати комфортний стан шкіри та дарує їй комплексний догляд. Насичена формула з 5 видами пептидів і комплексом керамідів сприяє більш гладенькому й пружному вигляду, підтримує оптимальний рівень зволоження та допомагає зберігати гідроліпідний баланс. Обличчя виглядає більш свіжим, відпочилим і доглянутим.
              </p>

              <div className="info-icon">
                <img src="/star.png" alt="Star" />
              </div>

            </motion.div>

          </div>

          <motion.div
            ref={containerRef}
            className="before-after"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
              amount: 0.25,
            }}

            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >

            <div
              className="
                before-after-image
                after-image
              "
            >

              <img
                src="/after.webp"
                alt="Шкіра після"
                draggable="false"
              />
              <div className="logoAfter">
                <img src="/afterLogo.png" alt="" />
              </div>
            </div>

            <motion.div
              className="
                before-after-image
                before-image
              "
              style={{
                clipPath: beforeClip,
              }}
            >

              <img
                src="/before.webp"
                alt="Шкіра до"
                draggable="false"
              />

            </motion.div>

            <motion.div
              className="before-after-slider"
              style={{
                left: sliderLeft,
              }}
            >
              <div className="slider-line" />

              <motion.div
                className="slider-handle"
                whileTap={{
                  scale: 1.12,
                }}
              >
                <span />
                <span />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}