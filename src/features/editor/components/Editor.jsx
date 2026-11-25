import { useContext } from "react"

import { EstadoContext } from "../../../context/EstadoContext"

import TextoInput from "./TextoInput"
import SectionBox from "./SectionBox"
import ColorInput from "./ColorInput"

import "../styles/Editor.css"

const Editor = () => {
    const { estado } = useContext(EstadoContext)
    
    return (
        <div className="coluna-esquerda">

            <h2 className="personalizar-titulo">Personalizar Estilo</h2>

            <TextoInput
                label="Mensagem"
                id="mensagem"
                value={estado.mensagem}
            />
        
            <SectionBox>
                <ColorInput 
                    label="Cor do Texto"
                    id="corTexto"
                    value={estado.corTexto}
                />

                <ColorInput 
                    label="Cor do Fundo"
                    id="corFundo"
                    value={estado.corFundo}
                />
            </SectionBox>

            <SectionBox>
                <TextoInput
                    label="Tamanho da fonte"
                    id="tamanhoFonte"
                    value={estado.tamanhoFonte}
                />

                <TextoInput
                    label="Peso da fonte"
                    id="pesoFonte"
                    value={estado.pesoFonte}
                />
            </SectionBox>

            <TextoInput
                label="Espaçamento"
                id="espacamento"
                value={estado.espacamento}
            />
      
            <SectionBox>
                <TextoInput
                    label="Raio da Borda"
                    id="raioBorda"
                    value={estado.raioBorda}
                />

                <TextoInput
                    label="Borda"
                    id="borda"
                    value={estado.borda}
                />
            </SectionBox>
        </div>
    )
}

export default Editor