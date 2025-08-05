import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css/pagination';


import { Link } from "react-router-dom";
import { useSlideInOnView } from "../../hooks/useSlideInOnView";
import "./Projects.css";
import { projetos } from "./projectsData";
import {icones} from '../Tecnologies/icones';




export default function Projects() {
  const ref = useSlideInOnView("slide-in", { threshold: 0.2 });



  return (
    <div className="projects_container" id="projects">
      <div className="projects_titulo_container">
        <h2 ref={ref} className="slide-in">
          Projetos
        </h2>
      </div>
      <div className="projects_lista_container">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
            1150: {
              slidesPerView: 3,
            },

          }}
          className="projects_carousel"
        >

          {projetos.map((projeto, index) => (
             <SwiperSlide key={projeto.id}>
              <Link to={`/project/${projeto.id}`} key={`${projeto.id}-link-${index}`} className='project_link' >
                <div key={`${projeto.id}-${index}`} className="project_item">
                  <h3 className="nome_projeto" >{projeto.nome}</h3>
                  <img
                    src={projeto.imagem}
                    alt={`Preview do projeto ${projeto.nome}`}
                    className="project_preview"
                  />
                  <div className="container_icone_projeto">
                    {icones.map((icone, index) => (
                      projeto.tags.split(',').map(tag => tag.trim()).includes(icone.nome) && 
                        <img key={`${projeto.id}-${index}`} className="icone_projeto" src={icone.url} alt={icone.nome}/>
                    ))}
                  </div>
                  <p className="projects_sabermais" >Saiba mais</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
