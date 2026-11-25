import ConsolePreview from "./PreviewConsole"

import "../styles/Preview.css"

const Preview = () => {
    return (
       <div className="preview">
            <h2 className="preview__titulo">Preview do Console</h2>
            <p className="preview__descricao">Confira como irá ficar no DevTools.</p>

            <div className="preview__itens">
                <div className="preview__janela">Console</div>

                <ConsolePreview />
            </div>
        </div> 
    )
}

export default Preview