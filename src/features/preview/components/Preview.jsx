import ConsolePreview from "./PreviewConsole"

import "../styles/Preview.css"

const Preview = () => {
    return (
       <div className="preview">
            <h2 className="preview-titulo">Preview do Console</h2>
            <p className="preview-texto">Confira como irá ficar no DevTools.</p>

            <div className="preview-itens">
                <div className="preview-janela">Console</div>

                <ConsolePreview />
            </div>
        </div> 
    )
}

export default Preview