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
        <ul className="projects_lista">
          {projetos.map((projeto, index) => (
            <Link to={`/project/${projeto.id}`} key={`${projeto.id}-link-${index}`} className='project_link' >
              <li key={`${projeto.id}-li-${index}`} className="project_item">
                <h3 className="nome_projeto" >{projeto.nome}</h3>
                <img
                  src={projeto.imagem}
                  alt={`Preview do projeto ${projeto.nome}`}
                  className="project_preview"
                />
                <div className="container_icone_projeto">
                  {icones.map((icone, index) => (
                    projeto.tags.includes(icone.nome) && 
                      <img key={`${projeto.id}-${index}`} className="icone_projeto" src={icone.url} alt={`icone de ${icone.nome}`}/>
                  ))}
                </div>
                <p className="projects_sabermais" >Saiba mais</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
