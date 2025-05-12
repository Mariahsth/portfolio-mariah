import { useSlideInOnView } from "../../hooks/useSlideInOnView";
import "./Projects.css";
import { projetos } from "./projectsData";
export default function Projects() {
  const ref = useSlideInOnView("slide-in", { threshold: 0.2 });

  return (
    <div className="projects_container" id="projects">
      <div className="projects_titulo_container">
        <h2 ref={ref} className="slide-in">
          Projects
        </h2>
      </div>
      <div className="projects_lista_container">
        <ul className="projects_lista">
          {projetos.map((projeto, index) => (
            <li key={index} className="project_item">
              <h3>{projeto.nome}</h3>
              <img
                src={projeto.imagem}
                alt={`Preview do projeto ${projeto.nome}`}
                className="project_preview"
              />
              <p>{projeto.descricao}</p>
              <div className="project_links">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Repositório
                </a>
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
