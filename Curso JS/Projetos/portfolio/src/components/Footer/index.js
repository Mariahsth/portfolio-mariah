import './Footer.css'
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer(){



    return(
        <footer>
            <div className="container_textos_footer">

                <div className="container_redes_sociais_footer">
                    <a  href="https://www.linkedin.com/in/mariah-hoffmann/"><AiOutlineLinkedin  className='rede_social_footer'/></a>
                    <a href="https://github.com/Mariahsth"><AiOutlineGithub className='rede_social_footer'/></a>
                    <a  href="https://instagram.com/mariahsilveirath"><RiInstagramLine className='rede_social_footer'/></a>
                </div>

                <div className="container_email_footer">
                    <HiOutlineMail size={16}  />
                    <p>mariah.hoffmann@gmail.com</p>
                </div>
                <p>Desenvolvido por Mariah</p>

            </div>
        </footer>
    )
}