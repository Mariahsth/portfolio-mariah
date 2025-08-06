import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useSlideInOnView } from "../../hooks/useSlideInOnView";
import "./Projects.css";
import { projetos } from "./projectsData";
import { icones } from "../Tecnologies/icones";
import { useEffect, useState, useRef } from "react";
import Botao from "../Botao";

export default function Projects() {
  const ref = useSlideInOnView("slide-in", { threshold: 0.2 });
  const [filter, setFilter] = useState("Todos");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  // fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterClick = (event) => {
    const value = event.target.innerText;
    setFilter(value);
  };

  return (
    <div className="projects_container" id="projects">
      <div className="projects_titulo_container">
        <h2 ref={ref} className="slide-in">
          Projetos
        </h2>
      </div>
      <div className="filtros_titulo_container">
        <p>Filtrar por:</p>

        {isMobile ? (
          <div className="custom_dropdown" ref={dropdownRef}>
            <div
              className="dropdown_selected"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {filter}
              <img
                className="dropdown_arrow"
                src={
                  isOpen
                    ? "/down-arrow-up.svg"
                    : "/down-arrow-svgrepo-com.svg"
                }
                alt="Seta"
              />
            </div>

            {isOpen && (
              <div className="dropdown_menu">
                {["Todos", "Full-Stack", "Front-End", "Back-End"].map((item) => (
                  <div
                    key={item}
                    className={`dropdown_item ${item === filter ? "active" : ""}`}
                    onClick={() => {
                      setFilter(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="filtros_container">
            <Botao onClick={handleFilterClick}>Todos</Botao>
            <Botao onClick={handleFilterClick}>Full-Stack</Botao>
            <Botao onClick={handleFilterClick}>Front-End</Botao>
            <Botao onClick={handleFilterClick}>Back-End</Botao>
          </div>
        )}
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
          {projetos
            .filter((project) => filter === "Todos" || project.type === filter)
            .map((projeto, index) => (
              <SwiperSlide key={projeto.id}>
                <Link
                  to={`/project/${projeto.id}`}
                  key={`${projeto.id}-link-${index}`}
                  className="project_link"
                >
                  <div key={`${projeto.id}-${index}`} className="project_item">
                    <h3 className="nome_projeto">{projeto.nome}</h3>
                    <img
                      src={projeto.imagem}
                      alt={`Preview do projeto ${projeto.nome}`}
                      className="project_preview"
                    />
                    <div className="container_icone_projeto">
                      {icones.map(
                        (icone, index) =>
                          projeto.tags
                            .split(",")
                            .map((tag) => tag.trim())
                            .includes(icone.nome) && (
                            <img
                              key={`${projeto.id}-${index}`}
                              className="icone_projeto"
                              src={icone.url}
                              alt={icone.nome}
                            />
                          )
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
