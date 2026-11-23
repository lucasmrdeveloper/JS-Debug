// Lógica
import formatarDadosPreview from "../../../hooks/formatarDadosPreview";


function PreviewConteudo( contexto ) {
    const preview = formatarDadosPreview(contexto)

    return(
        <>
           <div className="preview-conteudo" style={preview.box}>
                <p className="preview-conteudo-descricao" style={preview.textos}>{preview.mensagem}</p>
            </div> 
        </>
    )
}

export default PreviewConteudo