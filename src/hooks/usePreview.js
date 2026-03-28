

function usePreview(source) {
    /* console.log('%c ===== usePreview ===== ', 'color: #00ff88; background: #1a1a2e; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 4px');
    
    console.log("source do usoPreview", source)
    console.log("source.titulo:", source.titulo)
    console.log("source.descricao:", source.descricao)
    console.log("source.corTexto:", source.corTexto)
    console.log("source.corFundo:", source.corFundo)
    console.log("source.espacamento:", source.espacamento)
    console.log("source.raioBorda:", source.raioBorda)
    console.log("source.borda:", source.borda)
    console.log("source.tamanhoFonte:", source.tamanhoFonte)
    console.log("source.pesoFonte:", source.pesoFonte)
    console.log("source.id", source.id) */
    
    if (!source) return null

    if(source) {
        return {
            titulo: source.titulo,
            descricao: source.descricao,
            id: source.id,

            box: {
                padding: source.espacamento,
                backgroundColor: source.corFundo,
                borderRadius: source.raioBorda,
                border: source.borda
            },

            textos: {
                color: source.corTexto,
                fontSize: source.tamanhoFonte,
                fontWeight: source.pesoFonte
            }
        }
    }
    
}

export default usePreview