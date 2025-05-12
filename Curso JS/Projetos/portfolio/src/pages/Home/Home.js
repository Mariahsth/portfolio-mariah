import './Home.css';
import fotoMariah from '../../assets/mariah_home.jpg'
import circuloColorido from '../../assets/circulo_colorido.png'
import { AiOutlineLinkedin, AiOutlineGithub   } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import { useEffect, useState } from 'react';




export default function Home() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 14000); 
  
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='home_container' id='home'>
        <div className='home_foto_container'>
          <img className="foto_circulo" src={circuloColorido} alt="foto de um círculo colorido" />
          <img className="foto_mariah" src={fotoMariah} alt="foto de Mariah" />
        </div>
        <div className='home_nome_botoes_container'>
          <h1 key={animationKey} className="typewriter_container_loop">
            <span className="typewriter linha1">&lt;Mariah</span>
            <br />
            <span className="typewriter linha2">Hoffmann/&gt;</span>
          </h1>
          <div className="home_botoes">
                  <a className="botao" href="https://instagram.com/mariahsilveirath"><RiInstagramLine    className='icone' /> Instagram</a>
                  <a className="botao" href="https://www.linkedin.com/in/mariah-silveira-tagliari-hoffmann-9a067914a/"><AiOutlineLinkedin className='icone'/> Linkedin</a>
                  <a className="botao" href="https://github.com/Mariahsth"><AiOutlineGithub className='icone'/>  Github</a>
              </div>
        </div>
      </div>
        <AboutMe/>
        <Projects/>


    </>
  );
}

