// Componentes
import Inputs from "./ColunaEsquerda/Inputs"
import ColunaDireitaBox from "./ColunaDireita/ColunaDireitaBox"

// CSS
import "../../styles/layout/colunas.css"


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