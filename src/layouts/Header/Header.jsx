import { NavLink } from "react-router"

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

const Header = () => {
    return (
        <header className="header-box">
            <NavLink to="/" className="logo">
                <h1>JS Debug</h1>
                <p>Gerador de console.logs personalizados</p>
            </NavLink>
          
            <nav>
                <ul className="header-menu-lista">
                    {links.map(link =>
                        <li>
                            <NavLink to={link.caminho}>
                                <img src={link.icone} />

                                {link.nome}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header