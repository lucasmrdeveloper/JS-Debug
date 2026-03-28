// Lógica
import usePreview from "../../../hooks/usePreview";

function PreviewConteudo( contexto ) {
    console.log("\n\n\n")
 /*    console.log('%c ===== Preview - Conteudo ===== ', 'color: #00ff88; background: #1a1a2e; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 4px'); */

    /* console.log("contexto", contexto)
    console.log("contexto.titulo:", contexto.titulo)
    console.log("contexto.descricao:", contexto.descricao)
    console.log("contexto.textos:", contexto.textos)
    console.log("contexto.box:", contexto.box)
    
    

    console.log("preview do conteudo", preview) */
    const preview = usePreview(contexto)

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