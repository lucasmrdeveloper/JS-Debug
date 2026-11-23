// Componentes
import Inputs from "./Inputs"
import ColunaDireitaBox from "../../../components/Colunas/ColunaDireita/ColunaDireitaBox"

// CSS
import "./styles/colunas.css"


function Colunas() {
    return(
        <> 
            <div className="colunas">
                <Inputs></Inputs>
                <ColunaDireitaBox></ColunaDireitaBox>
            </div>
        </>
    )
}

export default Colunas