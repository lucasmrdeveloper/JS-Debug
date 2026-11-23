// Hook
import { useContext } from "react";

// Contexto
import { EstadoContext } from "../../../context/EstadoContext";

// CSS
import "./styles/Preview.css"


function Preview() {
    const { estado } = useContext(EstadoContext)
    const preview = formatarDadosPreview(estado)

    return(
       <div className="preview">
            <h2 className="preview-titulo">Preview do Console</h2>
            <p className="preview-texto">Confira como irá ficar no DevTools.</p>

            <div className="preview-itens">
                <div className="preview-janela">Console</div>
            </div>
        </div> 
    )
}

export default Preview