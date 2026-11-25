import { useFormatarDadosPreview } from "../hook/useFormatarDadosPreview"

import "../styles/ConsolePreview.css"

const ConsolePreview  = () => {
    const preview = useFormatarDadosPreview()
    
    return (
        <div className="preview__console" style={preview.styles.conteudo}>
            <p style={preview.styles.texto}>{preview.mensagem}</p>
        </div> 
    )
}

export default ConsolePreview