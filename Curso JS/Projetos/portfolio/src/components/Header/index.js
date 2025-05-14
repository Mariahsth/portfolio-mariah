import './Header.css'

export default function Header(){

    return(
        <header>
            <nav>
                <ul className='header_menu'>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#tecnologies">Tecnologias</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>

            </nav>

        </header>
    )
}