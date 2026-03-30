function useCodigoGerado(estado) {
    const { 
        titulo, 
        descricao, 
        corTexto, 
        corFundo, 
        tamanhoFonte, 
        pesoFonte,
        espacamento,
        raioBorda,
        borda,
    } = estado

    
    const codigoGerado = `console.log(
    "%c ${titulo} ${descricao}",
    "color: ${corTexto};  background-color: ${corFundo};  font-size: ${tamanhoFonte};  font-weight: ${pesoFonte};  padding: ${espacamento};  border-radius: ${raioBorda}; border: ${borda};" \n)`
    

    return{
        titulo, 
        descricao, 
        corTexto, 
        corFundo, 
        tamanhoFonte, 
        pesoFonte,
        espacamento,
        raioBorda,
        borda,
        codigoGerado
    }
}

export default useCodigoGerado