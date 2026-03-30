// Lógica
import formatarDadosPreview from "../../../hooks/formatarDadosPreview";


function PreviewConteudo( contexto ) {
    const preview = formatarDadosPreview(contexto)

    return(
        <>
           <div className="preview-conteudo" style={preview.box}>
                <h2 className="preview-conteudo-titulo" style={preview.textos}>{preview.titulo}</h2>
                <p className="preview-conteudo-descricao" style={preview.textos}>{preview.descricao}</p>
            </div> 
        </>
    )
}

export default PreviewConteudo