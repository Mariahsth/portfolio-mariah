import './Home.css';
import fotoMariah from '../../assets/mariah_home4.jpg'
import { AiOutlineLinkedin, AiOutlineGithub   } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import { useEffect, useState } from 'react';
import Tecnologies from '../../components/Tecnologies';
import Header from '../../components/Header/index'



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
      <Header/>
      <div className='home_container' id='home'>
        <div className='container_foto_texto'>
          <div className='home_foto_container'>
            <img className="foto_mariah" src={fotoMariah} alt="foto de Mariah" />
          </div>
          <div className='container_textos'>
            <h1 key={animationKey} className="typewriter_container_loop">
              <span className="typewriter linha1">&lt;Mariah</span>
              <br />
              <span className="typewriter linha2">Hoffmann/&gt;</span>
            </h1>
            <h3>Desenvolvedora web</h3>

          </div>
        </div>
        <div className="home_botoes">
                  <a className="botao" href="https://instagram.com/mariahsilveirath"><RiInstagramLine    className='icone' /> Instagram</a>
                  <a className="botao" href="https://www.linkedin.com/in/mariah-hoffmann/"><AiOutlineLinkedin className='icone'/> Linkedin</a>
                  <a className="botao" href="https://github.com/Mariahsth"><AiOutlineGithub className='icone'/>  Github</a>
        </div>
      </div>
        <AboutMe/>
        <Tecnologies/>
        <Projects/>


    </>
  );
}

