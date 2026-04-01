// Context
import { useContext, useState } from "react"
import { PresetContext } from "../../context/PresetContext"

// Componente
import PreviewConteudo from "../Colunas/ColunaDireita/PreviewConteudo";

// Lógica Remover
import removerPreset from "../../hooks/removerPreset";
import copiarCodigo from "../../hooks/copiarCodigo";


function PresetSalvo() {
    const { preset, setPreset } = useContext(PresetContext)
    
    const { copiar } = copiarCodigo()
    const { remover } = removerPreset()

   const [copy, setCopy] = useState(false)

    return(
        <>
            <div className="presets-salvos-box">
                {preset.map((item, index) => {
                    return(
                        <div key={index} className="preset-salvo-box"
                        id={index}>
                            <h2 className="preset-salvo-nome">{item.nomePreset}</h2>

                            <div className="preset-conteudo-box">
                                <PreviewConteudo 
                                     {...item}
                                /> 
                            </div>

                            <div className="preset-salvo-btns">
                                <button className="preset-salvo-copiar" onClick={() => copiar(item.codigoGerado, setCopy, index)}>{copy === index ? "Copiado" : "Copiar"}</button>
                                <button className="preset-salvo-excluir" onClick={() => remover(item, setPreset)}>Excluir</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
   )
} 



export default PresetSalvo