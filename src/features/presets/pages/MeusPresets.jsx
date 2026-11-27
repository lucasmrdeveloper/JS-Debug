import Header from "../../../layouts/Header/Header"
import PresetSalvo from "../components/PresetSalvo"

import "./MeusPresets.css"

const MeusPresets = () => {
    return (
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