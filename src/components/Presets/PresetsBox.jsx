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
                        preset="API"
                        descricao="Log amarelo para dados da API"
                        data="api"
                    />
                </div>
            </div>
        </>
    )  
}

export default Presets