function usePreview(source) {
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