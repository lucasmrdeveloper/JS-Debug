import { Link } from "react-router"

import "./Header.css"

const links = [
    {
        nome: "Editor",
        icone: "/editor.svg",
        caminho: "/"
    },
    {
        nome: "Meus Presets",
        icone: "/salvos.svg",
        caminho: "/meus-presets"
    }
]

function Header() {
    return(
        <header className="header-box">
            <div>
                <Link to="/" className="logo">
                    <h1>JS Debug</h1>
                    <p>Gerador de console.logs personalizados</p>
                </Link>
            </div>

            <nav>
                <ul className="header-menu-lista">
                    {links.map(link => 
                        <Link to={link.caminho}>
                            <img src={link.icone} />

                            {link.nome}
                        </Link>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header