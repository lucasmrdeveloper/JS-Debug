import { useContext } from "react";
import useFormatarDadosPreview from "../hook/useFormatarDadosPreview"

import { EstadoContext } from "../../../context/EstadoContext"

import "./styles/Preview.css"

const Preview = () => {
    const { estado } = useContext(EstadoContext)
    const preview = useFormatarDadosPreview(estado)

    return (
       <div className="preview">
            <h2 className="preview-titulo">Preview do Console</h2>
            <p className="preview-texto">Confira como irá ficar no DevTools.</p>

            <div className="preview-itens">
                <div className="preview-janela">Console</div>

                <div className="preview-conteudo" style={preview.box}>
                    <p className="preview-conteudo-descricao" style={preview.textos}>{preview.mensagem}</p>
                </div> 
            </div>
        </div> 
    )
}

export default Preview