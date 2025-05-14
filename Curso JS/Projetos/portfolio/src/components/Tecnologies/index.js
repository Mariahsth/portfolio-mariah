import "./Tecnologies.css";
import { useSlideInOnView } from "../../hooks/useSlideInOnView.js";
import { motion } from "framer-motion";
import {icones} from './icones.js'


export default function Tecnologies() {
  const slideInRef = useSlideInOnView("slide-in", { threshold: 0.1 })
 


  return (
    <div className="tecnologias_container" id="tecnologies">
      <div >
        <h2
        ref={slideInRef} className="slide-in"
        >
          Tecnologias
        </h2>
      </div>

        <motion.div className="slider tecnologias_icones_container" 
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"}}>
            {[...icones, ...icones].map((icone, index) => (
                <img className="icone_tecnologias" alt={`icone-${icone.nome}`} src={icone.url}/>

            ))}
        </motion.div>
    </div>
  );
}
