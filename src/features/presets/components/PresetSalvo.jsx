import { useContext } from "react"
import { PresetContext } from "../../../context/PresetContext"

import ConsolePreview from "../../../shared/components/ConsolePreview"
import BotaoCopiar from "../../../shared/components/BotãoCopiar"

import useHandleRemoverPreset from "../hook/useHandleRemoverPreset"

const PresetSalvo = () => {
    const { preset, setPreset } = useContext(PresetContext)
    const handleRemoverPreset = useHandleRemoverPreset()

    return (
        <div className="presets-salvos-box">
            {preset.map((item) => {
                const {id, nomePreset, codigoGerado} = item
                
                return (
                    <div key={id} className="preset-salvo-box">
                        <h2 className="preset-salvo-nome">{nomePreset}</h2>

                        <div className="preset-conteudo-box">
                            <ConsolePreview item={item} />
                        </div>

                        <div className="preset-salvo-btns">
                            <BotaoCopiar codigo={codigoGerado}/>

                            <button className="preset-salvo-excluir" onClick={() => handleRemoverPreset(id, setPreset)}>
                                <svg className="preset-excluir-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                                Excluir
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
   )
} 

export default PresetSalvo