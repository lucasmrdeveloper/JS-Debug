import Preview from "../../features/preview/components/Preview"
import CodigoGerado from "../../features/codigoGerado/components/CodigoGerado"
import Modal from "../../features/presets/components/Modal"

import "./ColunaDireita.css"

const ColunaDireita = () => {
    return (
        <aside className="coluna-direita">
            <Preview />
            <CodigoGerado />
            <Modal />
        </aside>
    )   
}

export default ColunaDireita