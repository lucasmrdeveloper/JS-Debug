// CSS
import "../../styles/layout/presets.css"

// Componente
import ItemPreset from "./ItemPreset"

function Presets() {
    return(
        <>  
            <div className="presets-box">
                <div className="presets-itens">
                    <ItemPreset
                        preset="Sucesso"
                        descricao="Log verde para sucesso"
                        data="sucesso"
                    />

                    <ItemPreset
                        preset="Erro"
                        descricao="Log vermelho para erros"
                        data="erro"
                    />

                    <ItemPreset
                        preset="API"
                        descricao="Log azul para dados da API"
                        data="api"
                    />
                </div>
            </div>
        </>
    )  
}

export default Presets