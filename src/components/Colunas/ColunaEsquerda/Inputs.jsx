// Hook
import { useContext } from "react"

// Contexto
import { EstadoContext } from "../../../context/EstadoContext"

// Componentes
import SectionBox from "./SectionBox"
import ItemInput from "../ColunaEsquerda/ItemInput"
import ItemColor from "./ItemColor"

// CSS
import "../../../styles/layout/personalizar.css"


function Inputs() {
    const { estado, setEstado } = useContext(EstadoContext)
    
    return(
        <>
            <div className="coluna-esquerda">

                <h2 className="personalizar-titulo">Personalizar Estilo</h2>

                <SectionBox titulo="Texto">
                    <ItemInput
                        label="Mensagem"
                        id="mensagem"
                        value={estado.mensagem}
                        data="mensagem"
                        setEstado={setEstado}
                    />
                </SectionBox>

                <SectionBox titulo="Cores">
                    <ItemColor
                        label="Cor do Texto"
                        id="cor-texto"
                        value={estado.corTexto}
                        data="cor-texto"
                        setEstado={setEstado}
                    />

                    <ItemColor
                        label="Cor do Fundo"
                        id="cor-fundo"
                        value={estado.corFundo}
                        data="cor-fundo"
                        setEstado={setEstado}
                    />
                </SectionBox>

                <SectionBox titulo="Tipografia">
                    <ItemInput
                        label="Tamanho da fonte"
                        id="tamanho-fonte"
                        value={estado.tamanhoFonte}
                        data="tamanho-fonte"
                        setEstado={setEstado}
                    />

                    <ItemInput
                        label="Peso da fonte"
                        id="peso-fonte"
                        value={estado.pesoFonte}
                        data="peso-fonte"
                        setEstado={setEstado}
                    />
                </SectionBox>

                <SectionBox titulo="Espaçamentos">
                    <ItemInput
                        label="Padding"
                        id="espacamento"
                        value={estado.espacamento}
                        data="espacamento"
                        setEstado={setEstado}
                    />
                </SectionBox>

                <SectionBox titulo="Bordas">
                    <ItemInput
                        label="Border Radius"
                        id="raio-borda"
                        value={estado.raioBorda}
                        data="raio-borda"
                        setEstado={setEstado}
                    />

                    <ItemInput
                        label="Borda"
                        id="borda"
                        value={estado.borda}
                        data="borda"
                        setEstado={setEstado}
                    />
                </SectionBox>
            </div>
        </>
    )
}

export default Inputs