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
        <header className="header">
            <NavLink to="/" className="header__logo">
                <h1>JS Debug</h1>
                <p>Gerador de console.logs personalizados</p>
            </NavLink>
          
            <nav>
                <ul className="header__menu">
                    {links.map(({nome, icone, caminho}) =>
                        <li key={nome}>
                            <NavLink 
                                to={caminho}
                                className="header__menu-link"
                            >
                                <img src={icone} />

                                {nome}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header