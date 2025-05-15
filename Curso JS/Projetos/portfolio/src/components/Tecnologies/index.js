import "./Tecnologies.css";
import { useSlideInOnView } from "../../hooks/useSlideInOnView.js";
import { motion } from "framer-motion";
import { icones } from './icones.js';
import { useInView } from 'react-intersection-observer';

export default function Tecnologies() {
  const slideInRef = useSlideInOnView("slide-in", { threshold: 0.1 });

  const { ref: iconsRef, inView: iconsInView } = useInView({ threshold: 0.1 });

  return (
    <div className="tecnologias_container" id="tecnologies">
      <div>
        <h2 ref={slideInRef} className="slide-in">
          Tecnologias
        </h2>
      </div>

      <div ref={iconsRef} className="sliderWrapper">
        {iconsInView && (
          <motion.div
            className="slider tecnologias_icones_container"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {[...icones, ...icones].map((icone, index) => (
              <img
                className="icone_tecnologias"
                alt={`icone-${icone.nome}`}
                src={icone.url}
                key={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
