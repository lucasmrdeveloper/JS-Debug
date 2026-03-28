// Componentes
import Preview from "./Preview"
import CodigoGerado from "./CodigoGerado"
import Modal from "./Modal"


function ColunaDireitaBox() {
    return(
        <>
            <div className="coluna-direita">
                <Preview />
                <CodigoGerado />
                <Modal />
            </div>
        </>
    )   
}

export default ColunaDireitaBox