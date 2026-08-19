import { motion, useTransform } from "framer-motion";
import "./ParallaxContent.scss";

const ParallaxContent = ({ scrollYProgress }) => {
  const buttonY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <div className="parallax-content">
      <div className="parallax-label">корейська косметика | 100% Оригінал</div>

      <h1 className="title">
        Ліфтинг-крем для обличчя Peptide Tox Bor Cream — для пружної та
        гладенької шкіри.
      </h1>

      <p className="text">
        Допомагає розгладити видимість зморшок і підтримує оптимальний
        гідроліпідний баланс. Шкіра виглядає більш гладенькою, зволоженою та
        доглянутою вже після перших етапів догляду.
      </p>

      <motion.button
        style={{
          y: buttonY,
          opacity: buttonOpacity,
        }}
      >
        ДОДАТИ ДО КОШИКА
      </motion.button>
    </div>
  );
};

export default ParallaxContent;
