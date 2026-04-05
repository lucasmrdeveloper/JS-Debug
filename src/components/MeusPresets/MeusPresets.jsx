// Hook
import { useContext } from "react"

// Components
import Header from "../Header/Header"
import PresetSalvo from "./PresetSalvo"
import Notificacao from "../Notificacao/Notificacao"


// CSS
import "../../styles/layout/meus-presets.css"
import "../../styles/layout/responsivo.css"


function MeusPresets() {
    return(
        <>
            <Header></Header>

            <div className="meus-presets-container">
                <h2 className="meus-presets-titulo">Meus Presets</h2>

                <PresetSalvo/>
            </div>
        </>
    )
}

export default MeusPresets