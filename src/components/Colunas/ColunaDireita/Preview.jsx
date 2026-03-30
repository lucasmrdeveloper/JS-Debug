// Hook
import { useContext } from "react";

// Contexto
import { EstadoContext } from "../../../context/EstadoContext";

// Componente
import PreviewConteudo from "./PreviewConteudo";

// CSS
import "../../../styles/layout/preview.css"


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