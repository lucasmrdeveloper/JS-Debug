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
                                <button className="preset-salvo-copiar" onClick={() => copiar(item.codigoGerado, setCopy, index)}>
                                    <svg className="preset-copiar-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"/></svg>
                                    {copy === index ? "Copiado!" : "Copiar"}
                                </button>
                                <button className="preset-salvo-excluir" onClick={() => remover(item, setPreset)}>
                                    <svg className="preset-excluir-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
   )
} 



export default PresetSalvo