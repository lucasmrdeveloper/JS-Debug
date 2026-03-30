// CSS
import "../../../styles/layout/preview.css"

// Componente
import PreviewConteudo from "./PreviewConteudo";

import usePreview from "../../../hooks/usePreview";
import { EstadoContext } from "../../../context/EstadoContext";
import { useContext } from "react";


function Preview() {
    const { estado } = useContext(EstadoContext)

    return(
       <div className="preview">
            <h2 className="preview-titulo">Preview do Console</h2>
            <p className="preview-texto">Confira como irá ficar no DevTools.</p>

            <div className="preview-itens">
                <div className="preview-janela">Console</div>

                <PreviewConteudo {... estado} />
            </div>
        </div> 
    )
}

export default Preview