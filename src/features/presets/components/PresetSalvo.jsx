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
                                <img src="/excluir.svg" alt="Ícone de excluir" />
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