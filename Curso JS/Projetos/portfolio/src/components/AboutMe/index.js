import "./AboutMe.css";
import fotoFormatura from "../../assets/mariah_home3.jpg";
import { useSlideInOnView } from "../../hooks/useSlideInOnView.js";

export default function AboutMe() {
  const slideInRef = useSlideInOnView("slide-in", { threshold: 0.1 })
  const slideInRef2 = useSlideInOnView("slide-out", { threshold: 0.1 })
 
  const carregaCV = () => {
    const fileUrl = "./MariahCV.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="about_me_container" id="about">
      <div className="about_me_titulo">
        <h2
        ref={slideInRef} className="slide-in"
        >
          Quem sou eu?
        </h2>
      </div>
      <div className="about_me_texto_foto  slide-out" ref={slideInRef2}>
        <div className="about_me_texto_container" >
          <h3>Olá, me chamo Mariah!</h3>
          <p>
            Sou Engenheira de Materiais, formada na Universidade Federal de
            Santa Catarina (UFSC) em Florianópolis-SC e atualmente estou em
            transição de carreira para a área de{" "}
            <strong className="texto_destaque">desenvolvimento web</strong>.
          </p>
          <p>
            Durante a graduação, ainda sem saber que trabalharia com
            programação, tive a oportunidade de estagiar em 3 grandes empresas e
            2 laboratórios da universidade, além de realizar intercâmbio de 1
            ano na França.
          </p>
          <p>
            Depois de formada, atuei 4 anos na área de formação em um cargo de
            liderança, sendo responsável por gerenciar um laboratório e uma
            equipe de 6 pessoas. Nesse período realizei alguns cursos de pyhton
            e tive meu primeiro contato com a programação.
          </p>
          <p>
            Passei a conhecer novas tecnologias, explorando um pouco mais a área
            web, como{" "}
            <strong className="texto_destaque">
              HTML, CSS, JavaScript, Node.js, React, Express
            </strong>
            , entre outras, em uma jornada no âmbito Full-stack. Desde então,
            tem sido apenas aprendizados atrás de aprendizados.
          </p>
          <p>
            Hoje sou muito feliz de trazer a experiência de dev mais próxima da
            realidade, e ansiosa para receber minha primeira oportunidade para
            atuar na área! 
          </p>
          <div className="container_CV">
            <p className="texto_CV">Confira meu currículo:</p>
            <button className="botao_CV" onClick={carregaCV}>
              CV
            </button>
          </div>
        </div>
        <img
          src={fotoFormatura}
          alt="Foto da Mariah na formatura"
          className="about_me_foto"
        />
      </div>
    </div>
  );
}
