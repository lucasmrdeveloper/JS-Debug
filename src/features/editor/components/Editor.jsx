import { useContext } from "react"

import { EstadoContext } from "../../../context/EstadoContext"

import TextoInput from "./TextoInput"
import CorInput from "./CorInput"
import BoxInputs from "./BoxInputs"

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
        
            <BoxInputs>
                <CorInput 
                    label="Cor do Texto"
                    id="corTexto"
                    value={estado.corTexto}
                />

                <CorInput 
                    label="Cor do Fundo"
                    id="corFundo"
                    value={estado.corFundo}
                />
            </BoxInputs>

            <BoxInputs>
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
            </BoxInputs>

            <TextoInput
                label="Espaçamento"
                id="espacamento"
                value={estado.espacamento}
            />
      
            <BoxInputs>
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
            </BoxInputs>
        </div>
    )
}

export default Editor