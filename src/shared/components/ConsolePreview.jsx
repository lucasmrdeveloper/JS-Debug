import { useFormatarDadosPreview } from "../hooks/useFormatarDadosPreview"

import "../styles/ConsolePreview.css"

const ConsolePreview  = ({ item }) => {
    const preview = useFormatarDadosPreview(item)
    
    return (
        <div className="preview__console" style={preview.styles.conteudo}>
            <p style={preview.styles.texto}>{preview.mensagem}</p>
        </div> 
    )
}

export default ConsolePreview