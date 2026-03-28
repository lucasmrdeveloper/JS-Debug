// CSS
import "../../styles/layout/presets.css"

// Componente
import Preset from "./Preset"


function Presets() {
    return(
        <>  
            <div className="presets-box">
                <div className="presets-itens">
                    <Preset
                        preset="Sucesso"
                        descricao="Log verde para sucesso"
                        data="sucesso"
                    />

                    <Preset
                        preset="Erro"
                        descricao="Log vermelho para erros"
                        data="erro"
                    />

                    <Preset
                        preset="Aviso"
                        descricao="Log amarelo para operações avisos"
                        data="aviso"
                    />
                </div>
            </div>
        </>
    )  
}

export default Presets