import { Link, useNavigate, useParams } from "react-router-dom";
import "./Project.css";
import { projetos } from "../../components/Projects/projectsData";
import { AiOutlineGithub } from "react-icons/ai";
import { icones } from "../../components/Tecnologies/icones";
import { FaLaptopCode, FaCog } from 'react-icons/fa';
import { useSlideInOnView } from "../../hooks/useSlideInOnView";
import { useEffect } from "react";


export default function Project() {
  const { id } = useParams();
  const projeto = projetos.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  const slideInRef = useSlideInOnView("slide-in", { threshold: 0.1 });
  const slideInRef2 = useSlideInOnView("slide-out", { threshold: 0.1 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container_project">
      <div className="container_voltar">
        <p className="project_voltar" onClick={() => navigate(-1)}>
          {" "}
          &lt; Voltar
        </p>
      </div>
      <div className="project_container_conteudo">
        <h1 className="titulo_project">{projeto.nome}</h1>
        <div className="container_imagem_descricao">
          <div className="bloco_imagem">
            <div className="project_imagem_hover_container slide-in" ref={slideInRef}>
              <Link  to={projeto.demo} className="project_imagem_link_container">
                <img
                  className="project_imagem"
                  
                  src={projeto.imagem}
                  alt={`Preview do projeto ${projeto.nome}`}
                />
                <p  >Acessar projeto</p>
              </Link>

            </div>
            <div className="container_container_icone_link_github">
              <div className="container_icone_link_github">
                <a
                  className="project_link_github"
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="icone_github" />
                  Acessar repositório no github
                </a>
              </div>
            </div>

          </div>
          <div className="linha_divisoria_vertical"></div>

          <div className="descricao_projeto slide-out" ref={slideInRef2} >
            <div>
              {projeto.descricao.split("\n\n").map((paragrafo, index) => (
                <p
                  className={`texto_descricao ${
                    paragrafo.includes("Recursos do aplicativo:") &&
                    "texto_destacado"
                  }`}
                  key={index}
                >
                  {paragrafo.includes("Recursos do aplicativo") ? (
                    <>
                      <FaCog style={{ marginRight: '0.5rem', background:'transparent' }} />
                      {paragrafo}
                    </>
                    ) : (
                      paragrafo
                    )}
                </p>
              ))}
              <p className="texto_descricao texto_destacado">
              <FaLaptopCode  style={{ marginRight: '0.5rem', background:'transparent'  }}  />
                Principais tecnologias utilizadas:
              </p>


              {projeto.tags.split(", ").map((tag, index) => {
                const icone = icones.find((icone) => tag.includes(icone.nome));
                return (
                  <div
                    className="texto_descricao container_tecnologias"
                    key={index}

                  >
                    {icone && (
                      <img
                        src={icone.url}
                        alt={`Ícone de ${icone.nome}`}
                        style={{ width: "25px", height: "25px" }}
                      />
                    )}
                    <span>{tag}</span>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
