function gerarCodigo(estado) {
    const { 
        mensagem, 
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
    "%c ${mensagem} ${descricao}",
    "color: ${corTexto};  background-color: ${corFundo};  font-size: ${tamanhoFonte};  font-weight: ${pesoFonte};  padding: ${espacamento};  border-radius: ${raioBorda}; border: ${borda};" \n)`
    

    return{
        codigoGerado
    }
}

export default gerarCodigo