import './Header.css'

export default function Header(){

    return(
        <header>
            <nav>
                <ul className='header_menu'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>

            </nav>

        </header>
    )
}