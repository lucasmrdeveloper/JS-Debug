// Componentes
import Preview from "../../../features/preview/components/Preview"
import CodigoGerado from "../../../features/codigoGerado/components/CodigoGerado"
import Modal from "../../../features/presets/components/Modal"


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