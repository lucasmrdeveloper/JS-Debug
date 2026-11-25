import { useFormatarDadosPreview } from "../hook/useFormatarDadosPreview"

const ConsolePreview  = () => {
    const preview = useFormatarDadosPreview()
    
    return (
        <div className="preview-conteudo" style={preview.box}>
            <p className="preview-conteudo-descricao" style={preview.textos}>{preview.mensagem}</p>
        </div> 
    )
}

export default ConsolePreview