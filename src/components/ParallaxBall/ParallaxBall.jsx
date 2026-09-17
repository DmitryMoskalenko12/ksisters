import { motion, useSpring, useTransform } from "framer-motion";
import "./ParallaxBall.scss";

const ParallaxBall = ({
  ball,
  scrollYProgress,
  disableParallax = false,
}) => {
  const movement = 180 * ball.depth;

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-movement, 0, movement],
  );

  const smoothY = useSpring(y, {
    stiffness: 70,
    damping: 20,
    mass: 0.8,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1 - ball.depth * 0.04, 1],
  );

  return (
    <motion.div
      className="parallax-ball-wrapper"
      style={{
        left: `${ball.x}%`,
        top: `${ball.y}%`,
        y: disableParallax ? 0 : smoothY,
      }}
    >
      <motion.div
        className="parallax-ball"
        style={{
          "--ball-size": `${ball.size}px`,
          "--ball-blur": `${ball.blur ?? 0}px`,
          scale: disableParallax ? 1 : scale,
        }}
      >
        {ball.isMain && (
          <span className="parallax-ball-text">
            <img src="/logo.png" alt="Logo" />
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ParallaxBall;