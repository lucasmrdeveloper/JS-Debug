function gerarCodigo(estado) {
    const { 
        mensagem, 
        corTexto, 
        corFundo, 
        tamanhoFonte, 
        pesoFonte,
        espacamento,
        raioBorda,
        borda,
    } = estado

    
    const codigoGerado = `console.log(
    "%c ${mensagem}",
    "color: ${corTexto};  background-color: ${corFundo};  font-size: ${tamanhoFonte};  font-weight: ${pesoFonte};  padding: ${espacamento};  border-radius: ${raioBorda}; border: ${borda};" \n)`
    

    return{
        codigoGerado
    }
}

export default gerarCodigo