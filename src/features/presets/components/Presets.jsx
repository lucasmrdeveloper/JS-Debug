import { presetsIniciais } from "../data/presetsIniciais"

import ItemPreset from "./ItemPreset"

import "../styles/Presets.css"

const Presets = () => {
    return (
        <div className="presets-box">
            <div className="presets-itens">
                {presetsIniciais.map(({ tipo, descricao, mensagem, cor }) =>
                    <ItemPreset
                        key={id}
                        tipo={tipo}
                        descricao={descricao}
                        mensagem={mensagem}
                        cor={cor}
                    />
                )}
            </div>
        </div>
    )  
}

export default Presets