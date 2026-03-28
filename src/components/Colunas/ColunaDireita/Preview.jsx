// CSS
import "../../../styles/layout/preview.css"

// Componente
import PreviewConteudo from "./PreviewConteudo";

import usePreview from "../../../hooks/usePreview";
import { EstadoContext } from "../../../context/EstadoContext";
import { useContext } from "react";


function Preview() {
    /*console.log("\n\n")
     console.log('%c ===== 2 - Preview ===== ', 'color: #00ff88; background: #1a1a2e; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 4px'); */

    const { estado } = useContext(EstadoContext)
    //const preview = usePreview(estado)
        
    //console.log("preview", preview)

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