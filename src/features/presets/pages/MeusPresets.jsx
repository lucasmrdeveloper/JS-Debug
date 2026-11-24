// Hook
import { useContext } from "react"

// Components
import Header from "../../../components/Header/Header"
import PresetSalvo from "../components/PresetSalvo"
import Notificacao from "../../../components/Notificacao/Notificacao"


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