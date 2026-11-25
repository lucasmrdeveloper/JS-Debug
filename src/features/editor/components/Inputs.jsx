import { useContext } from "react"

import { EstadoContext } from "../../../context/EstadoContext"

import SectionBox from "./SectionBox"
import ColorInput from "./ColorInput"
import InputEditor from "./InputEditor"

import "../../../styles/layout/personalizar.css"

const Inputs = () => {
    const { estado, setEstado } = useContext(EstadoContext)
    
    return(
        <div className="coluna-esquerda">

            <h2 className="personalizar-titulo">Personalizar Estilo</h2>

            <InputEditor 
                label = "Mensagem"
                id = "mensagem"
                value = {estado.mensagem}
                setEstado={setEstado}
            />
        
            <SectionBox>
                <ColorInput 
                    label = "Cor do Texto"
                    id = "corTexto"
                    value={estado.corTexto}
                />

                <ColorInput 
                    label = "Cor do Fundo"
                    id = "corFundo"
                    value = {estado.corFundo}
                />
            </SectionBox>

            <SectionBox>
                <InputEditor 
                    label="Tamanho da fonte"
                    id="tamanhoFonte"
                    value={estado.tamanhoFonte}
                    setEstado={setEstado}
                />

                <InputEditor 
                    label="Peso da fonte"
                    id="pesoFonte"
                    value={estado.pesoFonte}
                    setEstado={setEstado}
                />
            </SectionBox>

            <InputEditor 
                label="Espaçamento"
                id="espacamento"
                value={estado.espacamento}
                setEstado={setEstado}
            />
      
            <SectionBox>
                <InputEditor 
                    label="Raio da Borda"
                    id="raioBorda"
                    value={estado.raioBorda}
                    setEstado={setEstado}
                />

                <InputEditor 
                    label="Borda"
                    id="borda"
                    value={estado.borda}
                    setEstado={setEstado}
                />
            </SectionBox>
        </div>
    )
}

export default Inputs